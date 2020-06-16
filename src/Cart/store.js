import { writable} from 'svelte/store'

const cart = writable([
  {
    id: "p1",
    title: "A Book",
    price: 9.99
  }, {
    id: "p2",
    title: "A Carpet",
    price: 99.99
  }
])

export default cart