//DOM
const main = document.querySelector('main');

//State
// Parties: [], 

//Funtions 
const fetchParties = async () => {
  const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2410-FTB-MT-WEB-PT/events');

  const data = await response.json();
  const allParties = data.results;
  state.Parties = allParties;

  renderAllParties();
}



// const getUsers = async() => {
//   const API.URL'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2410-FTB-MT-WEB-PT/events'
//   const users = await reponse.json();

// //   const names = users.map|(individualUser) => {
// //     return '<li>${individualUser.name}</li>';
// //   });

// //   const ul = document.querySelector("ul");
// //   ul.innerHTML = names.join 
// // }