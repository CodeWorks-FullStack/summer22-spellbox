export class ActiveSpell {

  constructor(data) {
    this.name = data.name
    try {
      this.description = data.desc.join('\n\n') || data.description
    } catch (error) {
      this.description = 'unable to translate.....'
    }
    this.level = data.level
    this.range = data.range
    this.material = data.material
    this.ritual = data.ritual
    this.concentration = data.concentration
    this.castingTime = data.casting_time || data.castingTime
    this.duration = data.duration
    this.components = data.components
  }

  get ActiveSpellTemplate() {
    return `
    <div class="card">
     <div class="card-body">
      <div class="card-title">
        <h3>${this.name}</h3>
      </div>
      <div class="card-text">
        <p>
          <b>Duration: ${this.duration} | Level: ${this.level} | Range: ${this.range}</b>
        </p>
        <p>
          ${this.description}
        </p>
      </div>
     </div>
     <div class="card-footer">
      <div class="text-end">
        <button onclick="app.sandboxSpellsController.addSpell()" class="btn btn-dark">Add to Spellbook</button>
      </div>
     </div>
    </div>
    `
  }

}
