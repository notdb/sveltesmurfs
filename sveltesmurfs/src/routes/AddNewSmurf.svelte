<script>

let newSmurf = {
name: 'name',
age: 'age',
height: 'height'
}

function testFun(smurf) {
addSmurf(newSmurf, event);
}

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

function addSmurf(smurf, event) {
    event.preventDefault();
    postRequest('http://localhost:3333/smurfs', smurf)
    .then(data => console.log(data))
    .catch(error => console.log(error))
  };

</script>

<style>
.smurfForm {
    border: 2px solid black;
    width: 65em;
    margin: 5px auto 0;
    padding: 25px 0;
    
}
</style>

<svelte:head>
	<title>Add new smurf</title>
</svelte:head>

<div class="smurfForm">
<h1>About thisTHERSTOHERSTOEIRSTHOE RSTHOIERSTEIORHSTHIESR </h1>

<form>
<input bind:value={newSmurf.name} placeholder="name">
<input bind:value={newSmurf.age} placeholder="age">
<input bind:value={newSmurf.height} placeholder="height">
<button on:click|preventDefault={testFun}>Add Smurf</button>

</form>
</div>