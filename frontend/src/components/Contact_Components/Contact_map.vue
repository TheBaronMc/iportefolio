<template>
    <div class="column">
        <p>I am also available in Toulouse. Feel free to contact me via my links and we will book an appointment.</p>
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92457.00527534934!2d1.3628023177137931!3d43.60068187071803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x406f69c2f411030!2sToulouse!5e0!3m2!1sfr!2sfr!4v1640714351584!5m2!1sfr!2sfr" style="border:0;width:100%;height:15em;" width="100%" height="15em" allowfullscreen="" loading="lazy"></iframe>
    </div>
</template>

<script>
export default {
    name: 'ContactMap'
}
</script>

<style scoped>
p {
    margin-top: 0;
}

.map {
    width: 5em;
    height: 15em;
}

.column {
    display: flex;
    flex-direction: column;
}
</style>