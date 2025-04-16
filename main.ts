import { Plugin, Notice } from 'obsidian';  // Importation correcte

export default class CodeidianPlugin extends Plugin {
  async onload() {
    // Ajouter l'icône à la barre latérale
    this.addRibbonIcon("gear", "Lancer CodeIdian", () => { // Remplacement de "dice" par "gear"
      // Afficher une notification dans Obsidian
      new Notice("Bienvenue dans CodeIdian !");
    });

    console.log("CodeIdian est chargé ✅");
  }

  onunload() {
    console.log("CodeIdian est déchargé ❌");
  }
}
