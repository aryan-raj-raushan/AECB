
export default {
	routes: [
		{
			method: 'POST',
			path: '/api/users-data',
			handler: 'user-data.create',
			config: {
				middlewares: [
					(ctx: any, next: () => any) => {
						return next();
					},
				],
				auth: false
			}
		},
		{
			method: 'PUT',
			path: '/api/users-data/:id',
			handler: 'user-data.update',
			config: {
				middlewares: [
					(ctx: any, next: () => any) => {
						return next();
					},
				],
				auth: false
			}
		}
	]
}