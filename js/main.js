function calculate(){
	var capital=document.getElementById("capital").value;
	var rate=document.getElementById("rate").value;
	var day=document.getElementById("day").value;
	var earning=document.getElementById("earning");

	reward=(parseFloat(capital)*parseFloat(rate)*parseFloat(day))/(365*100);

	earning.innerText=reward;
}