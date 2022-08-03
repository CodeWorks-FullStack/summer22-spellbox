import { ProxyState } from "../AppState.js";
import { dndSpellsService } from "../Services/DnDSpellsService.js";
import { Pop } from "../Utils/Pop.js";


function _drawSpells() {
  let template = ''

  ProxyState.dndSpells.forEach(s => template += s.Template)

  // @ts-ignore
  document.getElementById('dnd-spells').innerHTML = template
}

export class DnDSpellsController {

  constructor() {
    ProxyState.on('dndSpells', _drawSpells)
    this.getSpells()
  }


  async getSpells(){
    try {
      await dndSpellsService.getSpells()
    } catch (error) {
      console.error('[Getting Spells]', error)
      Pop.error(error)
    }
  }


  async setActiveSpell(url){
    try {
      await dndSpellsService.setActiveSpell(url)
    } catch (error) {
      console.error('[Set Active Spell]', error)
      Pop.error(error)
    }
  }



}
