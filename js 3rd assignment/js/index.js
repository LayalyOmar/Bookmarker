var siteNameInput = document.getElementById("siteName"),
    siteUrlInput = document.getElementById("siteUrl"),
    addOn;



if (JSON.parse(localStorage.getItem("addOn")) == null) {
    addOn = [];
}
else {
    addOn = JSON.parse(localStorage.getItem("addOn"));
    display();
}


function addBookmark() {

    var regex =/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/

if(siteUrlInput.value.match(regex)){
    var addOnSite = {
        siteName: siteNameInput.value,
        siteUrl: siteUrlInput.value,
    };

    addOn.push(addOnSite);
    localStorage.setItem("addOn", JSON.stringify(addOn));
    display();
    clear();
}


else{
    siteUrlInput.classList.add("was-validated")
}

   
}

function clear() {
    siteNameInput.value = "";
    siteUrlInput.value = "";

}



function display() {
var box=``;

    for (var i = 0; i < addOn.length; i++) {

        box+=
        `<tr>
            <td>`+i+`</td>
            <td>`+addOn[i].siteName+`</td>
            <td><a class="btn btn-warning" target="_blank" href="`+addOn[i].siteUrl+`">Visit</a></td>
            <td> <button class="btn btn-danger " onclick="erase(`+i+`)">Delete</button></td>
        </tr>
        
        `
    }

    document.getElementById("tBody").innerHTML=box



}

function erase(i){

addOn.splice(i,1)
localStorage.setItem("addOn",JSON.stringify(addOn))
display()
}