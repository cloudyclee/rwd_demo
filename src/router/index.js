import { createRouter, createWebHistory } from 'vue-router';
import Lobby from '../views/Lobby.vue';
import Games from '../views/Games.vue';
import Rankings from '../views/Rankings.vue';
import Records from '../views/Records.vue';
import User from '../views/User.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		redirect: '/lobby'
	},
	{
		path: '/lobby',
		name: 'Lobby',
		component: Lobby,
		children: [
			{ path: '', redirect: '/lobby/ballGame' },
			{ path: 'today', name: 'Today', component: () => import( '../views/Lobby/Today.vue' ) },
			{ path: 'morningGame', name: 'MorningGame', component: () => import( '../views/Lobby/MorningGame.vue' ) },
			{ path: 'ballGame', name: 'BallGame', component: () => import( '../views/Lobby/BallGame.vue' ) },
			{ path: 'mutiGames', name: 'MutiGames', component: () => import( '../views/Lobby/MutiGames.vue' ) }
		]
	},
	{
		path: '/games',
		name: 'Games',
		component: Games
	},
	{
		path: '/rankings',
		name: 'Rankings',
		component: Rankings
	},
	{
		path: '/records',
		name: 'Records',
		component: Records
	},
	{
		path: '/user',
		name: 'User',
		component: User
	}
];

const router = createRouter( {
	history: createWebHistory( process.env.BASE_URL ),
	routes
} );

export default router;
