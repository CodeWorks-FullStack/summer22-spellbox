import { ActiveSpellController } from "./Controllers/ActiveSpellController.js";
import { DnDSpellsController } from "./Controllers/DnDSpellsController.js";
import { SandboxSpellsController } from "./Controllers/SandboxSpellsController.js";

class App {
  // valuesController = new ValuesController();
  dndSpellsController = new DnDSpellsController()
  sandboxSpellsController = new SandboxSpellsController()
  activeSpellController = new ActiveSpellController()
}

window["app"] = new App();
