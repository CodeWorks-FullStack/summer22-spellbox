import { ProxyState } from "../AppState.js";
import { sandboxSpellsService } from "../Services/SandboxSpellsService.js";
import { Pop } from "../Utils/Pop.js";

function _draw() {

  let template = ''
  ProxyState.sandboxSpells.forEach(s => template += s.ListTemplate)
  // @ts-ignore
  document.getElementById('sandbox-spells').innerHTML = template
  // @ts-ignore
  document.getElementById('known-spells').innerHTML = `
  <div class="text-white">
    <div class="d-flex justify-content-between">
      <div>
       <b>Known Spells:</b> ${ProxyState.sandboxSpells.length}
      </div>
       <div>
          <b>Prepared Spells:</b> ${ProxyState.sandboxSpells.filter(s => s.prepared).length}
      </div>
    </div>
  </div>
  `
}

export class SandboxSpellsController {

  constructor() {
    ProxyState.on('sandboxSpells', _draw)
    this.getSpells()
  }


  async getSpells() {
    try {
      await sandboxSpellsService.getSpells()
    } catch (error) {
      console.error('[Getting Spells]', error)
      Pop.error(error)
    }
  }


  async addSpell() {
    try {
      await sandboxSpellsService.addSpell()
    } catch (error) {
      console.error('[Adding Spell]', error)
      Pop.error(error)
    }
  }


  async deleteSpell(id) {
    try {
      const yes = await Pop.confirm('Delete Spell')
      if (!yes) { return } // Full Stop 

      await sandboxSpellsService.deleteSpell(id)
    } catch (error) {
      console.error('[Delete Spell]', error)
      Pop.error(error)
    }
  }

  async toggleSpell(spellId) {
    try {
      await sandboxSpellsService.toggleSpell(spellId)
    } catch (error) {
      console.error('[Toggle Spell]', error)
      Pop.error(error)
    }
  }

}
