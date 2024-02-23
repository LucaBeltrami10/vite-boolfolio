import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectsList.vue';
import TechnologiesList from './pages/TechnologiesList.vue';
import ProjectShow from './pages/ProjectShow.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList,
        },
        {
            path: '/technologies',
            name: 'technologies',
            component: TechnologiesList,
        },
        {
            path: '/projects/:id',
            name: 'project-show',
            component: ProjectShow,
        },
        {
            path: '/contat-us',
            name: 'contact-us',
            component: ProjectShow,
        },
    ],
});

export { router };