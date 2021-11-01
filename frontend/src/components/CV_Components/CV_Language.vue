<template>
    <div class="block">
        <h2>Languages</h2>
        <div v-for="language in languages">
            <label :for="language.id">{{language.name}} : </label>
            <progress :id="language.id" max="100" :value="language.level"> {{language.level}}% </progress>
        </div>
        
    </div>
    
</template>

<script>
export default {
    name: 'CVLanguage',
    data() {
        return {languages: []}
    },
    mounted() {
        fetch(`http://localhost:3000/api/cv/language`, { method: 'GET' })
        .then(res => res.json())
        .then((value) => {
            this.languages = value
        })
        .catch(error => console.log(error.message));
    }
}
</script>

<style scoped>

.block {
    background-color: white;
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
}

</style>