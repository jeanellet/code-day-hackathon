

$(document).ready(function(){

    var amountSelected=0;

    var first=document.getElementById("one");

    var newImg=document.createElement("img");
    newImg.src=oxygen.imgsrc;
    newImg.className="atomImg";
    newImg.style="width:"+oxygen.width+"; margin:auto !important;";
    newImg.align="middle";
    newImg.id=oxygen.name;

    first.appendChild(newImg);

    $(".atomImg").click(function(){
        var selectedAtom;

        for(i=0;i<array.length;i++){
            if(array[i].name==this.id){
                selectedAtom=array[i];
            }
            break;
        }

        console.log("selectedaatom="+selectedAtom.width);

        var currentSlot=amountSelected.toString()+"-select";

        var dest=document.getElementById(currentSlot);

        amountSelected++;

        var copyImg=document.createElement("img");
        copyImg.src=selectedAtom.imgsrc;
        copyImg.className="atomImg";
        copyImg.style="width:"+selectedAtom.width+"; margin:auto !important;";
        copyImg.align="middle";
        copyImg.id=selectedAtom.name;

        dest.appendChild(copyImg);
    });


});