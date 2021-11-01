<template>
  <div id='cv'>
      <div class='description'>
          <CVDescription></CVDescription>
      </div>

      <div id='content'>
            <div class="column">
                <CVEducation></CVEducation>
                <CVInterest></CVInterest>
            </div>
            <div class="column">
                <CVLanguage></CVLanguage>
                <CVInterest></CVInterest>
            </div>
      </div>
  </div>
</template>

<script>
import CVDescription from '@/components/CV_Components/CV_Description.vue'
import CVInterest from '@/components/CV_Components/CV_Interest.vue'
import CVLanguage from '@/components/CV_Components/CV_Language.vue'
import CVEducation from '@/components/CV_Components/CV_Education.vue'

export default {
  name: 'Cv',
  components: {
      CVDescription,
      CVInterest,
      CVLanguage,
      CVEducation
  },
  setup() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #cv {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        margin-top: 1em;
        gap: 1em;
    }

    .description {
        display: flex;
        flex-direction: row;
    }

    #content {
        display: flex;
        flex-direction: row;
        gap: 1em;
    }

    .column {
        width:  50%;
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
</style>