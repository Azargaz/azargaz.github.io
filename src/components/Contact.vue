<template>
    <div>
        <b-jumbotron>
            <template v-slot:header>{{ $t('contact.title') }}</template>

            <template v-slot:lead>
                {{ $t('contact.subtitle') }}
            </template>

            <hr class="my-4">

            <p>
                {{ $t('contact.content') }}
            </p>

            <b-button variant="primary" href="#">Do Something</b-button>
            <b-button variant="success" href="#">Do Something Else</b-button>
        </b-jumbotron>
    </div>
</template>