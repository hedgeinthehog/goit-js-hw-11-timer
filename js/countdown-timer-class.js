class CountdownTimer {
	constructor({selector, targetDate}) {
		this.timerRef = document.querySelector(selector),
		this.targetDate = targetDate
	}
	
	updateRemainingTime() {
		const daysRef = this.timerRef.querySelector('span[data-value = days]');
		const hoursRef = this.timerRef.querySelector('span[data-value = hours]');
		const minsRef = this.timerRef.querySelector('span[data-value = mins]');
		const secsRef = this.timerRef.querySelector('span[data-value = secs]');
		const { days, hours, mins, secs } = this.getRemainingTime();

		daysRef.textContent = days;
		hoursRef.textContent = hours;
		minsRef.textContent = mins;
		secsRef.textContent = secs;
	}

	getRemainingTime() {
		const time = this.getTimeDiff();

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
		const secs = Math.floor((time % (1000 * 60)) / 1000);

		return {days, hours, mins, secs};
	}

	getTimeDiff() {
		const currentDate = Date.now();
		return this.targetDate - currentDate;
	}

	init() {
		if (this.getTimeDiff() < 0) return;
		setInterval(() => {
			this.updateRemainingTime();
		}, 1000);
	}	
}

export default CountdownTimer;