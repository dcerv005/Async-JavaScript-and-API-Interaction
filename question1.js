async function fetchCharacters(character) {
    const url="https://gateway.marvel.com:443/v1/public/characters?name="+character+"&apikey=1db16fa474c3fdf9e74d956d788ea55f"
    try{
        
        const response= await fetch(url);
            
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error);
    }
}

async function addToDocument(data) {
    const userInfoElement=document.getElementById("characterInfo");
    userInfoElement.innerHTML= '<h2>'+data+'</h2>';
}

addToDocument(fetchCharacters('hulk'));