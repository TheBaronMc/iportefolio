<template>
    <div class="block">
        <h2>Languages</h2>
        <div v-for="language in languages">
            <label :for="language.id">{{language.name}} : </label>
            <progress :id="language.id" max="100" :value="level[language.level]"> {{level[language.level]}}% </progress>
        </div>
        
    </div>
    
</template>

<script>
import {fetchLanguages} from '@/service/fetchData'

export default {
    name: 'CVLanguage',
    data() {
        return {languages: [], level: {'B2': 75, 'C2': 100}}
    },
    async mounted() {
        this.languages = await fetchLanguages() 
    }
}
</script>

<style scoped>

</style>