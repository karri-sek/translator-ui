import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Login from "@/components/login";
import Register from "@/components/Register";
import Profile from '@/components/profile';
import TranslatorResults from '@/components/TranslatorResults';
import Logout from "@/components/logout";
import Messages from "@/components/Messages";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/results",
    name: "results",
    component: TranslatorResults
  },
  {
    path: "/messages",
    name: "messages",
    component: Messages
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
