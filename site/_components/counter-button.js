class CounterButton extends HTMLElement {
	constructor() {
		super();
		/** @type {HTMLSpanElement} */
		this.span = this.querySelector('span');
		/** @type {HTMLButtonElement} */
		this.button = this.querySelector('button');
		this.button.addEventListener('click', this.increment.bind(this));
	}
	increment() {
		const count = parseInt(this.span.textContent);
		this.span.textContent = `${count + 1}`;
	}
}
customElements.define('counter-button', CounterButton);
