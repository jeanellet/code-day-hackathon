

$(document).ready(function(){

    var amountSelected=1;
    var selectedArray=[];

    var atomSlots=["one","two","three","four"];

    for(i=0;i<array.length;i++){
        var currentDiv=document.getElementById(atomSlots[i]);

        var newInnerDiv=document.createElement("div");
        newInnerDiv.className="myTooltip";
        $('.myTooltip').attr({"data-toggle": "tooltip", "data-placement": "bottom"});
        newInnerDiv.title=array[i].name;

        var newImg=document.createElement("img");
        newImg.src=array[i].imgsrc;
        newImg.className="atomImg";
        newImg.style="width:"+array[i].width+"; margin:auto !important;";
        newImg.align="middle";
        newImg.id=array[i].name;

        newInnerDiv.appendChild(newImg);
        currentDiv.appendChild(newInnerDiv);
    }


    $(".atomImg").click(function(){
        var selectedAtom;

        for(i=0;i<array.length;i++){
            if(array[i].name==this.id){
                selectedAtom=array[i];
                break;
            }

        }
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

    var match=false;

    var success=false;

    $( "#mix" ).unbind( "click" );
    $("#mix").click(function(){
        var selectedCopy=selectedArray;

        for(m=0;m<selectedCopy.length;m++){
            console.log("selected array: "+selectedCopy[m].name);
        }

        for(i=0;i<molecules.length;i++){
            var recipeCopy=molecules[i].recipe;
            for(j=0;j<recipeCopy.length;j++){
                for(k=0;k<selectedCopy.length;k++){
                    console.log("comparing recipe's "+recipeCopy[j].name+" and selected's "+selectedCopy[k].name);
                    console.log("j="+j+", k="+k);
                    if(recipeCopy[j].name==selectedCopy[k].name){
                        console.log("match!");
                        selectedCopy[k]="";
                        match=true;
                        break;
                    }
                }
                if(!match){
                    break;
                }
            }

            var correctCount=0;

            for(l=0;l<selectedCopy.length;l++){
                if(selectedCopy[l]==""){
                    correctCount++;
                }
            }
            console.log(correctCount.toString()+ " vs "+(recipeCopy.length).toString());
            if(correctCount==recipeCopy.length){
                console.log(true);
            }
            else{
                console.log(false);
            }

        }//end molecule iteration
        success=false;
    });

});