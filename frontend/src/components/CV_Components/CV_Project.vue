<template>
    <div class="block">
        <h2>Projects</h2>
        <div>
            <div v-for="project in projects">
                <div class="container">
                    <div class="project_name">
                        <h3>{{project.name}}</h3>
                        <h4 class="date">{{project.beginDate}} -> {{project.endDate}}</h4>
                    </div>
                    <div class="project_description">
                        <p>{{project.description}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'CVProjects',
    data() {
        return {projects: []}
    },
    mounted() {
        fetch(`http://localhost:3000/api/cv/project`, { method: 'GET' })
        .then(res => res.json())
        .then((value) => {
            this.projects = value
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


</style>