import { fromEvent } from 'rxjs';

console.log('testing3');
if (module.hot) {
	console.log('module is hot');
}
applyCurrencyMask();

function applyCurrencyMask() {
	const inputElement = document.getElementById('price');
	fromEvent(inputElement, 'keyup')
		.subscribe({
			next: (event) => {
				console.log(event.target.value);
			},
		});
}

function mask(value) {
	const masked = value.toString();
	return masked;
}
