<script>
  export let mode = "";
</script>

<style>
  button {
    font: inherit;
    border: 1px solid #cf0056;
    background: linear-gradient(0.375turn, #cf0056,  hsl(305, 100%, 37%));
    padding: 0.5rem 1rem;
    color: whitesmoke;
    border-radius: 1.25rem;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 200;
    text-shadow: 1px 1px 1px black;
    transition: all 175ms;
  }

  button:focus {
    outline: none;
  }

  button:hover,
  button:active {
    background: linear-gradient(0.375turn,  hsl(305, 80%, 37%), #cf0056);
    border-color: hsl(305, 80%, 37%);
    box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
    font-weight: 100;
  }

  button:disabled,
  button:disabled:hover,
  button:disabled:active {
    background: #ccc;
    border-color: #ccc;
    color: #959595;
    box-shadow: none;
    cursor: not-allowed;
  }

  .outline {
    background: transparent;
    color: #cf0056;
    box-shadow: none;
  }

  .outline:hover,
  .outline:active {
    background: #ffc7de;
    box-shadow: none;
  }

  .outline:disabled,
  .outline:disabled:hover,
  .outline:disabled:active {
    background: transparent;
    color: #ccc;
  }
</style>

<button class={mode} type="button" on:click>
  <slot />
</button>
