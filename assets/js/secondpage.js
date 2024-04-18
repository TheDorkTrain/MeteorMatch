const p = document.querySelector('.pickup-p')
const generatePickupLineButt = document.querySelector('.generate-pickup-line')
const url = 'https://alien-pickup-line.p.rapidapi.com/alien_pickup_line';
const pingApi = document.querySelector('#pingswitch');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '486ff186b6msh1c5826a14bab8e4p18cf96jsn0e4d651749f5',
		'X-RapidAPI-Host': 'alien-pickup-line.p.rapidapi.com'
	}
};

generatePickupLineButt.addEventListener('click', function (){
    if (pingApi.checked) {
        lastChat.textContent = chatInput.value;
    fetch (url, options)
    .then (function (response) {
        return response.json()
    })
    .then (function (data) {
        console.log(data)
        p.textContent = data.pickup_line
    })}
    else {
        p.textContent= `Are you a telepathic being? Because I can't seem to get you out of my mind, no matter how hard I try`
    }
});

localStorage.getItem(`formInput`)

let formData = {};
function retrievelocal() {
    const formInput = localStorage.key(`formInput`);
        const postString = localStorage.getItem(formInput);
        formData = JSON.parse(postString);

    return formData;}
retrievelocal();
console.log(formData); 

    let alienImage = document.getElementById(`alienImage`);
        if(formData.physical == `Scales`){
            alienImage.setAttribute(`src`, `https://static.tvtropes.org/pmwiki/pub/images/kroqgar.png`);
        }; if(formData.physical == `Feathers`){
            alienImage.setAttribute(`src`, `https://www.wargamer.com/wp-content/sites/wargamer/2022/07/DnD-Aarakocra-Guide-eagle-rogue.jpg`);
        }; if(formData.physical == `Slimy`){
            alienImage.setAttribute(`src`, `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgqLhlhUbIVpHjfKnvtbGTqm2B4CzceJN0lw&s`);
        }; if(formData.physical == `Horns`){
            alienImage.setAttribute(`src`, `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEha22Y5teVXCkBFEzE5Bph1lLH9tNTkxY2rSkX5ScLcIYDK5xnAhSXOkVhtutZqj8m07b-3zWd4lAJgwpwcnggwn_bq88OknEgtI0N_bIoC3ch2o2JR4gz7FkLzFvbmcoO3-T7jYG-LtWB9/s1600/clancy-brown.jpg`);
        }; if(formData.physical == `Tentacles`){
            alienImage.setAttribute(`src`, `https://static1.srcdn.com/wordpress/wp-content/uploads/2019/04/cgi-davy-jones-pirates-of-the-car.jpg`);
        }; if(formData.physical == `Tail`){
            alienImage.setAttribute(`src`, `https://en.wikifur.com/w/images/4/44/Na%27vi.jpg`);
        };


let bioContent = document.getElementById(`bio`);
    if(formData.physical == `Scales`){
        bioContent.textContent = `Bio: Very in touch with religion, loves jewelry, enjoys wrestling, carries a big ax everywhere. Is very interested in ${formData.interest}.`;
    }; if(formData.physical == `Feathers`){
        bioContent.textContent = `Bio: Loves flying arandom, enjoys fencing, favorite food is worms, will pick you up and carry you arandom. Is very interested in ${formData.interest}.`;
    }; if(formData.physical == `Slimy`){
        bioContent.textContent = `Bio: Very wet and sticky, has two mouths (twice as many kisses), lives in a close knit monarchy community, loves a nice game of chase. Is very interested in ${formData.interest}.`;
    }; if(formData.physical == `Horns`){
        bioContent.textContent = `Bio: Very tall, loves working out, very muscular, enjoys spending time down at the shooting range. Is very interested in ${formData.interest}.`;
    }; if(formData.physical == `Tentacles`){
        bioContent.textContent = `Bio: Loves boats and sailing, loves the ocean, is the captain of his own ship, avid freebooter. Is very interested in ${formData.interest}.`;
    }; if(formData.physical == `Tail`){
        bioContent.textContent = `Bio: Loves nature, enjoys riding beasts of the land and sky, avid hunter, loves to craft her own tools. Is very interested in ${formData.interest}.`;
    };

let nameContent = document.getElementById(`name`);
    if(formData.physical == `Scales`){
        nameContent.textContent = `Name: Gronk`;
    }; if(formData.physical == `Feathers`){
        nameContent.textContent = `Name: Thesius`;
    }; if(formData.physical == `Slimy`){
        nameContent.textContent = `Name: Alora`;
    }; if(formData.physical == `Horns`){
        nameContent.textContent = `Name: Horus`;
    }; if(formData.physical == `Tentacles`){
        nameContent.textContent = `Name: Javy Dones`;
    }; if(formData.physical == `Tail`){
        nameContent.textContent = `Name: Thalia`;
    };

