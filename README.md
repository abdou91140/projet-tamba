
# Guide d'installation du projet

1. **Prérequis**
   - [Git](https://git-scm.com/) : Système de gestion de versions décentralisé.
   - [Node.js](https://nodejs.org/) : Environnement d'exécution JavaScript.

2. **Clonage du Repository**
   - Ouvrez votre IDE à partir d'un dossier existant ou créez un nouveau dossier dédié au projet.
   - Ouvrez le terminal du projet.
   - Clonez le repository :
     ```bash
     git clone https://github.com/abdou91140/projet-tamba.git
     ```

3. **Vérification de la version de Node.js**
   - Vérifiez la version actuelle de Node.js :
     ```bash
     node -v
     ```
   - Si la version est inférieure à Node.js 18.17, mettez à jour via le [lien](https://nodejs.org/).
   - Vérifiez à nouveau la version dans le terminal.

4. **Installation des dépendances**
   - Assurez-vous d'avoir la bonne version de Node.js.
   - Installez les dépendances du projet :
     ```bash
     npm install
     ```

5. **Lancement du Projet**
   - Une fois l'installation des dépendances terminée.
   - Lancer l'application le projet utilise (localhost:3000) :
     ```bash
     npm run dev
     ```