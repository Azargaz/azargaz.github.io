<template>
    <div>
        <b-jumbotron>
            <template v-slot:header>{{ $t('skills.title') }}</template>

            <template v-slot:lead>
                {{ $t('skills.subtitle') }}
            </template>

            <hr class="my-4">

            <p>
                <span class="icons">
                {{ $t('skills.content[0]') }}
                <br>
                
                <img src="../assets/icons/html5.svg" width="64" height="64" alt="HTML5" title="HTML5">
                <img src="../assets/icons/css-5.svg" width="64" height="64" alt="CSS3" title="CSS3">
                <img src="../assets/icons/javascript.svg" width="64" height="64" alt="JS" title="JS">
                <br>

                <img src="../assets/icons/react-1.svg" width="64" height="64" alt="React" title="React">
                <img src="../assets/icons/redux.svg" width="64" height="64" alt="Redux" title="Redux">


                <img src="../assets/icons/material-ui.svg" width="64" height="64" alt="Material-UI" title="Material-UI">
                <img src="../assets/icons/bootstrap-4.svg" width="64" height="64" alt="Bootstrap" title="Bootstrap">
                <img src="../assets/icons/vue-js-1.svg" width="64" height="64" alt="Vue.js" title="Vue.js">

                <br>
                <br>
                {{ $t('skills.content[1]') }}
                <br>

                <img src="../assets/icons/nodejs-icon.svg" width="64" height="64" alt="NodeJS" title="NodeJS">
                <img src="../assets/icons/express-109.svg" width="64" height="64" alt="Express" title="Express" style="background-color: white">
                <img src="../assets/icons/postgresql.svg" width="64" height="64" alt="PostgreSQL" title="PostgreSQL">

                <br>
                <br>
                {{ $t('skills.content[2]') }}
                <br>

                <img src="../assets/icons/firebase-2.svg" width="64" height="64" alt="Firebase" title="Firebase">
                <img src="../assets/icons/heroku-1.svg" width="64" height="64" alt="Heroku" title="Heroku" style="background-color: white">
                <img src="../assets/icons/github-icon-1.svg" width="64" height="64" alt="GitHub" title="GitHub" style="background-color: white">

                <br>
                <br>
                {{ $t('skills.content[3]') }}
                <br>

                <img src="../assets/icons/visual-studio-code.svg" width="64" height="64" alt="Visual Studio Code" title="Visual Studio Code">
                <img src="../assets/icons/postman.svg" width="64" height="64" alt="Postman" title="Postman">

                </span>
            </p>
        </b-jumbotron>
    </div>
</template>

<style scoped>
.display-3 {
    font-size: 4rem;
}

.icons img {
    border-radius: 10px;
    padding: 2px;
    margin: 5px;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>