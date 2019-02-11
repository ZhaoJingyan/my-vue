import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home")
    },
    {
      path: "/my/accountBalance/filesUpload",
      name: "accountBalance-filesUpload",
      component: () => import("./views/AccountFilesUploadView.vue")
    },
    {
      path: "/my/accountBalance/",
      name: "accountBalance",
      component: () => import("./views/AccountBalanceView.vue")
    }
  ]
});
