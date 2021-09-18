import { SKYES } from './costants'

const util = {
	getRandomSky() {
		let randomSky = SKYES[Math.floor(Math.random() * SKYES.length)];
		return randomSky;
	}
}

export default util;