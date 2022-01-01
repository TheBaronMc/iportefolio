<template>
    <div class="block">
        <h1 class="name">Charly Ginevra <br>
            {{ job }}
        </h1>
        <p>{{ description }}</p>
    </div>
    
</template>

<script>
import {fetchDescription, fetchJob} from '@/service/fetchData.js'

export default {
    name: 'CVDescription',
    data() {
        return {description: 'no description', job: 'no job'}
    },
    async mounted() {
       let res = await fetchDescription()
       let job = await fetchJob()
       this.description = res[0].content
       this.job = job[0].name
    }
}
</script>

<style scoped>

</style>