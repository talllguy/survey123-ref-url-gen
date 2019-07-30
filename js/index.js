function generateSurvey123url() {
    var surveyID = document.getElementById('inputSurveyID').value;
    var PK = document.getElementById('inputPK').value;
    var FK = document.getElementById('inputFK').value;
    var TSPACE = document.getElementById('inputT').value;
    var T = TSPACE.split(' ').join('+');

    var prefixURL = "arcgis-survey123://?itemID=";
    var fieldAdd = "&field:";
    var pkTransitPre = "={";
    var pkTransitPost = "}";
    var buttonPre = '<a href="';
    var buttonImg = '"><img src="https://dabuttonfactory.com/button.png?t='
    var buttonParems = '&f=Roboto-Bold&ts=24&tc=fff&tshs=1&tshc=000&hp=20&vp=8&c=5&bgt=gradient&bgc=6aa84f&ebgc=274e13&shs=1&shc=444&sho=s" alt="'
    var buttonEnd = '"></a>'

    var FKFields = FK.split(",");
    var PKFields = PK.split(",");

    if ((FK ? !PK : PK ) || FKFields.length !== PKFields.length) {
      alert("Mismatch Number of FK and PK fields");
      document.getElementById('resultURL').value = "";
      document.getElementById('buttonGen').value = "";
    } else {
      var fields = "";
      for(var i = 0; i < FKFields.length; i++) {
        fields = fields.concat(fieldAdd, FKFields[i], pkTransitPre, PKFields[i], pkTransitPost);
      }
      var result = prefixURL.concat(surveyID,fields);

      var buttonOut = buttonPre.concat(result,buttonImg,T,buttonParems,TSPACE,buttonEnd);

      document.getElementById('resultURL').value = result;
      document.getElementById('buttonGen').value = buttonOut;
  }
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
