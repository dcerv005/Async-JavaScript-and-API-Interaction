async function fetchCharacters(character) {
    const publicKey="1db16fa474c3fdf9e74d956d788ea55f"
    const hash="e1c499a5ceb1d8ab8e4afbeb45348103";
    const url="http://gateway.marvel.com/v1/public/characters?name="+character+"&ts=1&apikey="+publicKey+"&hash="+hash;
    
    try{
        
        const response= await fetch(url);
            
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.error(error);
    }
}

async function addToDocument(data) {
    const heroData= await data;
    console.log(heroData.data.results[0].name)
    const userInfoElement=document.getElementById("characterInfo");
    userInfoElement.innerHTML= '<h2>'+heroData.data.results[0].name+'</h2> <p><strong>Description</strong>: '+heroData.data.results[0].description;
}

addToDocument(fetchCharacters('hulk'));
