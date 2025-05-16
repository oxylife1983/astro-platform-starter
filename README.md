# Boissons Express - E-commerce pour Pharmacies en Côte d'Ivoire

Une application e-commerce développée avec Astro.js et Tailwind CSS, permettant aux pharmacies et commerces en Côte d'Ivoire de commander des cartons de boissons (24 canettes) en ligne.

## Fonctionnalités

- **Catalogue de produits** : Affichage des produits par catégorie et par marque
- **Panier d'achat** : Ajout, modification et suppression de produits
- **Processus de commande** : Checkout avec informations de livraison et options de paiement
- **Compte utilisateur** : Création de compte, connexion, gestion du profil et des adresses
- **Suivi des commandes** : Historique et statut des commandes
- **Interface en français** : Adaptée au marché ivoirien
- **Prix en francs CFA** : Affichage des prix dans la devise locale

## Astro Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Deploying to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/astro-platform-starter)

## Developing Locally

| Prerequisites                                                                |
| :--------------------------------------------------------------------------- |
| [Node.js](https://nodejs.org/) v18.14+.                                      |
| (optional) [nvm](https://github.com/nvm-sh/nvm) for Node version management. |

1. Clone this repository, then run `npm install` in its root directory.

2. For the starter to have full functionality locally (e.g. edge functions, blob store), please ensure you have an up-to-date version of Netlify CLI. Run:

```
npm install netlify-cli@latest -g
```

3. Link your local repository to the deployed Netlify site. This will ensure you're using the same runtime version for both local development and your deployed site.

```
netlify link
```

4. Then, run the Astro.js development server via Netlify CLI:

```
netlify dev
```

If your browser doesn't navigate to the site automatically, visit [localhost:8888](http://localhost:8888).
