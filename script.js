document.getElementById('frame').addEventListener('click', function() {
	let a = document.getElementById('seedname').value, b = getMilliseconds(document.getElementById('seedname').value);
	document.getElementById('time').innerHTML = b;
	document.getElementById('log').innerHTML = `${a} Frames = ${b} Milliseconds.`;
});

function getMilliseconds(i) {
	return Math.round((i/60)*1000);
}