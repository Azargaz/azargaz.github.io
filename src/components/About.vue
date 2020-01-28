<template>
    <div>
        <b-jumbotron>
            <template v-slot:header>{{ $t('about.title') }}</template>

            <template v-slot:lead>
                {{ $t('about.subtitle') }}
            </template>

            <hr class="my-4">
        </b-jumbotron>
    </div>
</template>