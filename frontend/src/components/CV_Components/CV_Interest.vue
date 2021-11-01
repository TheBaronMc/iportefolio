<template>
    <div class="block">
        <h2>Interests</h2>
        <p v-for="interest in interests">
            {{interest.name}}
        </p>
    </div>
    
</template>

<script>
export default {
    name: 'CVInterest',
    data() {
        return {interests: []}
    },
    mounted() {
        fetch(`http://localhost:3000/api/cv/interest`, { method: 'GET' })
        .then(res => res.json())
        .then((value) => {
            this.interests = value
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