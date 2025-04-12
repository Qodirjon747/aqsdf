import { pokemons } from "./pokemons.js";
const ota=document.getElementById("ota");
const select=document.getElementById("select");
const input=document.getElementById("input");
const sortselect=document.getElementById("sort-select");
console.log(pokemons);
function ASD(malumot){
    ota.innerHTML="";
    malumot.map((pokimon)=> {
        const div=document.createElement("div");
        div.classList.add("card");
        div.innerHTML=`
          <h2>${pokimon.name}</h2>
        <img src="${pokimon.img}" alt="asd"> <br>
        <button>${pokimon.type}</button>
        <h3>candy count: ${pokimon?.candy_count || 0}</h3>
        <h3>weight: ${pokimon.weight}</h3>
        <h4>${pokimon.weaknesses} </h4>
        <div class="p-id">${pokimon.num}</div>
        <div class="time">${pokimon.spawn_time}</div>
        `;
        ota.appendChild(div);
    })
}
ASD(pokemons);


input.addEventListener("input",()=>{
  const qidirish=pokemons.filter(p=> p.name.toLowerCase().includes(input.ariaValueMax.toLowerCase()));
  ASD(qidirish)
});

select.addEventListener("change",()=>{
  if(select.value=="All"){
    ASD(pokemons);
  }else{
    const b=pokemons.filter(p=> p.weaknesses.includes(select.value));
    ASD(b)
  }
});

sortselect.addEventListener("change",()=>{
  if(sortselect.value=="A-Z"){
    const d=pokemons.sort((p1,p2)=> p1.name.localeCompare(p2.name));
    ASD(d)
  }else{
    const d=pokemons.sort((p1,p2)=> p2.name.localeCompare(p1.name));
    ASD(d)
  }
})