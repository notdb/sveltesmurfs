<script>
  import Smurfs from "./Smurfs.svelte";
  import AddNewSmurf from "./AddNewSmurf.svelte";
  

  let smurfs = [];

  let request = new Request("http://localhost:3333/smurfs", {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      body: "ReadableStream"
    })
  });

  fetch(request)
    .then(response => response.json())
    .then(data => {
      smurfs = data;
      console.log(data);
      console.log(smurfs);
    })
    .catch(err => {
      console.log(err);
    });


</script>

<style>
  h1 figure p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

/*
  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }
*/
  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<div class="smurf">
  <Smurfs {smurfs} />

</div>
