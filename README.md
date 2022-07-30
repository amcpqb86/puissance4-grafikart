# Puissance 4 - Tuto Grafikart

[Lien du tuto](https://grafikart.fr/formations/puissance-4-websocket)

## Objectifs 

L'objectif du projet est de créer un jeu de puissance 4 connecté où 2 joueurs peuvent se défier.

- Le premier utilisateur choisit un pseudo et obtient l'URL à partager pour inviter les autres joueurs
- Le joueur 2 choisit aussi un pseudo et rejoint la partie
- Les 2 joueurs choisissent une partie
- Le créateur de la partie lance la partie
- Les joueurs placent des pions à tour de rôle dans une grille de 7x6
- Un joueur gagne si 4 pions sont alignés verticalement / horizontal ou en diagonale

## Technologies 

- NodeJS
- TypeScript
- React
- XState
- WebSocket
- npmjs : reconnecting-websocket
- npmjs : websocket
- Fastify

## Etapes 

- [x] Initialisation du projet avec ViteJS
- [x] Machine à état (tests avec Vitest)
- [ ] Interface 
- [ ] Jeu hors ligne
- [ ] Mise en place du serveur
- [ ] Jeu en ligne
- [ ] Mise en ligne (déploiement)