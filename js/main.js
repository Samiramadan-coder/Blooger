

/* Toggle Collapse Button */
let toggleBtn = document.querySelector('.toggle-collapse');
let mainNav = document.querySelector('.nav');

toggleBtn.addEventListener('click', open);

function open() {
	mainNav.classList.toggle('open');
}


// Move Up class



let moveUpBtn = document.querySelector('.move-up');

moveUpBtn.onclick = function () {
	window.scrollY = 0;
}








