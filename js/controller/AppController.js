export class AppController {
    // Método para abrir o navbar
    toggleNavbar() {
      document.getElementById("myNavbar").style.width = "100px";
      document.getElementById("myContent").style.marginLeft = "100px";
    }
  
    // Método para fechar o navbar
    closeNav() {
      document.getElementById("myNavbar").style.width = "0px";
      document.getElementById("myContent").style.marginLeft = "0px";
    }
  // Método para associar eventos aos elementos 
    setupEventListeners() {
      let toggleNavbarBtn = document.getElementById("myButton");
      let closeNavBtn = document.getElementById("myClosebtn");
  
      if (toggleNavbarBtn && closeNavBtn) {
        toggleNavbarBtn.addEventListener("click", () => {
          this.toggleNavbar(); 
        });
  
        closeNavBtn.addEventListener("click", () => {
          this.closeNav();
        });
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const appController = new AppController();
    appController.setupEventListeners();
  });
  