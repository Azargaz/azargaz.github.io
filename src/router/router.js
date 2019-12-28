import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home.vue"
import About from "@/components/About.vue"
import Skills from "@/components/Skills.vue"
import Projects from "@/components/Projects.vue"
import Contact from "@/components/Contact.vue"

import i18n from '../i18n'

Vue.use(Router)

const routes = [
	{
		path: '/',
		redirect: `/${i18n.locale}`
	},
	{
		path: '/:lang',
		component: {
			render(c) { return c('router-view') }
		},
		children: [
			{
				path: '/',
				name: 'home',
				component: Home
			},
			{ 
				path: 'about',
				name: 'about', 
				component: About 
			},
			{ 
				path: 'skills',
				name: 'skills', 
				component: Skills 
			},
			{	
				path: 'projects',
				name: 'projects', 
				component: Projects 
			},
			{ 
				path: 'contact',
				name: 'contact', 
				component: Contact 
			}
		]
	}
]

export default new Router({
	mode: 'history',
	routes
})