export class Player {
	constructor(public readonly name: 'Нолик' | 'Крестик') {}

	getName() {
		return this.name;
	}
}
