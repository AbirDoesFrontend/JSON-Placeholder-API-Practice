/* const shop = {
 shopName: "Shwapno",
 address: "Mirpur",
 products: ["alu", "peyaj", "tomato"],
 owner: {
  ownerName: "AbirKhan",
  profession: "Frontend Developer"
 },
 totalProducts: 450,
 newStore: true
}

console.log(shop);

let covertToJson = JSON.stringify(shop);
console.log(covertToJson);

let converted = JSON.parse(covertToJson);
console.log(converted); */


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

function fetchUser(){
 fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => displayUser(data))
}

fetchUser();

function displayUser(users){
 let userSection = document.getElementById("user");
 for(const user of users){
  console.log(user.phone);
  const div = document.createElement("div");
  div.innerHTML = `
  <h2 style="font-weight: 100;">Name: <span style="font-weight: 700;">${user.name}</span></h2>
  <p>Email: <span style="font-weight: 500;">${user.email}</span></p>
  `

  userSection.appendChild(div);
 }

}


// fetch("https://jsonplaceholder.typicode.com/albums")
//   .then(response => response.json())
//   .then(data => console.log(data))