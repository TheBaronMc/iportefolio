<template>
    <div class="footer">
        <p>iportfolio by Charly Ginevra</p>
        <div style="display: flex;">
                <a v-for="media in medias" :href="links[media]" target="_blank">
                    <img :src="require(`@/assets/${media}_white.svg`)" alt="">
                </a>
        </div>
    </div>
</template>

<script>
import { fecthContact } from '@/service/fetchData'

export default {
  name: 'Foot',
  data() {
      return {links : {facebook: '', instagram: '', github: '', linkedin: ''}, medias: ['facebook', 'instagram', 'github', 'linkedin']}
  },
  async mounted() {
      let res = await fecthContact()
      res = res[0]
      for (let l of this.medias) {
        this.links[l] = res[l].link
      }
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