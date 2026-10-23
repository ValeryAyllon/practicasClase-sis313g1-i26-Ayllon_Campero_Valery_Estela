class person{

        constructor(name,lasName,address){
            this.name = name;
            this.lasName = lasName;
            this.address = address;
         }
        setName(name){
            this.name = name 
        }
        getName(){
            return this.name
        }
        setLasName(lastName){
            this.lasName = lastName
        }
        getLasName(){
            return this.lasName;
        }
        setAddress(address){
            this.address = address;
        }
        getAddress(){
            return this.address;
        }
}

let people = [new person("juan","perez","Potosi"),
              new person("Maria","Cruz","La Paz"),
              new person("kevin","Lopez","Sucre")];
console.log(people);
let table = document.getElementById("data");
let rows = "";
let index = 1;
for(let obj of people){
    rows = rows + "<tr><td>"+index+"</td><td>"+obj.getName()+"</td><td>"+obj.getLasName()+"</td><td>"+obj.getAddress()+"</td></tr>";
    index = index + 1;
}
table.innerHTML = rows;