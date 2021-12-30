<template>
    <div class="addresses">
        <div v-for="contact in contacts" class="contact">
            <strong class="contact-name">{{capitalize(contact)}}</strong>
            <p class="contact-content">{{givenAddresses[contact]}}</p>
        </div>
        <div v-for="media in medias" class="contact">
            <div class="contact-name">
                <img :src="require(`@/assets/${media}_black.svg`)" :alt="media" class="pic" />
            </div>
            <div class="contact-content">
                <a :href="givenAddresses[media].link" >{{givenAddresses[media].alias}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactAddresses',
    props: ['givenAddresses'],
    data() {
        return {medias: ['github', 'linkedin', 'facebook', 'instagram'], contacts: ['phone', 'mail']}
    },
    methods: {
        capitalize(word) {
            return word[0].toUpperCase() + word.substring(1)
        }
    },
}
</script>

<style scoped>
p {
    margin: 0;
}

img {
    width: 30px;
    height: 30px;
}

.addresses {
    display: flex;
    flex-direction: column;
}

.contact {
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
}
.contact-name {
    width: 45%
}

.contact-content {
    width: 55%;
}

.media {
    display: flex;
    align-items: center;
    margin-left: 20%;
    margin-right: 20%;
}

.pic {
    width: 50%;
}

.link {
    width: 50%;
    justify-content: start;
}

</style>