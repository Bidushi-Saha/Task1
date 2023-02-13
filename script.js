document.getElementsByClassName("dog").innerHTML=document.body.nodeName;
let Nodes=document.body.childNodes;
let sum ="";
for(let i=0;i<Nodes.length;i++){
  sum+= Nodes[i].nodeType +" " + Nodes[i].nodeName +"<br>";
}
document.getElementById("demo").innerHTML=sum;