# Exemple d'un serveur `http` qui persiste des messages

Si vous êtes capable de mettre les messages dans un objet JSON, alors
vous pouvez utiliser une bibliothèque js, que j'ai créé pour pouvoir
persister dans un fichier un objet JSON:
<https://github.com/fraczak/json-file-object>

Voici un exemple du code. Pour l'utiliser il faut:

1. dans le répertoire faire

        npm install

   ça va télécharger et
   installer les librairies: 'express', 'pug', 'body-parser', et
   'json-file-object',

2. pour exécuter l'exemple, faire 

        node index.js

   et aller vers <hhtp://localhost:9876>
 
J'espère que ça va vous aider.
