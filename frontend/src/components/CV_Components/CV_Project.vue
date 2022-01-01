<template>
    <div class="block">
        <h2>Projects</h2>
        <div>
            <div v-for="(project, index) in projects" class="container">
                <div class="project_name">
                    <h3>{{project.name}}</h3>
                    <h4 class="date">{{date(project.beginDate)}} -> {{date(project.endDate) || 'now'}}</h4>
                </div>
                <ul class="achievements">
                    <li v-for="achievement in project.achievements">{{achievement}}</li>
                </ul>
                <hr v-if="index+1 != projects.length" >
            </div>
        </div>
    </div>
    
</template>

<script>
import {fetchProjects} from '@/service/fetchData'
import {formatDate} from '@/service/formatDate.js'

export default {
    name: 'CVProjects',
    data() {
        return {projects: []}
    },
    async mounted() {
        this.projects = await fetchProjects()
    },
    methods: {
        date(dateStr) {
            return formatDate(dateStr)
        }
    },
}
</script>

<style scoped>

hr {
    width: 100%;
}

.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
}

.project_name {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

.project_description {
    padding-left: 1em;
    padding-right: 1em;
}

.date {
    color: grey;
}

.achievements {
    text-align: start;
}

</style>