const path = require('path');

module.exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Récupération de toutes les émissions
  const shows = await graphql(`
    query OuiedireShowsQuery {
      allDirectusShow(sort: {order: DESC, fields: release_date}) {
        nodes {
          id
          title
          ref
          release_date
          collection {
            name
            slug
          }
          curators {
            name
          }
        }
      }
    }
  `);

  // Gestion des erreurs
  if (shows.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Création de la page affichant la liste des émissions
  createPage({
    path: '/',
    component: path.resolve('./src/templates/show-list.js'),
    context: shows,
  });

  // Création d'une page pour chaque émission
  shows.data.allDirectusShow.nodes.forEach(show => {
    createPage({
      path: `/emission/${show.collection.slug}-${show.ref}`,
      component: path.resolve('./src/templates/show.js'),
      context: {
        show: show,
      },
    });
  });
};
