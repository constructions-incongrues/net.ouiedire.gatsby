#!/usr/bin/make

# Paramétrage de make
.PHONY: env

# Paramètres obligatoires
APP_ENVIRONMENT = localhost

# Chargement de la configuration environnementale
include .cicd/env/$(APP_ENVIRONMENT).env
export $(shell sed 's/=.*//' .cicd/env/$(APP_ENVIRONMENT).env)
export $(shell APP_ENVIRONMENT=$(APP_ENVIRONMENT))

# Paramètres extrapolés
COMPOSE_PROJECT_PREFIX = $(subst .,,$(COMPOSE_PROJECT_NAME))

# Commandes publiques

## Misc

help: ## Affichage de ce message d'aide
	@printf "\033[36m%s\033[0m (v%s)\n\n" $$(basename $$(pwd)) $$(git describe --tags --always)
	@echo "Commandes\n"
	@for MKFILE in $(MAKEFILE_LIST); do \
		grep -E '^[a-zA-Z0-9\._-]+:.*?## .*$$' $$MKFILE | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m  %-30s\033[0m  %s\n", $$1, $$2}'; \
	done
	@echo ""
	@$(MAKE) --no-print-directory urls

## Contrôle des conteneurs

clean: stop ## Suppression des conteneurs. Les volumes Docker sont conservés
	docker-compose \
		-f docker-compose.yml \
	rm -f

dev: env clean build  ## Démarrage de l'application et des outils de développement
	docker-compose \
		-f docker-compose.yml \
			up \
			--remove-orphans \
			-d
	@$(MAKE) --no-print-directory help

logs:  ## Affiche un flux des logs de conteneurs de l'application
	docker-compose \
		-f docker-compose.yml \
			logs -f

start: ## Démarrage de l'application
	docker-compose up \
		--remove-orphans \
		-d

stop: ## Arrêt de l'application
	docker-compose \
		-f docker-compose.yml \
			stop

prune: clean ## Purge des artefacts créés par Docker. ATTENTION : les volumes Docker sont supprimés
	-docker network rm $(COMPOSE_PROJECT_PREFIX)_default

# Commandes privées

build: # Construction des images Docker de l'application
	docker-compose build

env: # Génération du fichier .env courant en fonction de l'environnement d'exécution
	cat .cicd/env/$(APP_ENVIRONMENT).env > ./.env
	echo "APP_ENVIRONMENT=$(APP_ENVIRONMENT)" >> ./.env

urls: # Affichage de la liste des URL publiques
	@echo "Services"
	@echo
	@echo "  Application"
	@echo
	@echo "    \033[36mPage d'accueil\033[0m : http://$(GATSBY_HOSTNAME)"
	@echo
	@echo "  Développement"
	@echo
	@echo "    \033[36mGraphiQL\033[0m : http://$(GATSBY_HOSTNAME)/___graphql"
