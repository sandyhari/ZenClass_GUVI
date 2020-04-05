var data = [];

    function fetchdata() {
      var http = new XMLHttpRequest();
      http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
          data = JSON.parse(http.responseText);
          loadData(data);
        }
      };
      http.open("GET", "https://restcountries.eu/rest/v2/all", true);
      http.send();
    }

    function searchCountry() {
      const textItem = document.getElementById("searchbox");
      var rowCount = mytbl.rows.length;
      while(--rowCount) {
        mytbl.deleteRow(rowCount);
      }
      mytbl.deleteRow(0);
      var result = data.filter(function(element) {
        return element.name.toLowerCase().trim().startsWith(textItem.value.toLowerCase().trim());
      });
      if(result.length > 0){
        loadData(result);
      }
        else {
          const rootDiv = document.getElementById("mytbl");
            const tr = document.createElement("tr");
            const tdname = document.createElement("td");
            const tdflag = document.createElement("td");
            const tdpopulation = document.createElement("td");
            tdname.innerHTML ="<div>No Such Countries</div>"
            tdflag.innerHTML ="<div> - </div>"
            tdpopulation.innerHTML ="<div> - </div>"
            tr.appendChild(tdname);
            tr.appendChild(tdflag);
            tr.appendChild(tdpopulation);
            rootDiv.appendChild(tr);
          }
    }

    function loadData(data) {
      const rootDiv = document.getElementById("mytbl");
      data.forEach(function(element) {
        const tr = document.createElement("tr");
        const tdname = document.createElement("td");
        const tdflag = document.createElement("td");
        const tdpopulation = document.createElement("td");
        tdname.innerHTML ="<div>" + element.name +"</div>"
        tdflag.innerHTML ="<div> <img src="+ element.flag +" height='40' width='40'></div>"
        tdpopulation.innerHTML ="<div>" + element.population +"</div>"
        tr.appendChild(tdname);
        tr.appendChild(tdflag);
        tr.appendChild(tdpopulation);
        rootDiv.appendChild(tr);
      });
    }
