<script>
  import {timer } from './timer-store'
  import Cart from "./Cart/Cart.svelte";
  import Products from "./Products/Products.svelte";
  import Button from './UI/Button.svelte'

  let showCart=false
  
  // timer.subscribe(count => {
  //   console.log(`App: ${count}s`)
  // })
</script>

<Button on:click={() => showCart = !showCart}>{showCart? 'hide' : 'show' } Cart</Button>
{#if showCart}
  <Cart />
{/if}
<Products />

<p>{$timer}s</p>
