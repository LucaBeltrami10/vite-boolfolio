<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-3" v-for="project in projects">
                    <ProjectCard :project="project" />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {

    data() {
        return {
            projects: [],
        };
    },
    components: {
        ProjectCard,
    },
    methods: {
        getProjects() {
            axios.get('http://127.0.0.1:8000/api/projects')
                .then((response) => {
                    // handle success
                    this.projects = response.data.results;
                    console.log(response.data.results);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }

    },
    mounted() {
        this.getProjects()
    },
}
</script>

<style lang="scss" scoped></style>