import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import OglasiView from "../views/OglasiView.vue";
import ChatView from "../views/ChatView.vue";
import AboutView from "../views/AboutView.vue";
import OglasCreateView from "../views/OglasCreateView.vue";



const routes = [
  { path: "/", redirect: { name: "home" } },
  { path: "/home", name: "home", component: HomeView },
  { path: "/about", name: "about", component: AboutView },
  { path: "/prijava", name: "prijava", component: LoginView },
  { path: "/registracija", name: "registracija", component: RegisterView },
  { path: "/oglasi", name: "oglasi", component: OglasiView },
  { path: "/oglas-create", name: "oglas-create", component: OglasCreateView },
  { path: "/chat", name: "chat", component: ChatView },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
