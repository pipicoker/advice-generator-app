document.querySelector("button").addEventListener("click", generate)
let id = document.querySelector(".id")

function generate (){
    console.log(",mnbvdszx");
    var slip_id = Math.floor(Math.random() * 200);
    fetch("https://api.adviceslip.com/advice/"+slip_id)
    .then(res => res.json())
    .then(data =>{
        console.log(data.slip)
        document.querySelector(".id").innerHTML = data.slip.id
        document.querySelector(".advice").innerHTML = data.slip.advice


    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}



