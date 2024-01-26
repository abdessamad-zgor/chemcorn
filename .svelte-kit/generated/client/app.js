export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12')
];

export const server_loads = [3];

export const dictionary = {
		"/(app)": [8,[4]],
		"/(admin)/admin": [5,[2,3]],
		"/(admin)/admin/login": [6,[2,3]],
		"/(admin)/admin/produit": [7,[2,3]],
		"/(app)/recettes": [9,[4]],
		"/(app)/recettes/[category]": [10,[4]],
		"/(app)/shop": [11,[4]],
		"/(app)/shop/[slug]": [12,[4]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';