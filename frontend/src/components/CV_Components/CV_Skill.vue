<template>
    <div class="block">
        <h2>Skills</h2>
        <div class="container">
            <p v-for="skill in skills" class="skill">
                <strong>{{skill.name}}:</strong> {{skill.examples.join(', ')}}
            </p>
        </div>
    </div>
    
</template>

<script>
import {fetchSkills} from '@/service/fetchData'

export default {
    name: 'CVSkill',
    data() {
        return {skills: []}
    },
    async mounted() {
        this.skills = await fetchSkills()
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
    flex-direction: column;
    width: 100%;
    justify-content: center;
    justify-items: center;
    align-items: center;
}

.skill {
    width: 80%;
    border: solid 1px;
    border-radius: 5px;
    background: #22c0e8;
    padding: 10px;
    box-shadow: 1px 1px gray;
}

</style>