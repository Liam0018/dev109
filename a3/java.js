// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    upRhombus(pHeight, pColorEven, pColorOdd, pSymbol);
    downRhombus(pHeight, pColorEven, pColorOdd, pSymbol);
}

function upRhombus(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";

  for (i=0;i<=pHeight;i++){
    rLine +="<p>";
    for (k=0;k<(pHeight-i);k++){
      rLine +="<span style='color: #ffffff;'>*</span>"
    }

    //Create each line on the Rhombus
    for(j=0;j<(i*2);j++){

      //Is the position even or odd so we change the color
      if (j%2)
        //even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      else
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

    }
    rLine +="</p>";
    // console.log(rLine);

  }

  document.getElementById("upRhombus").innerHTML = rLine;
}

function downRhombus(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";

  for (i=pHeight;i > 0;i--){
    rLine +="<p>";
    for (k=pHeight;k>i;k--){
      rLine +="<span style='color: #ffffff;'>*</span>"
    }

    //Create each line on the Rhombus
    for(j=0;j<(i*2);j++){

      //Is the position even or odd so we change the color
      if (j%2)
        //even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      else
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

    }
    rLine +="</p>";
    // console.log(rLine);

  }

  document.getElementById("downRhombus").innerHTML = rLine;
}
