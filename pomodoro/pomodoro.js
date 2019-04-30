// design inspiration https://dribbble.com/shots/2324994-Daily-UI-Day-14-Countdown-Timer/attachments/442297

(function(){
const sessionDisplay = document.querySelector('.focusMins'); 
const sessionUpBtn = document.querySelector('.btn-focus-up');
const sessionDownBtn = document.querySelector('.btn-focus-down');
const breakDisplay = document.querySelector('.breakMins');
const breakUpBtn = document.querySelector('.btn-break-up');
const breakDownBtn = document.querySelector('.btn-break-down');
const timerDisplay = document.querySelector('.timerFace');
const startBtn = document.querySelector('.btn-play');
const resetBtn = document.querySelector('.btn-reset');
const playPauseBtn = document.querySelector('.btn-play');
const focusStatus = document.querySelector('.focusStatus');
const focusArrow = document.querySelector('.fa-long-arrow-left');
const breakStatus = document.querySelector('.BreakStatus');
const breakArrow = document.querySelector('.fa-long-arrow-right');
const notification = document.getElementById('notification');
const title = document.querySelector('title')

let focusSecs = 25 * 60;
let breakSecs = 5 * 60;
let timer;
let isPaused = false;
let pauseBtnClick = false;
let pausedSecs = -1;
let lightToggle = true;

function displayTimer(secs)
{
	let hr = Math.floor((secs / (60 * 60)) % 24);
	let mins = Math.floor(secs / 60) % 60;
	let seconds = secs % 60;
	let displayTime;
	hr === 0 ? displayTime = `${mins < 10 ? '0'+ mins : mins}:${seconds < 10 ? '0'+ seconds : seconds}` : displayTime = `${hr}:${mins < 10 ? '0'+ mins : mins}:${seconds < 10 ? '0'+ seconds : seconds}`;
	timerDisplay.innerHTML = `<h1 class="time">` + displayTime + `</h1>`;	
	title.innerHTML = displayTime + ` | ${ lightToggle ? `Focus` : 'Break'}`;
}

function toggleTimerLight(status)
{
	if(status === true && isPaused === false)
	{
		focusArrow.classList.add('active-green');
		focusStatus.classList.add('blinking-green');
		breakArrow.classList.remove('active-green');
		breakStatus.classList.remove('blinking-green');
	}
	else if(status === false && isPaused === false)
	{
		breakArrow.classList.add('active-green');
		breakStatus.classList.add('blinking-green');
		focusArrow.classList.remove('active-green');
		focusStatus.classList.remove('blinking-green');
	}
	else
	{
		focusArrow.classList.remove('active-green');
		focusStatus.classList.remove('blinking-green');
		breakArrow.classList.remove('active-green');
		breakStatus.classList.remove('blinking-green');
	}
}

function pomodoroTimer(secs)
{	
	function runTimer(then)
	{
		timer = setInterval(() => {
			let timeLeft = Math.round((then - Date.now()) / 1000);
			if(isPaused)
			{
				pausedSecs = timeLeft + 1;
				clearInterval(timer);
				pauseBtnClick = false;
				return;
			}
			if (timeLeft < 0) {
				clearInterval(timer);
				[focusSecs,breakSecs] = [breakSecs,focusSecs];
				lightToggle = !lightToggle;
				pomodoroTimer(focusSecs);
				notification.play();
				return;
			}
			displayTimer(timeLeft);
		} , 1000);
	}

	if(pausedSecs < 0)
	{
		displayTimer(secs);
		toggleTimerLight(lightToggle);
		let then = Date.now() + (secs * 1000);
		runTimer(then);	
	}
	else
	{
		let then = Date.now() + (pausedSecs * 1000); 
		pausedSecs = -1;
		runTimer(then);
	}

}

function start()
{
	if(pauseBtnClick)
	{	
		playPauseBtn.innerHTML = `<i class="fa fa-play fa-lg"></i>`;
		isPaused = true;
		toggleTimerLight(lightToggle);
	}
	else
	{	
		pauseBtnClick = true;
		isPaused = false;
		playPauseBtn.innerHTML = `<i class="fa fa-pause fa-lg"></i>`;
		clearInterval(timer);
		pomodoroTimer(focusSecs);
		toggleTimerLight(lightToggle);		
	}
}

function reset()
{
	clearInterval(timer);
	timerDisplay.innerHTML = `<p class="welcome">Hi There! 😍  Please setup the timer ⏳</p>`;
	playPauseBtn.innerHTML = `<i class="fa fa-play fa-lg"></i>`;
	title.innerHTML = `Pomodoro Timer`;
	lightToggle = true;
	toggleTimerLight(0);
	focusSecs = 25 * 60;
	sessionDisplay.innerHTML = focusSecs / 60;
  breakSecs = 5 * 60;
  breakDisplay.innerHTML = breakSecs / 60;
  pausedSecs = -1;
  isPaused = false;
  pauseBtnClick = false;
}

function sessionPlus()
{
	if(focusSecs >= 60 * 60 * 12)
	{
		focusSecs = 0;
	}
	focusSecs = focusSecs + 60;
	sessionDisplay.innerHTML = focusSecs / 60;
}

function sessionMinus()
{
	if(focusSecs <= 60)
	{
		focusSecs = (60 * 60 * 12) + 60;
	}
	focusSecs = focusSecs - 60;
	sessionDisplay.innerHTML = focusSecs / 60;
}

function breakPlus()
{
	if(breakSecs >= 60 * 60 * 12)
	{
		breakSecs = 0;
	}
	breakSecs = breakSecs + 60;
	breakDisplay.innerHTML = breakSecs / 60;
}

function breakMinus()
{
	if(breakSecs <= 60)
	{
		breakSecs = (60 * 60 * 12) + 60;
	}
	breakSecs =	breakSecs - 60;
	breakDisplay.innerHTML = breakSecs / 60;
}

timerDisplay.innerHTML = `<p class="welcome">Hi There! 😍  Please setup the timer ⏳</p>`;
sessionDisplay.innerHTML = focusSecs / 60;
sessionUpBtn.addEventListener('click', sessionPlus);
sessionDownBtn.addEventListener('click', sessionMinus);
breakDisplay.innerHTML = breakSecs / 60;
breakUpBtn.addEventListener('click',breakPlus);
breakDownBtn.addEventListener('click',breakMinus);
startBtn.addEventListener('click', start ); 
resetBtn.addEventListener('click', reset);
}());


