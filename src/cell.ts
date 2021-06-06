const CELL_WIDTH = 10;
const CELL_HEIGHT = 10;

export class Cell extends HTMLInputElement {
    constructor() {
	super();
	const x = Number(this.getAttribute('x'));
	const y = Number(this.getAttribute('y'));
	if (Number.isNaN(x) || Number.isNaN(y)) {
	    throw new Error('CrossSword Cell requires numeric x and y attributes.');
	}

	this.style.left = `${x * CELL_WIDTH}px`;
	this.style.top = `${y * CELL_HEIGHT}px`;
	this.setAttribute('type', 'text');
	this.classList.add('cell');
    }
}

customElements.define('cross-sword-cell', Cell, { extends: 'input' });
