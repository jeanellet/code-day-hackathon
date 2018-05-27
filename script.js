

$(document).ready(function(){

    var amountSelected=1;
    var selectedArray=[];

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
                break;
            }

        }

        console.log("selectedaatom="+selectedAtom.width);

        var currentSlot=amountSelected.toString();

        var dest=document.getElementById(currentSlot);

        amountSelected++;

        var copyImg=document.createElement("img");
        copyImg.src=selectedAtom.imgsrc;
        copyImg.className="atomImg";
        copyImg.style="width:"+selectedAtom.width+"; margin:auto !important;";
        copyImg.align="middle";
        copyImg.id=selectedAtom.name;

        dest.appendChild(copyImg);
        selectedArray.push(selectedAtom);
    });

    $("#clear").click(function(){
        amountSelected=1;
        selectedArray=[];
        console.log("clearing");
        for(i=amountSelected;i<=array.length;i++){
            document.getElementById(i).innerHTML = "";
        };
    });

    $("#mix").click(function(){

        for(i=0;i<selectedArray.length;i++){
            console.log(selectedArray[i].name);
        }
    });

});