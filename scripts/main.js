function klok(){
	var today = new Date();
	var date = today.getDate();
	var suffix = 'th';

	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();

	var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
	var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

	//plakt een '0' voor uren kleiner dan 10
	if(hours < 10){
		hours = '0' + hours;
	}

	//plakt een '0' voor minuten kleiner dan 10
	if(minutes < 10){
		minutes = '0' + minutes;
	}

	document.getElementById('hours').innerHTML = hours;
	document.getElementById('minutes').innerHTML = minutes;

	
	// checkt of de waarde kan worden gedeeld door 1 of 2 of 3 en geeft
	// dan de juiste letters achteraan
	// 1st but 11th, 2nd but 12th, 3rd but 13th
	if (date % 10 == 1 && date != 11) {
		var suffix = 'st';
	}
	else if(date % 10 == 2 && date != 12){
		var suffix = 'nd';
	}
	else if(date % 10 == 3 && date != 13){
		var suffix = 'rd';
	}

	// volledige datum van vandaag (engels); thursday march 18th
	document.getElementById('date').innerHTML = days[today.getDay()] + ' ' + months[today.getMonth()] + ' ' + date + suffix ;

	//tussen 7 en 17 uur daglicht
	if (hours >= 7 && hours <= 17) {
		// remove night class
		document.getElementById('window').classList.remove('night');

		// add day class
		document.getElementById('window').classList.add('day');

	//tussen 17 en 19 uur golden hour(s)
	}else if(hours >= 17 && hours <= 19){
		//remove day class
		document.getElementById('window').classList.remove('day');

		// add golden hour class
		document.getElementById('window').classList.add('golden');
	}

	//tussen 19 en 7 uur nacht
	else{
		// remove golden hour class
		document.getElementById('window').classList.remove('golden')

		// add night class
		document.getElementById('window').classList.add('night');
	}
	

}

setInterval(klok, 1000);
klok();
