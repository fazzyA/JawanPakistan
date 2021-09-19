/// setInterval setTimeout arrow function, default values, map, map of object


function showDate(){
   var d = new Date(); 
initialhour=d.getHours(); 
initialminute=d.getMinutes(); 
initialsecond=d.getSeconds();
 console.log(`${initialhour}:${initialminute}:${initialsecond}`)
}

setInterval(showDate, 1000)

