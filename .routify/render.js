
        import * as module from '../client/App.svelte'
        import { renderModule } from '@roxi/routify/tools'
        import { map } from './route-map.js'

        export const render = url => renderModule(module, { url, routesMap: map })