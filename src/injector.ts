export default class Injector {
	constructor(protected targetElement: HTMLElement) {}

	async inject(url: string) {
		await fetch(url)
			.then((t) => t.text())
			.then((v) => (this.targetElement.innerHTML = v));
	}
}
