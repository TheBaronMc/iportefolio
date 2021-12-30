<template>
    <div class="block">
        <h1>Contact</h1>
        <div class="content">
            <ContactAddresses :given-addresses="addresses" class="item"></ContactAddresses>
            <div class="vertical-line"></div>
            <ContactMap class="item"></ContactMap>
        </div>
    </div>
    
</template>

<script>
import {fecthContact} from '@/service/fetchData'
import ContactAddresses from '@/components/Contact_Components/Contact_addresses.vue'
import ContactMap from '@/components/Contact_Components/Contact_map.vue'

export default {
    name: 'Contact',
    components: {
        ContactAddresses,
        ContactMap
    },
    data() {
        return { addresses: {phone: '', mail: '', facebook: '', instagram: '', github: '', linkedin: ''}}
    },
    async mounted() {
       let res = await fecthContact()
       res = res[0]
       this.addresses = {phone: res.phone, mail: res.mail, facebook: res.facebook, instagram: res.instagram, github: res.github, linkedin: res.linkedin}
    }
}
</script>

<style scoped>

.block {
    background-color: white;
    padding: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
}

.content {
    display: flex;
    align-items: center;
}

.item {
    flex: 10 1 0px;
    width: 100%;
    height: 100%;
}

.vertical-line {
    border: solid 1px #2c3e50;
    height: 12em;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 2em;
    margin-right: 2em;
}

.contact {
    text-align: start;
}

</style>