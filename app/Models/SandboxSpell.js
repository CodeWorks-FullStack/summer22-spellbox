import { ActiveSpell } from "./ActiveSpell.js";

export class SandboxSpell extends ActiveSpell {
  constructor(data) {
    super(data)
    this.id = data.id
    this.prepared = data.prepared || false
  }


  get ListTemplate() {
    return `
      <div class="text-white d-flex align-items-center justify-content-between">
        <div class="mb-0">
          <b>${this.name}</b>
          <input type="checkbox" ${this.prepared ? 'checked' : ''} onchange="app.sandboxSpellsController.toggleSpell('${this.id}')" >
        </div>
        <div>
          <button class="btn text-white selectable" onclick="app.sandboxSpellsController.deleteSpell('${this.id}')">
            <i class="mdi mdi-delete-forever"></i>
          </button>
        </div>
      </div>
    `
  }
}
