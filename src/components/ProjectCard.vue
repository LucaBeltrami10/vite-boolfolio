<template>
    <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ project.project_name }}</li>
            <li class="list-group-item">{{ project.description }}</li>
            <li class="list-group-item">{{ project.status = 0 ? 'in corso' : 'finito' }}</li>
            <li class="list-group-item">{{ project.type.type }}</li>
            <li class="list-group-item text-center">
                <router-link :to="linkRoute" class="nav-link">
                    <button type="button" class="btn btn-dark">Visualizza</button>
                </router-link>
            </li>
        </ul>
    </div>
</template> 

<script>
export default {
    props: [
        'project',
        'linkRoute',
    ]

}
</script>

<style lang="scss"></style>