<template>
    <div>
        <b-jumbotron>
            <template v-slot:header>{{ $t('home.title') }}</template>

            <template v-slot:lead>
                {{ $t('home.subtitle') }}
            </template>

            <hr class="my-4">
        </b-jumbotron>
    </div>
</template>