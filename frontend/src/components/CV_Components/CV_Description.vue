<template>
    <div class="block">
        <h1 class="name">Charly Ginevra <br>
        Apprentice as software developer
    </h1>
    <p>{{ description }}</p>
    </div>
    
</template>

<script>
export default {
    name: 'CVDescription',
    data() {
        return {description: 'no description'}
    },
    mounted() {
        fetch(`http://localhost:3000/api/cv/description`, { method: 'GET' })
        .then(res => res.json())
        .then((value) => {
            console.log(value);
            (value.length == 0) ? this.description = "no description" : console.log('bidule'); this.description = value[0].content
        })
        .catch(error => console.log(error.message));
    }
}
</script>

<style scoped>

.block {
    background-color: white;
    width: 100%;
    padding: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
}

</style>