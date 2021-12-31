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

.block {
    background-color: white;
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
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