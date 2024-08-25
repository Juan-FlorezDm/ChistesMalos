const site = document.getElementById("chiste")

document.getElementById("boton").addEventListener("click", ()=>{
    fetch("https://icanhazdadjoke.com/",{
        headers:{
            'Accept' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(json =>  site.innerHTML=json.joke)
})