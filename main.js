const now = new Date();
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

console.log(setNumbers(hours));

function setNumbers(num) {
	return num < 10 && (num = '0' + num);
}

//const setNumbers = num => num < 10 && (num = '0' + num);
