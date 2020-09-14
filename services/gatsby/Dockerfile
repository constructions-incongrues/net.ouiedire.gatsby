# https://hub.docker.com/_/node/
FROM node:14.10.1-alpine3.11

# Déclaration des ports exposés par le conteneur
EXPOSE 8000

# Définition du répertoire de travail
WORKDIR /usr/src/app
RUN chown -R node:node /usr/src/app

# Installation du CLI GatsbyJS
# https://www.gatsbyjs.com/docs/gatsby-cli/
RUN yarn global add gatsby-cli

# Définition des commandes par défaut
ENTRYPOINT [ "gatsby" ]
CMD [ "develop", "-H", "0.0.0.0"]

# Définition de l'utilisateur par défaut
USER node

# Installation des dépendances du projet
COPY ./src/package.json ./package.json
RUN yarn install

# Copie des sources du projet
COPY ./src .
