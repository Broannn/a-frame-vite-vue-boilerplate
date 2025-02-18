AFRAME.registerComponent('tesselation-square', {
  schema: {
    depth: {type: 'number', default: 5},
    width: {type: 'number', default: 5},
    boxSize: {type: 'number', default: 1.5},
    gap: {type: 'number', default: 0.1},
    rows: {type: 'number', default: 5},
    cols: {type: 'number', default: 5}
  },
  init: function () {
    console.log('tesselation-square');
    console.log(this.el);
    const box = document.createElement('a-box');
    box.setAttribute('width', this.data.boxSize);
    box.setAttribute('depth', this.data.boxSize);
    box.setAttribute('height', this.data.boxSize);

    for (let i = 0; i < this.data.rows; i++) {
      for (let j = 0; j < this.data.cols; j++) {
        const clone = box.cloneNode();
        clone.setAttribute('position', `${j * (this.data.boxSize + this.data.gap)} 0 ${i * (this.data.boxSize + this.data.gap)}`);
        this.el.appendChild(clone);
      }
    }
  },
  update: function () {
    console.log(this.data);
  },
  tick: function () {

  }
});