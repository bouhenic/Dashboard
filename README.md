# Dashboard
![Texte alternatif](classes.svg)
## Classe Capteur
- Rôle : Représente un capteur générique avec des propriétés et des méthodes communes.
- Propriétés :
  - id : Identifiant unique du capteur.
nom : Nom du capteur.
dateDerniereLecture : Stocke la date/heure de la dernière lecture des données.
Méthodes :
obtenirDonnees() :
Met à jour dateDerniereLecture avec la date actuelle.
Retourne un message générique "Données du capteur".
afficherInfos() :
Retourne une chaîne contenant l'identifiant et le nom du capteur, formatée comme [id] nom.
