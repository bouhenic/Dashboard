# Dashboard
![Texte alternatif](classes.svg)
## Classe Capteur
- Rôle : Représente un capteur générique avec des propriétés et des méthodes communes.
- Propriétés :
  - id : Identifiant unique du capteur.
  - nom : Nom du capteur.
  - dateDerniereLecture :
   - Stocke la date/heure de la dernière lecture des données.
- Méthodes :
  - obtenirDonnees() :
    - Met à jour dateDerniereLecture avec la date actuelle.
    - Retourne un message générique "Données du capteur".
  - afficherInfos() :
    - Retourne une chaîne contenant l'identifiant et le nom du capteur, formatée comme [id] nom.
## Classe CapteurTemperature
- Héritage :
 - Hérite de la classe Capteur.
 - Représente un capteur spécialisé pour la température.
- Méthode redéfinie :
  - obtenirDonnees() :
   - Appelle obtenirDonnees() de la classe parent (super.obtenirDonnees()) pour mettre à jour la date.
   - Génère une température aléatoire entre 0 et 30 (arrondie à 2 décimales).
   - Retourne une chaîne formatée comme Température : xx.xx°C.
## Classe CapteurHumidite
- Héritage :
  - Hérite de la classe Capteur.
  - Représente un capteur spécialisé pour l'humidité.
- Méthode redéfinie :
 - obtenirDonnees() :
  - Appelle obtenirDonnees() de la classe parent pour mettre à jour la date.
  - Génère une humidité aléatoire entre 0 et 100 (arrondie à 2 décimales).
  - Retourne une chaîne formatée comme Humidité : xx.xx%.
## Classe Dashboard
- Rôle : Gère la liste des capteurs, leur affichage et les interactions avec l'interface utilisateur.
- Propriétés :
 - capteurs : Tableau contenant les objets capteurs.
- Méthodes :
 - ajouterCapteur(capteur) :
  - Ajoute un capteur au tableau capteurs.
  - Met à jour l'affichage en appelant afficherCapteurs().
 - supprimerCapteur(id) :
  -Supprime le capteur correspondant à l’id donné.
   Met à jour l'affichage en appelant afficherCapteurs().
 - afficherCapteurs() :
  - Sélectionne le conteneur HTML avec l'ID dashboard.
  - Réinitialise son contenu (innerHTML = "").
  - Pour chaque capteur dans capteurs :
   - Crée un élément <div> représentant le capteur.
   - Ajoute un bouton "Supprimer" avec une fonction onclick pour appeler supprimerCapteur.
 - mettreAJourDonnees() :
  - Parcourt tous les capteurs et met à jour les données affichées pour chacun en remplaçant le contenu de l'élément HTML correspondant.
