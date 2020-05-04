# Simple App - A small demo of Angular
## Set-up
clone du repo && installation des dépendances: 
```
git clone https://github.com/Polytech-Paris-Sud-Web/TP-ThibaudGermain.git
cd ./TP-ThibaudGermain
npm install
```
## Developpement
Lancement de l'application en mode local (le serveur json est simulé):
```
npm run start
```
Vous pouvez désormais accéder à l'application à l'adresse : `http://localhost:4200/`


## Build
Vous pouvez également builder l'application (mode production):
```
npm run build
```
## Pourquoi avoir migré vers la dernière version d'angular ?

La migration vers la dernière version d'angular permet plusieurs choses :
- D'avoir les dernières nouveautés d'angular et de typescript
- D'avoir les corrections de bugs (sécurité ou non) des anciennes versions
- D'être compatible avec les dernières versions des autres packages (et de profiter aussi des dernières nouveautés de ceux-ci)

Pourquoi est-ce utile pour le projet de PWA ?
- Car la dernière version d'angular utilise IVY et permet d'avoir des applications qui prennent beaucoup moins de place
