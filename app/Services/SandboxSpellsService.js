import { ProxyState } from "../AppState.js"
import { SandboxSpell } from "../Models/SandboxSpell.js"
import { sandboxApi } from "./AxiosService.js"

class SandboxSpellsService {
  async deleteSpell(id) {
    await sandboxApi.delete(`/spells/${id}`)
    ProxyState.sandboxSpells = ProxyState.sandboxSpells.filter(s => s.id != id)
  }



  async getSpells() {
    let res = await sandboxApi.get('/spells')
    ProxyState.sandboxSpells = res.data.map(s => new SandboxSpell(s))
  }

  async addSpell() {

    // PAUSE lets check if we already have the spell throw an error
    if (ProxyState.sandboxSpells.find(s => s.name == ProxyState.activeSpell.name)) {
      throw new Error('You already know this spell')
    }


    let res = await sandboxApi.post('/spells', ProxyState.activeSpell)

    let newSpell = new SandboxSpell(res.data)
    ProxyState.sandboxSpells = [...ProxyState.sandboxSpells, newSpell]
  }
}


export const sandboxSpellsService = new SandboxSpellsService()