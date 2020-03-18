document.getElementById("demo").innerHTML = "Hello World!";
var btn = document.createElement("BUTTON");
btn.innerHTML = "CLICK ME";
document.body.appendChild(btn);

for(var key in schema.properties){
   console.log(key);
}
