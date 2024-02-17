let xttp = new XMLHttpRequest();

xttp.onload = function(){
    let response = JSON.parse(this.responseText);
    console.log(response);
    output(response);
}

let tableBody = document.getElementById('tableBody');

function output(response){
    for(let i = 0; i < response.length; i++){
        let tableRow = `<tr>
                      <td>${response[i].id}</td>
                      <td>${response[i].title}</td>
                      <td>${response[i].rating}</td>
                      <td>${response[i].feedback}</td>
                      <td>${response[i].rater_name}</td>
                    </tr>`;
        tableBody.innerHTML += tableRow;
    }
}

xttp.open('GET', "http://localhost/assignment/assignment/ass.php");
xttp.send();