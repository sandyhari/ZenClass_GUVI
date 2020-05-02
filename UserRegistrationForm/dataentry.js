const stateobj = {
  "Andhra Pradesh":['select city','Vizag','Vijayawada','Kurnool'],
  "Delhi": ['select city',"new Delhi", "North Delhi","South Delhi"],
  "Kerala": ['select city',"Thiruvananthapuram", "Palakkad","Kochi"],
  "TamilNadu":['select city',"Chennai","Coimbatore","Trichy"],
  "Karanataka":['select city',"Bengaluru","Hasan","Hubli"]
};



var idName = document.getElementById('tname'),
idEmail = document.getElementById('temail'),
idage = document.getElementById('tage'),
stateid = document.getElementById("stateid"),
cityid = document.getElementById("cityid"),
idMsg = document.getElementById('tmsg');

function resetform(){
  idName.value = '',
  idEmail.value = '',
  idage.value = '',
  idMsg.value = '';

  var checkboxval1 = document.getElementsByName('checkbox');
  for (var i = 0; i < checkboxval1.length; i++) {
    checkboxval1[i].checked= false;
  }

}
function selectcities(){
  deleteChild();
  var toption = stateobj[stateid.value];
  for (var i = 0; i < toption.length; i++) {
    var option  = document.createElement('option');
    option.name = stateobj[stateid.value][i];
    option.innerText = stateobj[stateid.value][i];
    option.value = stateobj[stateid.value][i];
    cityid.appendChild(option);
  }
}

function deleteChild() {
        var e = document.getElementById('cityid');
        var child = e.lastElementChild;
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
    }


function myFun(){
  if (idName.value == '' || idEmail.value == ''|| idage.value ==''|| idMsg.value == '') {
    alert('Please fill out all fields.');
  }
  else {
    var radioVal = document.getElementsByName('gender');
        for (var i = 0; i < radioVal.length; i++) {
          if(radioVal[i].checked)
            var genderVal = radioVal[i].value;
          }
          var checkboxval = document.getElementsByName('checkbox');
          var checkVal = "";
          for (var i = 0; i < checkboxval.length; i++) {
            if(checkboxval[i].checked)
              checkVal = checkVal +" "+checkboxval[i].value;
          }

    //console.log(stateobj[stateid.value]);
  const rootDiv = document.getElementById('mytbl');
  const tr = document.createElement('tr');
  const tdname = document.createElement('td');
  const tdemail = document.createElement('td');
  const tdAge = document.createElement('td');
  const tdGender = document.createElement('td');
  const tdAddr = document.createElement('td');
  const tdcolor = document.createElement('td');
  const tdmsg = document.createElement('td');
  tdname.innerHTML=idName.value;
  tdemail.innerHTML = idEmail.value;
  tdAge.innerHTML = idage.value;
  tdGender.innerHTML = genderVal;
  tdAddr.innerHTML = cityid.value +','+ stateid.value +','+'India.';
  tdcolor.innerHTML = checkVal;
  tdmsg.innerHTML = idMsg.value;
  tr.appendChild(tdname);
  tr.appendChild(tdemail);
  tr.appendChild(tdAge);
  tr.appendChild(tdGender);
  tr.appendChild(tdAddr);
  tr.appendChild(tdcolor);
  tr.appendChild(tdmsg);
  rootDiv.appendChild(tr);


  }

}
