<script>
  import { smurfStore } from "./stores.js";
  let newSmurf = {
    name: "name",
    age: "age",
    height: "height"
  };

  function testFun() {
   smurfStore.addSmurf(newSmurf, event);
  }

 
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
  <h1>About thisTHERSTOHERSTOEIRSTHOE RSTHOIERSTEIORHSTHIESR</h1>

  <form>
    <input bind:value={newSmurf.name} placeholder="name" />
    <input bind:value={newSmurf.age} placeholder="age" />
    <input bind:value={newSmurf.height} placeholder="height" />
    <button on:click|preventDefault={testFun}>Add Smurf</button>

  </form>
</div>
