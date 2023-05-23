const button=document.querySelector(".entre")
const button1=document.querySelector(".e")
const sortear=document.querySelector("button")




sortear.addEventListener("click",()=> {
    const sorteio1=Math.floor(Math.random() * (parseInt(button1.value)  - parseInt(button.value)+ 1) + parseInt(button.value))
    document.querySelector("h1").innerHTML=sorteio1
    document.querySelector("h1").style.opacity=1
})