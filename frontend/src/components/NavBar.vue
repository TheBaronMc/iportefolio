<template>
  <ul>
      <li v-for="link in links">
          <a :href="link.path">{{link.name}}</a>
      </li>
  </ul>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    links: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #04AA6D;
}
</style>

<!-- example from https://www.w3schools.com/css/css_navbar_horizontal.asp -->