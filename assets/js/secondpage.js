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

const chatButt = document.querySelector("#chatButt");
const dateChat = document.querySelector("#response");
const chatInput = document.querySelector("#chatInput");
const lastChat = document.querySelector("#lastChat");

chatButt.addEventListener("click", function() {
     lastChat.textContent = chatInput.value;
    // const url2 = 'https://chatgpt-42.p.rapidapi.com/conversationgpt4';
    // const options2 = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'X-RapidAPI-Key': '5e481eaddcmsh660cb988e789db3p146e62jsn1eb1536b3f7f',
    //         'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com'
    //     },
    //     body: JSON.stringify({
    //         messages: [
    //             {
    //                 role: 'user',
    //                 content: `${chatInput.value}`
    //             }
    //         ],
    //         system_prompt: `You are an alien on a date with me`,
    //         temperature: 0.9,
    //         top_k: 5,
    //         top_p: 0.9,
    //         max_tokens: 256,
    //         web_access: false
    //     })
    // };

    // fetch(url2, options2)
    // .then(function(response) {
    //     return response.json();
    // })
    // .then(function(data) {
    //     dateChat.textContent = `${data.result}`
    // });
    dateChat.textContent = `Your Chat Partner is busy right now, but they will get back to you in a Galactic Minute (One Month)`
});
