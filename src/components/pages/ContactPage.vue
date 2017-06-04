<template>
    <div id="contact-page">
        <contact-info></contact-info>
        <contact-form></contact-form>
    </div>
</template>

<script>
    import ContactInfo from './../contact/ContactInfo.vue';
    import ContactForm from './../contact/ContactForm.vue';

    export default {
        components: {
            ContactInfo,
            ContactForm
        },
        created: function () {

        }
    }
</script>