export interface MenuItem {
  name: string
  path: string
  children: MenuItem[]
  meta: MetaData
}

interface MetaData {
  label: string
  icon: string
}

export interface TabMenu {
	name: string,
	path: string,
	isActive: boolean
}

