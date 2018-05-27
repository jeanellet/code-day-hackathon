
$(document).ready(function(){
    var container=document.getElementById("card-container");
        var newGrid=document.createElement("div");
            newGrid.className = "row card-group";
            newGrid.style = "height:75%";
 for (i=0; i < array.length; i++){
            var newColumn=document.createElement("div");
                newColumn.className = "col-lg-3 col-md-6";
                var newCard=document.createElement("div");
                     newCard.className = "card";
                    var newImage=document.createElement("img");
                         newImage.className = "card-img-top";
                         newImage.src = array[i].imgsrc;
                         newImage.style.width = array[i].width;
                         newImage.style.margin = "auto";
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
                            newList.innerHTML = "Atomic Number: " + array[i].anum;
                        var newList2=document.createElement("li");
                            newList2.className = "list-group-item";
                            newList2.innerHTML = "Molar Mass: " + array[i].mass;
                    newUList.appendChild(newList);
                    newUList.appendChild(newList2);
                newCard.appendChild(newUList);
            newColumn.appendChild(newCard);
        newGrid.appendChild(newColumn);
    container.appendChild(newGrid);
};

});