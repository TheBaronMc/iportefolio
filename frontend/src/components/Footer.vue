<template>
    <div class="footer">
        <p>iportfolio by Charly Ginevra</p>
        <div>
            <a v-for="media in ['facebook', 'instagram', 'github', 'linkedin']" v-bind:href="links[media]" target="_blank">
                <img :src="require(`@/assets/${media}_white.svg`)" alt="">
            </a>
        </div>
    </div>
</template>

<script>
import { fecthContact } from '@/service/fetchData'

export default {
  name: 'Footer',
  setup() {
      return {links: {facebook: '', instagram: '', github: '', linkedin: ''}}
  },
  async mounted() {
      let res = await fecthContact()
      res = res[0]
      for (let l of ['facebook', 'instagram', 'github', 'linkedin']) {
          this.links[l] = res[l].link
      } 
      console.log(this.links);
  },
}
</script>

<style scoped>
img {
    width: 20px;
    height: 20px;
}

p {
    margin: 0;
}

.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #333;
    color: white;
    padding-top: 15px;
    padding-bottom: 5px;
}
</style>