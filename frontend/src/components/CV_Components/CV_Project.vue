<template>
    <div class="block">
        <h2>Projects</h2>
        <div>
            <div v-for="(project, index) in projects" class="container">
                <div class="project_name">
                    <h3>{{project.name}}</h3>
                    <h4 class="date">{{project.beginDate}} -> {{project.endDate}}</h4>
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

export default {
    name: 'CVProjects',
    data() {
        return {projects: []}
    },
    async mounted() {
        this.projects = await fetchProjects()
    }
}
</script>

<style scoped>

hr {
    width: 100%;
}

.block {
    background-color: white;
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
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