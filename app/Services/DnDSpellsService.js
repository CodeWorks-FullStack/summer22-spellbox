import { ProxyState } from "../AppState.js"
import { ActiveSpell } from "../Models/ActiveSpell.js"
import { DnDSpell } from "../Models/DnDSpell.js"
import { dndApi } from "./AxiosService.js"

class DnDSpellsService {
  async setActiveSpell(url) {
    let res = await dndApi.get(url)

    ProxyState.activeSpell = new ActiveSpell(res.data)

  } 

  async getSpells(){
    let res = await dndApi.get('/api/spells')
    ProxyState.dndSpells = res.data.results.map(s => new DnDSpell(s))
  }

}



export const dndSpellsService = new DnDSpellsService()