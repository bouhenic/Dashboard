class Capteur {
    constructor(id, nom) {
      this.id = id;
      this.nom = nom;
      this.dateDerniereLecture = null;
    }
  
    obtenirDonnees() {
      this.dateDerniereLecture = new Date();
      return "Données du capteur";
    }
  
    afficherInfos() {
      return `[${this.id}] ${this.nom}`;
    }
  }
  
  class CapteurTemperature extends Capteur {
    obtenirDonnees() {
      super.obtenirDonnees();
      const temperature = (Math.random() * 30).toFixed(2);
      return `Température : ${temperature}°C`;
    }
  }
  
  class CapteurHumidite extends Capteur {
    obtenirDonnees() {
      super.obtenirDonnees();
      const humidite = (Math.random() * 100).toFixed(2);
      return `Humidité : ${humidite}%`;
    }
  }
  
  class Dashboard {
    constructor() {
      this.capteurs = [];
    }
  
    ajouterCapteur(capteur) {
      this.capteurs.push(capteur);
      this.afficherCapteurs();
    }
  
    supprimerCapteur(id) {
      this.capteurs = this.capteurs.filter(capteur => capteur.id !== id);
      this.afficherCapteurs();
    }
  
    afficherCapteurs() {
      const dashboardDiv = document.getElementById("dashboard");
      dashboardDiv.innerHTML = ""; // Réinitialiser l'affichage
  
      this.capteurs.forEach(capteur => {
        const capteurDiv = document.createElement("div");
        capteurDiv.className = "capteur";
        capteurDiv.id = `capteur-${capteur.id}`;
  
        capteurDiv.innerHTML = `
          <h3>${capteur.nom}</h3>
          <p>${capteur.afficherInfos()}</p>
          <p id="data-${capteur.id}">${capteur.obtenirDonnees()}</p>
          <button onclick="supprimerCapteur(${capteur.id})">Supprimer</button>
        `;
  
        dashboardDiv.appendChild(capteurDiv);
      });
    }
  
    mettreAJourDonnees() {
      this.capteurs.forEach(capteur => {
        const dataElement = document.getElementById(`data-${capteur.id}`);
        if (dataElement) {
          dataElement.innerText = capteur.obtenirDonnees();
        }
      });
    }
  }
  
  // Création du dashboard
  const dashboard = new Dashboard();
  
  // Fonctions pour gérer les capteurs dans le front
  let compteurId = 1;
  
  function ajouterCapteurTemperature() {
    const capteurTemp = new CapteurTemperature(compteurId++, "Capteur Température");
    dashboard.ajouterCapteur(capteurTemp);
  }
  
  function ajouterCapteurHumidite() {
    const capteurHumidite = new CapteurHumidite(compteurId++, "Capteur Humidité");
    dashboard.ajouterCapteur(capteurHumidite);
  }
  
  function supprimerCapteur(id) {
    dashboard.supprimerCapteur(id);
  }
  
  function mettreAJourDonnees() {
    dashboard.mettreAJourDonnees();
  }
