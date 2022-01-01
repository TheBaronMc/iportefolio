<template>
    <div class="container">
        <Code404></Code404>
    </div>
</template>

<script>
import Code404 from '@/components/Code404.vue'

export default {
    name: 'NotFound',
    components: {
        Code404
    }
}
</script>

<style scoped>

.container {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>