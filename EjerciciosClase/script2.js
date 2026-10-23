async function getData(){
    let response = await fetch("./data/people.json");
    let data = await response.json();
    console.log(data);

    let table = dpcument.getElementById("data");
    let rows = "";
    let index = 1;
    for(let obj of people){
        rows = rows + "<tr><td>"+index+"</td><td>"+obj.getName()
        index = index + 1;
    }table.innerHTML = rows;
}
getDaata();
