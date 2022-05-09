import type { App } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faPhone, faBars, faHome, faTable, faBookmark, faListAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export function fontAwesomeIcon(app: App<Element>) {
	library.add(faUserSecret, faPhone, faBars, faHome, faTable, faBookmark, faListAlt)
	app.component('font-awesome-icon', FontAwesomeIcon)
}
