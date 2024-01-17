
  function myFunction() {
 
  let w=Math.random()*6+1;
  w=Math.trunc(w);
  document.querySelector(".h").innerHTML=w; 
  if(true){
    let disk=document.querySelector(".image")
    disk.src=`dice-${w}.png`
  }

}