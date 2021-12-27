<template>
  <ul>
      <li v-for="link in links" v-bind:class="{ active: link.path == route }">
          <a :href="link.path">{{link.name}}</a>
      </li>
  </ul>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    links: Object()
  },
  computed: {
    route: function() {
      console.log(this.$route);
      return this.$route.fullPath
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 2em;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  font-weight: bold;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.active {
  background-color: #22c0e8;
}

li:hover {
  background-color: #189cbd;
}

li:hover:not(.active) {
  background-color: #111;
}


</style>

<!-- example from https://www.w3schools.com/css/css_navbar_horizontal.asp -->