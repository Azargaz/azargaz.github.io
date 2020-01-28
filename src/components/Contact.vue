<template>
    <div>
        <b-jumbotron>
            <template v-slot:header>{{ $t('contact.title') }}</template>

            <template v-slot:lead>
                {{ $t('contact.subtitle') }}
            </template>

            <hr class="my-4">
            
            <b-list-group>
                <b-list-group-item 
                    class="mx-auto my-2" 
                    @mouseover="email = ': ' + $t('contact.email')" 
                    @mouseleave="email = ''" :href='"mailto:" + $t("contact.email")'
                >
                    E-mail{{email}}
                </b-list-group-item>
                <b-list-group-item 
                    class="mx-auto my-2"
                    :href="$t('contact.github')"
                    target="blank"
                >
                    GitHub
                </b-list-group-item>
                <b-list-group-item 
                    class="mx-auto my-2"
                    :href="$t('contact.linkedin')"
                    target="blank"
                >
                    LinkedIn
                </b-list-group-item>
            </b-list-group>
        </b-jumbotron>
    </div>
</template>
<script>

export default {
    name: "contact",
    data: () => ({
        email: ""
    })
}
</script>
<style scoped>
.list-group-item {
    color: #d1d1d1;
    outline: none;
    width: 300px;
    border: 1px solid #02a068;
    background-color: rgba(0, 0, 0, 0.1);
}

.list-group-item:hover {
    color: #01ffa5;
    text-shadow: 1px 1px 1px #1d1f2b;
    background-color: rgba(0, 0, 0, 0.5);

    transition: background-color 0.5s;
}

</style>