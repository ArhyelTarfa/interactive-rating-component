const submit = document.querySelector(".submit")
let stop = document.querySelector(".stop")
let play = document.querySelector(".play")
let rating = document.querySelector(".inner")
const inputs = document.querySelectorAll("input")
submit.addEventListener("click",function(e){
    stop.classList.remove("block");
    stop.classList.add("hidden");
    play.classList.remove("hidden");
    play.classList.add("block")
    
})

inputs.forEach(input=>{
    input.addEventListener("click",(e)=>{
        let select;
        for( const items of inputs ){
            if(items.checked){
                select = items.value;
                break;
            }
        }
        if(select){
            rating.innerHTML=`You selected ${select} out of 5`
        }
    })
})