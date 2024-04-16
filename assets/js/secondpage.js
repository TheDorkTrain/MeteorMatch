const p = document.querySelector('.pickup-p')
const generatePickupLineButt = document.querySelector('.generate-pickup-line')
const url = 'https://alien-pickup-line.p.rapidapi.com/alien_pickup_line';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '486ff186b6msh1c5826a14bab8e4p18cf96jsn0e4d651749f5',
		'X-RapidAPI-Host': 'alien-pickup-line.p.rapidapi.com'
	}
};
generatePickupLineButt.addEventListener('click', function (){
    // fetch (url, options)
    // .then (function (response) {
    //     return response.json()
    // })
    // .then (function (data) {
    //     console.log(data)
    //     p.textContent = data.pickup_line
    // })
    p.textContent= `Are you a telepathic being? Because I can't seem to get you out of my mind, no matter how hard I try`
});


