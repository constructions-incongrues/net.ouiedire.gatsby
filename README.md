# net.ouiedire.gatsby

## Présentation

Basée sur [GatsbyJS](https://www.gatsbyjs.com), cette application est destinée à la génération du site https://www.ouiedire.net à partir des données exposées par le projet [net.ouiedire.data](https://github.com/constructions-incongrues/net.ouiedire.data).

## Développement

### Pré-requis

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)
- [Make](https://www.gnu.org/software/make/)
- [Traefik](https://github.com/constructions-incongrues/net.constructions-incongrues.traefik)

### Composants

#### Application

- [`gatsby`](https://www.gatsbyjs.com) : Générateur de site basé sur React

### Interface en ligne de commande

L'application expose un jeu d'outils destiné au contrôle et au développement d

La liste des commandes et leur documentation peut être obtenue en exécutant la commande suivante :

```sh
make help
```

### Cookbooks

#### Démarrer l'application et des outils de développement

**NB : L'application  [net.ouiedire.data](https://github.com/constructions-incongrues/net.ouiedire.data) doit être préalablement démarrée.**

```sh
make dev
```

L'exécution de cette commande affiche la liste des URL accessibles.

### Contribuer au projet

Se référer au [guide de contribution](/CONTRIBUTING.md).

