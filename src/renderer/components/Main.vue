<script lang="ts">
import { computed, defineComponent } from 'vue'
import { store } from '@/store'
// import { useStore } from 'vuex'
//
// const store = useStore()
// const stack = computed(() => {
//   return store.state.stack
// })
// console.log(stack)
const msg = 'KeepKey Desktop';


export default defineComponent({
  name: 'Home',
  components: {
  },
  setup() {
    const addTwo = () => store.commit('add', 2)
    const count = computed(() => store.state.count)

    return {
      addTwo,
      count,
    }
  },
})

</script>

<template>
  <div id="hello">
    <h1>{{ msg }}</h1>
<!--    <button @click="gotoDocs()">Docs</button>-->
    <button type="button" @click="addTwo">count is: {{ count }}</button>
  </div>
</template>
<style scoped>
#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
