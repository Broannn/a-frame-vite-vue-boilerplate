AFRAME.registerComponent('tesseletion-square', {
  schema: {
    depth: {type: 'number', default: 5},
    width: {type: 'number', default: 5},
    boxSize: {type: 'number', default: 1.5},
    gap: {type: 'number', default: 0.1},
    rows: {type: 'number', default: 5},
    cols: {type: 'number', default: 5},
    baseHue: {type: 'number', default: 0},      // Teinte de base (0-360)
    baseSaturation: {type: 'number', default: 100}, // Saturation de base (0-100)
    minLightness: {type: 'number', default: 30},    // Luminosité minimum (0-100)
    maxLightness: {type: 'number', default: 70}     // Luminosité maximum (0-100)
  },
  init: function () {
    console.log('tesselation-square init');
    
    // Création du box template
    const box = document.createElement('a-box');
    box.setAttribute('width', this.data.boxSize);
    box.setAttribute('depth', this.data.boxSize);
    box.setAttribute('height', this.data.boxSize);
    
    // Création de la grille
    for (let i = 0; i < this.data.rows; i++) {
      for (let j = 0; j < this.data.cols; j++) {
        const clone = box.cloneNode();
        const xPos = j * (this.data.boxSize + this.data.gap);
        const zPos = i * (this.data.boxSize + this.data.gap);
        
        // Génération d'une luminosité aléatoire
        const lightness = Math.random() * 
          (this.data.maxLightness - this.data.minLightness) + 
          this.data.minLightness;
        
        // Création de la couleur en HSL
        const color = `hsl(${this.data.baseHue}, ${this.data.baseSaturation}%, ${lightness}%)`;
        
        clone.setAttribute('position', `${xPos} 0 ${zPos}`);
        clone.setAttribute('color', color);
        this.el.appendChild(clone);
      }
    }
  }
});