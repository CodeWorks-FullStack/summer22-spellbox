import { ActiveSpell } from "./ActiveSpell.js";

export class SandboxSpell extends ActiveSpell {
  constructor(data) {
    super(data)
    this.id = data.id
    this.prepared = data.prepared
  }


  get ListTemplate() {
    return `
      <div class="text-white d-flex align-items-center justify-content-between">
        <div class="mb-0">
          <b>${this.name}</b>
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
