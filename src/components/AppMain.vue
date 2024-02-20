<template>
    <div class="mb-3">
        <ul>
            <li v-for="project in projects">
                <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{{ project.project_name }}</li>
                        <li class="list-group-item">{{ project.description }}</li>
                        <li class="list-group-item">{{ project.status = 0 ? 'in corso' : 'finito' }}</li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            projects: [],
        };
    },
    methods: {
        getProjects() {
            axios.get('http://127.0.0.1:8000/api/projects')
                .then((response) => {
                    // handle success
                    this.projects = response.data;
                    console.log(response.data);
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