let speciesContent = document.getElementById(`species`);
    if(formData.physical == `Scales`){
        speciesContent.textContent = `Species: Lizardmen`;
    }; if(formData.physical == `Feathers`){
        speciesContent.textContent = `Species: Aarakocra`;
    }; if(formData.physical == `Slimy`){
        speciesContent.textContent = `Species: Xenomorph`;
    }; if(formData.physical == `Horns`){
        speciesContent.textContent = `Species: Devaronian`;
    }; if(formData.physical == `Tentacles`){
        speciesContent.textContent = `Species: Squidman`;
    }; if(formData.physical == `Tail`){
        speciesContent.textContent = `Species: Na'Vi`;
    };

let planetContent = document.getElementById(`planet`);
    if(formData.physical == `Scales`){
        planetContent.textContent = `Planet: Mazdamundi`;
    }; if(formData.physical == `Feathers`){
        planetContent.textContent = `Planet: Welkin`;
    }; if(formData.physical == `Slimy`){
        planetContent.textContent = `Planet: Ferrora`;
    }; if(formData.physical == `Horns`){
        planetContent.textContent = `Planet: Devaron`;
    }; if(formData.physical == `Tentacles`){
        planetContent.textContent = `Planet: Hyrdomundus`;
    }; if(formData.physical == `Tail`){
        planetContent.textContent = `Planet: Pandora`;
    };

    function generateRandomInteger(min, max) {
        return Math.floor(min + Math.random()*(max - min + 1))}
let numAge = "0";

let ageContent = document.getElementById(`age`);
    if(formData.age == `20-30`){
        let numAge = generateRandomInteger(20, 30)
        ageContent.textContent = `Age: ${numAge}`;
    }; if(formData.age == `30-50`){
        let numAge = generateRandomInteger(30, 50);
        ageContent.textContent = `Age: ${numAge}`;
    }; if(formData.age == `50-100`){
        let numAge = generateRandomInteger(50, 100)
        ageContent.textContent = `Age: ${numAge}`;
    }; if(formData.age == `100-200`){
        let numAge = generateRandomInteger(100, 200);
        ageContent.textContent = `Age: ${numAge}`;
    }; if(formData.age == `300+`){
        let numAge = generateRandomInteger(300, 1000);
        ageContent.textContent = `Age: ${numAge}`;
    };
let numkids = "0";

