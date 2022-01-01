<template>
    <div class="block">
        <h2>Interests</h2>
        <div class="container">
            <p v-for="interest in interests" class="interest">
                {{interest.name}}
            </p>
        </div>
    </div>
    
</template>

<script>
import {fetchInterests} from '@/service/fetchData.js'

export default {
    name: 'CVInterest',
    data() {
        return {interests: []}
    },
    async mounted() {
        this.interests = await fetchInterests()
    }
}
</script>

<style scoped>

.container {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
}

.interest {
    border: solid 1px;
    border-radius: 5px;
    background: #22c0e8;
    padding: 10px;
    box-shadow: 1px 1px gray;
}

</style>