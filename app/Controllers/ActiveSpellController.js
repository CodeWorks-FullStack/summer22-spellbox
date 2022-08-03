import { ProxyState } from "../AppState.js";


function _draw() {

  if (!ProxyState.activeSpell) {
    return // full stop you cant draw what you don't have
  }
  // @ts-ignore
  document.getElementById('active-spell').innerHTML = ProxyState.activeSpell.ActiveSpellTemplate
}


export class ActiveSpellController {

  constructor() {
    ProxyState.on('activeSpell', _draw)
  }



}
