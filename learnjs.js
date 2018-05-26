
$(document).ready(function(){

for (i=0; i < array.length; i++){
    var container=document.getElementById("card-container");

    var newCard=document.createElement("div");
         newCard.className = "card";
        var newImage=document.createElement("img");
             newImage.className = "card-img-top";
             newImage.src = array[i].imgsrc;
    newCard.appendChild(newImage);
    var newCardBody=document.createElement("div");
         newCardBody.className = "card-body";
        var newTitle=document.createElement("h5");
             newTitle.className = "card-title";
             newTitle.innerHTML = array[i].name;
        var newParagraph=document.createElement("p");
             newParagraph.className = "card-text";
             newParagraph.innerHTML = array[i].fact;
    newCardBody.appendChild(newTitle);
    newCardBody.appendChild(newParagraph);
    newCard.appendChild(newCardBody);
        var newUList=document.createElement("ul");
            newUList.className = "list-group list-group-flush";
            var newList=document.createElement("li");
                newList.className = "list-group-item";
                newList.innerHTML = array[i].anum;
            var newList2=document.createElement("li");
                newList2.className = "list-group-item";
                newList2.innerHTML = array[i].mass;
        newUList.appendChild(newList);
        newUList.appendChild(newList2);
    newCard.appendChild(newUList);

container.appendChild(newCard);
};

});