import MathClass from './math';

export default class Magican extends MathClass {
	constructor(name, type) {
		super(name, type);

		this.attack = 100;
		this.stoned = false;
	}
}