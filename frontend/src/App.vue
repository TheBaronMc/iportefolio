<template>
  <NavBar :links="links" ></NavBar>

  <router-view/>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  },
  setup() {
    const links = [{'name': 'Home', 'path': '/'},
                   {'name': 'About', 'path': '/about'}]
    return { links }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
