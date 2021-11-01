<template>
  <div class="home">
    <Cv></Cv>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Cv from '@/components/Cv.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Cv
  }
}
</script>
