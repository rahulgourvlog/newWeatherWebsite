const cityInputs=document.getElementById("cityInput");
const searchs=document.getElementById("search");
const outputs=document.getElementById("output");
const results=document.getElementById("result");
const hidedata=document.querySelector(".data");
const temp_statuss=document.getElementById("temp_status");

const fun=async()=>{
 
    const cityname=cityInputs.value;
 if(cityname===""){

outputs.innerText=`please Write the Name before search`;
hidedata.classList.add("hide_data")
 }

 else{
  try  { const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=a01ac50ffcbc4f6ee8bdd2985742502a`)
 const data= await response.json();
//console.log(data);
  const arrdata=[data];
 
 console.log( arrdata[0])
  outputs.innerText= `${arrdata[0].name}, ${arrdata[0].sys.country}`;
results.innerText=arrdata[0].main.temp;
const temp=arrdata[0].weather[0].main;
if(temp=="Clear"){
    temp_statuss.innerHTML="<i class='fas fa-sun' style='color:#eccc68'></i>"
}else if(temp=="Clouds"){
    temp_statuss.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6'></i>"

}else if(temp=="Rain"){
    temp_statuss.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>"
}else {
    temp_statuss.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6'></i>"
}


hidedata.classList.remove("hide_data");

}
 catch{hidedata.classList.add("hide_data")
    outputs.innerText=`please enter the city name properly`
 }
 
 }

 
}



searchs.addEventListener("click",fun)