let kidsContent = document.getElementById(`kids`);
    if(formData.kids == `Yes`){
        let numKids = generateRandomInteger(1, 5)
        kidsContent.textContent = `# of Kids: ${numKids}`;
    }; if(formData.kids == `Many!`){
        let numKids = generateRandomInteger(10, 500)
        kidsContent.textContent = `# of Kids: ${numKids}`;
    }; if(formData.kids == `No`){
        kidsContent.textContent = `No Children`;
    };

    const chatButt = document.querySelector(`#chatButt`);
    const dateChat = document.querySelector(`#response`);
    const chatInput = document.querySelector(`#chatInput`);
    const lastChat = document.querySelector(`#lastChat`);
    
    chatButt.addEventListener(`click`, function() {
        if(formData.physical == `Scales`){
            if (pingApi.checked) {
                lastChat.textContent = chatInput.value;
            const url2 = 'https://chatgpt-42.p.rapidapi.com/conversationgpt4';
            const options2 = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': '5e481eaddcmsh660cb988e789db3p146e62jsn1eb1536b3f7f',
                    'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com'
                },
                body: JSON.stringify({
                    messages: [
                        {
                            role: 'user',
                            content: `${chatInput.value}`
                        }
                    ],
                    system_prompt: `Your name is Gronk. You are an alien Lizardman from the planet Mazdamundi. You are ${numAge} years old and have ${numkids} children, and a great interest in ${formData.interest}. You are very in touch with religion, loves jewelry, enjoys wrestling, and carry a big axe everywhere.`,
                    temperature: 0.9,
                    top_k: 5,
                    top_p: 0.9,
                    max_tokens: 256,
                    web_access: false
                })
            };
        
            fetch(url2, options2)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                dateChat.textContent = `${data.result}`
            });
          
            } else {
                lastChat.textContent = chatInput.value;
                dateChat.textContent = `Your Chat Partner is busy right now, but they will get back to you in a Galactic Minute (One Month)`;
            }
        }; if(formData.physical == `Feathers`){
            if (pingApi.checked) {
                lastChat.textContent = chatInput.value;
            const url2 = 'https://chatgpt-42.p.rapidapi.com/conversationgpt4';
            const options2 = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': '5e481eaddcmsh660cb988e789db3p146e62jsn1eb1536b3f7f',
                    'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com'
                },
                body: JSON.stringify({
                    messages: [
                        {
                            role: 'user',
                            content: `${chatInput.value}`
                        }
                    ],
                    system_prompt: `Your name is Thesius. you are an alien Aarakocra from the planet Welkin. you are ${numAge} years old and have ${numkids} children, and a great interest in ${formData.interest}. You love flying around, enjoy fencing, favorite food is worms, you like to pick people up and carry them around.`,
                    temperature: 0.9,
                    top_k: 5,
                    top_p: 0.9,
                    max_tokens: 256,
                    web_access: false
                })
            };
        
            fetch(url2, options2)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                dateChat.textContent = `${data.result}`
            });
          
            } else {
                lastChat.textContent = chatInput.value;
                dateChat.textContent = `Your Chat Partner is busy right now, but they will get back to you in a Galactic Minute (One Month)`;
            }
           
        }; if(formData.physical == `Slimy`){
           
            if (pingApi.checked) {
                lastChat.textContent = chatInput.value;
            const url2 = 'https://chatgpt-42.p.rapidapi.com/conversationgpt4';
            const options2 = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': '5e481eaddcmsh660cb988e789db3p146e62jsn1eb1536b3f7f',
                    'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com'
                },
                body: JSON.stringify({
                    messages: [
                        {
                            role: 'user',
                            content: `${chatInput.value}`
                        }
                    ],
                    system_prompt: `Your name is Alora. You are an alien Xenomorph from the planet Ferrora. you are ${numAge} years old and have ${numkids} children, and a great interest in ${formData.interest} You are very wet and sticky, have two mouths, live in a close knit monarchy community, love a nice game of chase. `,
                    temperature: 0.9,
                    top_k: 5,
                    top_p: 0.9,
                    max_tokens: 256,
                    web_access: false
                })
            };
        
            fetch(url2, options2)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                dateChat.textContent = `${data.result}`
            });
          
            } else {
                lastChat.textContent = chatInput.value;
                dateChat.textContent = `Your Chat Partner is busy right now, but they will get back to you in a Galactic Minute (One Month)`;
            }

        }; if(formData.physical == `Horns`){

            if (pingApi.checked) {
                lastChat.textContent = chatInput.value;
            const url2 = 'https://chatgpt-42.p.rapidapi.com/conversationgpt4';
            const options2 = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': '5e481eaddcmsh660cb988e789db3p146e62jsn1eb1536b3f7f',
                    'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com'
                },
                body: JSON.stringify({
                    messages: [
                        {
                            role: 'user',
                            content: `${chatInput.value}`
                        }
                    ],
                    system_prompt: `Your name is Horus. You are an alien Devaronian from the planet Devaron. you are ${numAge} years old and have ${numkids} children, and a great interest in ${formData.interest} You are very tall, love working out, very muscular, and enjoy spending time down at the shooting range.`,
                    temperature: 0.9,
                    top_k: 5,
                    top_p: 0.9,
                    max_tokens: 256,
                    web_access: false
                })
            };
        
            fetch(url2, options2)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                dateChat.textContent = `${data.result}`
            });
          
            } else {
                lastChat.textContent = chatInput.value;
                dateChat.textContent = `Your Chat Partner is busy right now, but they will get back to you in a Galactic Minute (One Month)`;
            }
           
        }; if(formData.physical == `Tentacles`){
            
            if (pingApi.checked) {
                lastChat.textContent = chatInput.value;
            const url2 = 'https://chatgpt-42.p.rapidapi.com/conversationgpt4';
            const options2 = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': '5e481eaddcmsh660cb988e789db3p146e62jsn1eb1536b3f7f',
                    'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com'
                },
                body: JSON.stringify({
                    messages: [
                        {
                            role: 'user',
                            content: `${chatInput.value}`
                        }
                    ],
                    system_prompt: `Your name is Javy Dones. you are an alien Squidman from the planet Hyrdomundus. You are ${numAge} years old and have ${numkids} children, and a great interest in ${formData.interest} You love boats and sailing, love the ocean, are the captain of your own ship.`,
                    temperature: 0.9,
                    top_k: 5,
                    top_p: 0.9,
                    max_tokens: 256,
                    web_access: false
                })
            };
        
            fetch(url2, options2)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                dateChat.textContent = `${data.result}`
            });
          
            } else {
                lastChat.textContent = chatInput.value;
                dateChat.textContent = `Your Chat Partner is busy right now, but they will get back to you in a Galactic Minute (One Month)`;
            }

        }; if(formData.physical == `Tail`){

            if (pingApi.checked) {
                lastChat.textContent = chatInput.value;
            const url2 = 'https://chatgpt-42.p.rapidapi.com/conversationgpt4';
            const options2 = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': '5e481eaddcmsh660cb988e789db3p146e62jsn1eb1536b3f7f',
                    'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com'
                },
                body: JSON.stringify({
                    messages: [
                        {
                            role: 'user',
                            content: `${chatInput.value}`
                        }
                    ],
                    system_prompt: `Your name is Thalia. you are an alien Na'Vi from the planet Pandora. you are ${numAge} years old and have ${numkids} children, and a great interest in ${formData.interest}. Love nature, enjoy riding beasts of the land and sky, avid hunter, loves to craft your own tools.`,
                    temperature: 0.9,
                    top_k: 5,
                    top_p: 0.9,
                    max_tokens: 256,
                    web_access: false
                })
            };
        
            fetch(url2, options2)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                dateChat.textContent = `${data.result}`
            });
          
            } else {
                lastChat.textContent = chatInput.value;
                dateChat.textContent = `Your Chat Partner is busy right now, but they will get back to you in a Galactic Minute (One Month)`;
            }
           
        };
    
        
    });