import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../components/DashboardView.vue'
import SignupView from '../components/SignupView.vue'
import LoginView from '../components/LoginView.vue'
import ProfileView from '../components/ProfileView.vue'
import CalendarView from '../components/CalendarView.vue'
import FilesView from '../components/FilesView.vue'
import SettingsView from '../components/SettingsView.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardView
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignupView
    },
    {
        path: '/',
        name: 'login',
        component: LoginView
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView
    },
    {
        path: '/calendar',
        name: 'calendar',
        component: CalendarView
    },
    {
        path: '/files',
        name: 'files',
        component: FilesView
    },
    {
        path: '/settings',
        name: 'settings',
        component: SettingsView
    }
]
  
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router