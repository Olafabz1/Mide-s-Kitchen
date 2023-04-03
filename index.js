const img1=document.getElementById("one");
img1.addEventListener("click", (e)=>
{
 e.target.style.backgroundColor="yellow"
 
})

const img2=document.getElementById("two");
img2.addEventListener("click", (e)=>
{
 e.target.style.backgroundColor="blue"
})

const img3=document.getElementById("three");
img3.addEventListener("click", (e)=>
{
 e.target.style.backgroundColor="grey"
})

const img4=document.getElementById("four");
img4.addEventListener("click", (e)=>
{
 e.target.style.backgroundColor="red"
})

const img5=document.getElementById("five");
img5.addEventListener("click", (e)=>
{
 e.target.style.backgroundColor="pink"
})

const img6=document.getElementById("six");
img6.addEventListener("click", (e)=>
{
 e.target.style.backgroundColor="indigo"
})

const body = document.querySelector('body');
body.addEventListener("click", (e)=>{
body.style.backgroundColor = '#F1F1F1';
})


