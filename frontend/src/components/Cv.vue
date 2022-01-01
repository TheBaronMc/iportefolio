<template>
  <div id='cv'>
      <div id='description'>
          <CVDescription></CVDescription>
      </div>

      <div id='content'>
            <div class="cv-column">
                <CVWorkExperience></CVWorkExperience>
                <CVEducation></CVEducation>
                <CVInterest></CVInterest>
            </div>
            <div class="cv-column">
                <CVProject></CVProject>
                <CVLanguage></CVLanguage>
                <CVSkill></CVSkill>
            </div>
      </div>
  </div>
</template>

<script>
import CVDescription from '@/components/CV_Components/CV_Description.vue'
import CVInterest from '@/components/CV_Components/CV_Interest.vue'
import CVLanguage from '@/components/CV_Components/CV_Language.vue'
import CVEducation from '@/components/CV_Components/CV_Education.vue'
import CVSkill from '@/components/CV_Components/CV_Skill.vue'
import CVProject from '@/components/CV_Components/CV_Project.vue'
import CVWorkExperience from '@/components/CV_Components/CV_WorkExperience.vue'

export default {
  name: 'Cv',
  components: {
      CVDescription,
      CVInterest,
      CVLanguage,
      CVEducation,
      CVSkill,
      CVProject,
      CVWorkExperience
  },
  setup() {

  }
}
</script>

<style>
    #cv {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        gap: 1em;
    }

    #description {
        display: flex;
        flex-direction: row;
    }

    #content {
        display: flex;
        gap: 1em;
    }

    .cv-column {
        width:  50%;
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    ul.timeline {
        list-style-type: none;
        position: relative;
    }

    ul.timeline:before {
        content: ' ';
        background: #d4d9df;
        display: inline-block;
        position: absolute;
        left: 29px;
        width: 2px;
        height: 100%;
        z-index: 400;
    }
    ul.timeline > li {
        padding-left: 15px;
        text-align: start;
    }
    ul.timeline > li:before {
        content: ' ';
        background: white;
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 3px solid #22c0e8;
        left: 20px;
        width: 20px;
        height: 20px;
        z-index: 400;
    }
</style>