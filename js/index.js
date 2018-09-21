function generateSurvey123url() {
    var surveyID = document.getElementById('inputSurveyID').value;
    var PK = document.getElementById('inputPK').value;
    var FK = document.getElementById('inputFK').value;
 
    var prefixURL = "arcgis-survey123://?itemID=";
    var fieldAdd = "&field:";
    var pkTransitPre = "={";
    var pkTransitPost = "}";
    var buttonPre = '<a href="';
    var buttonPost = '"><img src="https://dabuttonfactory.com/button.png?t=Do+Survey&f=Roboto-Bold&ts=24&tc=fff&tshs=1&tshc=000&hp=20&vp=8&c=5&bgt=gradient&bgc=6aa84f&ebgc=274e13&shs=1&shc=444&sho=s" alt="Do Survey"></a>'
  
    var result = prefixURL.concat(surveyID,fieldAdd,FK,pkTransitPre,PK,pkTransitPost);

    var buttonOut = buttonPre.concat(result,buttonPost)
    
    document.getElementById('resultURL').value = result;
    document.getElementById('buttonGen').value = buttonOut;
}

function copyButton() {
  /* Get the text field */
  var copyText = document.getElementById("buttonGen");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");
  
  /* alert show */
  $(".alert").show()
}