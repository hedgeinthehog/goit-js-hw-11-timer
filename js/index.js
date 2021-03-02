import CountdownTimer from './countdown-timer-class.js';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021'),
});

timer.init();