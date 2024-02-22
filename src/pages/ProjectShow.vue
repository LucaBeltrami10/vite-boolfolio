<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">{{ project.project_name }}</li>
                            <li class="list-group-item">{{ project.description }}</li>
                            <li class="list-group-item">{{ project.status = 0 ? 'in corso' : 'finito' }}</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';
export default {
    data() {
        return {
            project: {},
            id: '',
        };
    },
    components: {
        ProjectCard,
    },
    methods: {
        getProject() {
            axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`)
                .then((response) => {
                    // handle success
                    this.project = response.data.results;
                    /* console.log(response.data.resoults); */
                    console.log(this.project)
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
        this.getProject()
    },


}
</script>

<style lang="scss"></style>