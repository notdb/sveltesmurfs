<script>
  export let segment;
</script>

<style>
  nav {
    width: 65em;
    margin: 25px auto 0;
    height: 5em;
   background-color: #D1F686;
    border: 2px solid black;
    display:flex;
    align-items:center;
    justify-content: center;
   
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">Home</a>
    </li>
    <li>
      <a class={segment === 'AddNewSmurf' ? 'selected' : ''} href="AddNewSmurf">Add New Smurf</a>
    </li>

  </ul>
</nav>
