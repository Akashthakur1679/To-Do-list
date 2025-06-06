const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You Must Write Something") ;
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7"   // ye cross icon koo add karna ka code h \u00d7
        li.appendChild(span);
    }
    inputBox.value= "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }   
}, false);

// Creating the function to save data as if we refresh the page then all text will disappear
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}


// ab jab hum firse website kholenge to ye jo data hamne save kiya h usko bapas lana hoga uske liye , we will use this 
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();