<template>
    <div class="block">
        <h2>Skills</h2>
        <div class="container">
            <p v-for="skill in skills" class="skill">
                {{skill.skill}}
            </p>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'CVSkill',
    data() {
        return {skills: []}
    },
    mounted() {
        fetch(`http://localhost:3000/api/cv/skill`, { method: 'GET' })
        .then(res => res.json())
        .then((value) => {
            this.skills = value
        })
        .catch(error => console.log(error.message));
    }
}
</script>

<style scoped>

.block {
    background-color: white;
    padding-bottom: 1em;
}

.container {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
}

.skill {
    border: solid 1px;
    border-radius: 5px;
    background: #22c0e8;
    padding: 10px;
    box-shadow: 1px 1px gray;
}

</style>