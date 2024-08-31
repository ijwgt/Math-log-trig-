import Daemon from "../daemon";
import Magican from "../magician";


test('check attack without stones', () => {
	const daemon = new Daemon('name', 'type')
	daemon.distance = 2;
	daemon.stoneStatus = false;
	daemon.attackedValue = 100;
	expect(daemon.attack).toBeCloseTo(90);
});

test('check attack with stones', () => {
	const magican = new Magican('name', 'type')
	magican.distance = 2;
	magican.stoneStatus = true;
	magican.attackedValue = 100;
	expect(magican.attack).toBeCloseTo(85);
});

test('сhecking a long distance', () => {
	const magican = new Magican('name', 'type')
	magican.distance = 20;
	magican.stoneStatus = false;
	magican.attackedValue = 100;
	expect(magican.attack).toBe(0);
});