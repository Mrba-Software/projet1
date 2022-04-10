function Func() {
  
          var n1 = parseFloat(document.getElementById("nombre1").value);
          var n2 = parseFloat(document.getElementById("nombre2").value);
          var selectElmt = document.getElementById("list");
          var valuselect = selectElmt.options[selectElmt.selectedIndex].value;
          var textselect = selectElmt.options[selectElmt.selectedIndex].text;





             if (textselect==="+") {

                  alert("resulat: "+parseFloat(n1+n2));


              }
              else if (textselect==="-") {
                  alert("resulat: "+parseFloat(n1-n2));

              }
             else if (textselect==="/") {
                    alert("resulat: "+parseFloat(n1/n2));        
                 }
             else if (textselect==="*") {
                     alert("resulat: "+parseFloat(n1*n2));
            }
            else if (textselect==="%") {
                     alert("resulat: "+parseFloat(n1%n2));
            }
            else if (textselect==="pow") {
                     alert("resulat: "+parseFloat(n1**n2));
            }

            else
            {
                    alert("hum !! selection l'operation a effectuer svp");
            }


}