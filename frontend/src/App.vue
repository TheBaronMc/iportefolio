<template>
  <div class="body">
    <NavBar :links="links" class="header" ></NavBar>
    <router-view class="content"/>
    <Foot class="footer"></Foot>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Foot from '@/components/Foot.vue'

export default {
  components: {
    NavBar,
    Foot
  },
  setup() {
    const links = [{'name': 'Home', 'path': '/'},
                   {'name': 'About', 'path': '/about'}]
    return { links }
  }
}
</script>

<style>

html, body {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.body {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  flex-grow: 1;
}

.footer, .header {
  flex-shrink: 0;
}

.footer {
  margin-top: 2em;
}

.header {
  margin-bottom: 1em;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.block {
    background-color: white;
    padding: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
    border-radius: 15px;
}
</style>
