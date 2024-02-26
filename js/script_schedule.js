document.getElementById('start_calendar_date').value = new Date().toISOString().substring(0, 10);
document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})
var modal = document.getElementById('myModal');


var btn = document.getElementById("link-button");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "block";
		Object.assign(document.documentElement, {
			style: `
			--move-x: 0; 
			--move-y: 0;
			`
		})
}}
