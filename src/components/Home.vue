<template>
    <div>
        <b-jumbotron>
            <template v-slot:header>{{ $t('home.title') }}</template>

            <template v-slot:lead>
                {{ $t('home.subtitle') }}
            </template>

            <hr class="my-4">

            <p>
            This is example text.
            </p>

            <b-button variant="primary" href="#">Do Something</b-button>
            <b-button variant="success" href="#">Do Something Else</b-button>
        </b-jumbotron>
    </div>
</template>