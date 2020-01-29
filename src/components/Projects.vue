<template>
    <div>
        <b-jumbotron>
            <template v-slot:header>{{ $t('projects.title') }}</template>

            <template v-slot:lead>
                {{ $t('projects.subtitle') }}
            </template>

            <hr class="my-4">

            <b-spinner v-if='loading' label="Spinning"></b-spinner>
            <div v-else>
                <b-table :key='locale' :fields="fields" :items="repos" class="mx-auto" :sort-by.sync="sortBy" stacked="md" borderless dark responsive="lg">
                    <template v-slot:cell(repository)="row">
                        <a class="link" :href="row.value.svn_url" target="blank">{{ row.value.name }}</a>
                    </template>
                </b-table>
            </div>
        </b-jumbotron>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            loading: false,
            repos: [],
            sortBy: 'repository'
        }
    },
    computed: {
        locale: function() {
            return this.$i18n.locale;
        },
        fields: function() {
            return [
                { key: "repository", label: this.$t('projects.repository'), sortable: true },
                { key: "description", label: this.$t('projects.desc') },
                { key: "language", label: this.$t('projects.lang'), sortable: true },
                { key: "size", label: this.$t('projects.size'), sortable: true },
                { key: "created_at", label: this.$t('projects.created_at'), sortable: true },
                { key: "updated_at", label: this.$t('projects.updated_at'), sortable: true }
            ]
        }
    },
    methods: {
        getAllRepos() {
            this.loading = true;
            fetch("https://api.github.com/users/azargaz/repos")
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    json = json.map(repo => {
                        const { name, description, size, language, svn_url, created_at, updated_at } = repo;
                        const repository = { name, svn_url };
                        return { 
                            repository, 
                            description, 
                            size, 
                            language,
                            created_at: new Date(created_at).toLocaleString(this.locale),
                            updated_at: new Date(updated_at).toLocaleString(this.locale)
                        };
                    })
                    this.repos = json;
                    this.loading = false;
                });
        }
    },
    mounted() {
        this.getAllRepos();
    },
    watch: {
        locale () {
            this.getAllRepos();
        }
    }
}
</script>
<style>
.table-dark {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    width: auto;
}

.link {
    color: inherit;
    text-shadow: 1px 1px 1px #1d1f2b;
    text-decoration: none;
}
.link:hover {
    color: inherit
}

.table-dark th {
    background-color: rgba(0, 0, 0, 0.4);
}

.table-dark tr:hover {
    color: #01ffa5 !important;
    text-shadow: 1px 1px 1px #1d1f2b;
    background-color: rgba(0, 0, 0, 0.25);
}
</style>