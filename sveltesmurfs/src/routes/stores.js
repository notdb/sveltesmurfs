import { writable } from "svelte/store";

function postRequest(url, data) {
  return fetch(url, {
    credentials: "same-origin", // 'include', default: 'omit'
    method: "POST", // 'GET', 'PUT', 'DELETE', etc.
    body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }).then(response => response.json());
}
/*
function addSmurf(smurf, event) {
  event.preventDefault();
  postRequest("http://localhost:3333/smurfs", smurf)
    .then(data => console.log(data))
    .catch(error => console.log(error));
}
*/
function customSmurfStore() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    addSmurf: (newsmurf, event) => {
      event.preventDefault();
      postRequest("http://localhost:3333/smurfs", newsmurf)
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }
  };
}

export const smurfStore = customSmurfStore();
