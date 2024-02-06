import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: () => import('../components/Landing.vue'),
	},
	{
		path: '/inicio',
		component: () => import('../components/Inicio.vue'),
		children: [
			{
				path: '/index',
				name: 'index',
				component: () => import('../components/Index.vue'),
			},
			{
				path: '/formulario',
				name: 'formulario',
				component: () => import('../components/Form.vue'),
			},
			{
				path: '/tabla',
				name: 'tabla',
				component: () => import('../components/Tabla.vue'),
			},
		],
	},
];

const router = new VueRouter({ routes });
export default router;
