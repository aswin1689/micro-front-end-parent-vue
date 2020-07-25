import Vue from 'vue';
import VueRouter from 'vue-router';
import ReactMicroFE from '../views/ReactMicroFE.vue'
Vue.use(VueRouter);

// const {
//   VUE_CHILD_APP_HOST: vueChildHost,
//   REACT_CHILD_APP_HOST: reactChildHost
// } = process.env;

// const VueMicroFE = ({ history }) => (
//   <MicroFrontend history={history} host="http://localhost:5001" name="VueApp" />
// );

// const ReactMicroFE = ({ history }) => (
//   <MicroFrontend history={history} host="http://localhost:5002" name="ReactApp" />
// );

const routes = [
	// {
	// 	path: '/',
	// 	name: 'VueMicroFE',
  //   component: VueMicroFE,
  //   props: true
	// },
	{
		path: '/react',
		name: 'ReactMicroFE',
    component: ReactMicroFE,
    props: true
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
