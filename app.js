var list=document.getElementById("list");



function addtodo(){
    var todo_item=document.getElementById("todo-item")


    var li=document.createElement("li")
    var liText=document.createTextNode(todo_item.value)
    li.appendChild(liText)

// create delete button
    var delBtn=document.createElement("button")
    var delTxt=document.createTextNode("DELETE")
    delBtn.setAttribute("class","abtn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delTxt)

    delBtn.appendChild(delTxt)

    // create edit button
    var editBtn=document.createElement("button")
    var editTxt=document.createTextNode("EDIT")
    editBtn.setAttribute("class","abtn")
    editBtn.appendChild(editTxt)
    li.appendChild(delBtn)
    li.appendChild(editBtn)
    editBtn.setAttribute("onclick","editItem(this)")

    list.appendChild(li)
    todo_item.value=""
    console.log(li)
}


function deleteItem(e){
    e.parentNode.remove()
    console.log(e)
}

function delall(){
    list.innerHTML=""
}


function editItem(e){
    var val =e.parentNode.firstChild.nodeValue;
   var editValue=prompt("Enter Edit value",val)
    
   e.parentNode.firstChild.nodeValue=editValue
}