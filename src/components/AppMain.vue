<template>
    <div class="mb-3">
        Main
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