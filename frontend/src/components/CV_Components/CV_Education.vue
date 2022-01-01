<template>
    <div class="block">
        <h2>Education</h2>
    <ul class="timeline">
        <li v-for="education in educations">
            <h3>{{education.diploma}}</h3>
            <div style="display: flex; width: 100%;">
                <h4 style="flex-grow: 1;">{{education.school}}, {{education.location}}</h4>
                <h4 style="flex-grow: 1; color: grey; text-align: end;">{{date(education.beginDate)}} -> {{date(education.endDate) || 'now'}}</h4>
            </div>
        </li>
    </ul>
    </div>
    
</template>

<script>
import {fetchEducations} from '@/service/fetchData.js'
import {formatDate} from '@/service/formatDate.js'

export default {
    name: 'CVEducation',
    data() {
        return {educations: []}
    },
    async mounted() {
        this.educations = await fetchEducations()
    },
    methods: {
        date(dateStr) {
            return formatDate(dateStr)
        }
    },
}
</script>

<style scoped>

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