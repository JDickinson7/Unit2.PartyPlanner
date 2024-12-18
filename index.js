//DOM
const main = document.querySelector('main');

//State
const state = {
  Parties: [],
};

//Funtions 
const fetchParties = async () => {
  const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2410-FTB-MT-WEB-PT/events');

  const data = await response.json();
  const allParties = data.results;
  state.Parties = allParties;

  renderAllParties();
}

const renderAllParties = () => {
  const partyList = document.getElementById('party-list'); 
  partyList.innerHTML = ''; 
  state.Parties.forEach(party => {
    const li = document.createElement('li');
    li.textContent = `${party.name} - ${party.date} - ${party.location}`;
    partyList.appendChild(li);
  });
};

const ul = document.querySelector('ul');

// const getUsers = async() => {
//   const API.URL'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2410-FTB-MT-WEB-PT/events'
//   const users = await reponse.json();

// //   const names = users.map|(individualUser) => {
// //     return '<li>${individualUser.name}</li>';
// //   });

// //   const ul = document.querySelector("ul");
// //   ul.innerHTML = names.join 
// // }