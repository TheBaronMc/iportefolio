<template>
  <div class="about">
    <Contact></Contact>
  </div>
</template>

<script>
import Contact from '@/components/Contact.vue'

export default {
  components: {
    Contact
  }
}
</script>

<style scoped>
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
