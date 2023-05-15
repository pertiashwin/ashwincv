// const api_url = "https://jsonplaceholder.typicode.com/users";

const covapi_url = "https://api.covid19api.com/summary";

function getApiData(api_url1){
    fetch(api_url1)
    .then(res=>res.json())
    .then(res=> {
        console.log(res)
        displayDataTable(res)
    })
    .catch(err=>console.log(err))
}
getApiData(covapi_url)

function displayDataTable(apidata) {
    console.log(apidata)

    for(let count of apidata){
        const newrow = document.createElement("tr");
        var newtd1 = document.createElement("td");
        var newtd2 = document.createElement("td");
        var newtd3 = document.createElement("td");

        newtd1.innerHTML = `${count.Countries[77].country}`
        newtd2.innerHTML = `${count.email}`
        newtd3.innerHTML = `${count.phone}`

        newrow.appendChild(newtd1)
        newrow.appendChild(newtd2)
        newrow.appendChild(newtd3)

        document.querySelector('tbody').appendChild(newrow)
    }
}
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))