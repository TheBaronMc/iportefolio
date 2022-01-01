<template>
    <div class="block">
        <h2>Work Experiences</h2>
        <ul class="timeline">
            <li v-for="workExperience in workExperiences">
                <h3>{{workExperience.job}}</h3>
                <div style="display: flex; width: 100%;">
                    <h4 style="flex-grow: 1;">{{workExperience.company}}, {{workExperience.location}}</h4>
                    <h4 style="flex-grow: 1; color: grey; text-align: end;">{{date(workExperience.beginDate)}} -> {{date(workExperience.endDate) || "now"}}</h4>
                </div>
                <p>{{ workExperience.description }}</p>
            </li>
        </ul>
    </div>
    
</template>

<script>
import {fetchWorkExperiences} from '@/service/fetchData.js'
import {formatDate} from '@/service/formatDate.js'

export default {
    name: 'CVEducation',
    data() {
        return {workExperiences: []}
    },
    async mounted() {
        this.workExperiences = await fetchWorkExperiences()
    },
    methods: {
        date(dateStr) {
            return formatDate(dateStr)
        }
    },
}
</script>

<style scoped>

</style>