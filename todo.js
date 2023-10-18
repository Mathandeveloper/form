let input=document.getElementById("input")
let ul=document.getElementById("ullist")
function add()
{
   let li=document.createElement("li")
   li.innerHTML=input.value+'<button onclick="remove(event)">x</button>'
   ul.append(li)
}
function remove(event)
{
   event.target.parentElement.remove()
}