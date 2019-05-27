<script>
export let smurf;
</script>

<style>
.Smurf {
    border: 2px solid black;
    margin-bottom: 15px;
    padding-bottom: 5px;
    width: 25em;
}

.details {
    padding-bottom: 12px;
}

</style>

<div class="Smurf">
  <h3>{smurf.name}</h3>
  <strong>{smurf.height} tall</strong>
  <p>{smurf.age} years old</p>
  <details class="details">
    <summary>Open me to delete smurf</summary>
    <button>Delete</button>
  </details>
</div>
