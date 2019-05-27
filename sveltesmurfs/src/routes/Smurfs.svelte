<script>
export let smurfs;
import Smurf from "./Smurf.svelte";
let smurf;
</script>

<style>
.Smurfs {
    margin: 25px auto 0;
    border: 2px solid black;
    width: 65em;
    height: 828px;
    background-color: #086FFF;



}

    .Smurfs2 {
	display:flex;
	justify-content: center;
	justify-content: space-around;
	flex-wrap: wrap;
	padding-left: -40px;
  
}



</style>


<div class="Smurfs">
<h1>Smurf Village</h1>

<div class="Smurfs2">
{#each smurfs as smurf}
<Smurf {smurf} />
{/each}
</div>
</div>