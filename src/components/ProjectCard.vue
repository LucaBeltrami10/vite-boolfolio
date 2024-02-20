<template>
    <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ project.project_name }}</li>
            <li class="list-group-item">{{ project.description }}</li>
            <li class="list-group-item">{{ project.status = 0 ? 'in corso' : 'finito' }}</li>
        </ul>
    </div>
</template> 

<script>
export default {
    props: [
        'project',
    ]

}
</script>

<style lang="scss"></style>