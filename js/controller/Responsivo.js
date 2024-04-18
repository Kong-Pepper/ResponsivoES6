// Importa a classe AppController do arquivo AppController.js
import { AppController } from "./AppController.js";

// Define a classe App
class App {
  AppController; // Declaração de propriedade para armazenar uma instância de AppController

  // Construtor da classe App
  constructor(appCtr) {
    this.AppController = appCtr; // Inicializa a propriedade AppController com a instância passada como argumento
  }
}

// Cria uma nova instância da classe App, passando uma nova instância de AppController como argumento
let AppInstance = new App(new AppController());

// Exporta a instância de App criada para uso em outros módulos
export { AppInstance };