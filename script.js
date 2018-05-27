


$(document).ready(function(){
var amountSelected=1;
var selectedArray=[];
var selectedAtom;
var match=false;
var success=false;


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



    $("#mix").click(function(){
        var selectedCopy=selectedArray;

            for(m=0;m<selectedCopy.length;m++){
              console.log("selected array: "+selectedCopy[m].name);
            }



            var i;
            for(i=0;i<molecules.length;i++){
                var booleanArray=[];
                var usedSelected=[];

                var recipeCopy=molecules[i].recipe;
                for(l=0;l<recipeCopy.length;l++){
                    console.log("recipe "+recipeCopy[l].name);
                    booleanArray.push(false);
                }

                for(n=0;n<selectedCopy.length;n++){
                    usedSelected.push(false);
                }

                console.log("checking recipe for "+molecules[i].name);
                for(j=0;j<selectedCopy.length;j++){
                    for(k=0;k<recipeCopy.length;k++){
                        console.log("comparing selected's "+selectedCopy[j].name+" and recipe's "+recipeCopy[k].name);
                        console.log("j="+j+", k="+k);
                        if(recipeCopy[k].name==selectedCopy[j].name&&!usedSelected[j]&&!booleanArray[k]){
                            console.log("match");
                            booleanArray[k]=true;
                            usedSelected[j]=true;
                            break;
                        }
                    }
                }//end comparing both arrays

                var allFound=false;
                var allUsed=false;

                for(m=0;m<booleanArray.length;m++){
                    console.log(booleanArray[m]);
                    if(!booleanArray[m]){
                        console.log(false);
                        break;
                    }
                    else if(m==booleanArray.length-1){
                        allFound=true;
                        break;
                    }
                }

                for(p=0;p<usedSelected.length;p++){
                    console.log(p.toString()+booleanArray[p]);
                    if(!usedSelected[p]){
                        console.log("you didnt use everything");
                        break;
                    }
                    else if(p==usedSelected.length-1){
                        allUsed=true;
                        break;
                    }
                }

                if(allFound&&allUsed){
                    alert(molecules[i].name);
                }
            }//end molecules iteration
    });

});