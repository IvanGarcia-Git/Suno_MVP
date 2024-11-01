import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/react'
import createServer from '@inertiajs/react/server'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { route } from '../../vendor/tightenco/ziggy'
import { RouteName } from 'ziggy-js'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createServer((page) =>
	createInertiaApp({
		page,
		render: ReactDOMServer.renderToString,
		title: (title) => `${title} - ${appName}`,
		resolve: (name) =>
			resolvePageComponent(
				`./Pages/${name}.tsx`,
				import.meta.glob('./Pages/**/*.tsx')
			),
		setup: ({ App, props }) => {
			global.route<RouteName> = (name, params, absolute) =>
				route(name, params as any, absolute, {
					// @ts-expect-error
					...page.props.ziggy,
					// @ts-expect-error
					location: new URL(page.props.ziggy.location),
				})

			return <App {...props} />
		},
	})
)


// ssr.tsx

function route(name: string, params: Record<string, any>, absolute: boolean) {
	// lógica para generar rutas o usar Ziggy
}

// Aquí tu lógica de SSR que usa la función `route`
