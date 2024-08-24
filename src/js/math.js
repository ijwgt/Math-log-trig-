export default class MathClass {
	constructor(name, type) {
		this.name = name;
		this.type = type;
		this.distance = 1;
		this.stoneStatus = false;
	}

	set stoned(value) {
		this.stoneStatus = value;
	}

	get stoned() {
		return this.stoneStatus;
	}

	set attack(value) {
		this.attackedValue = value;
	}
}