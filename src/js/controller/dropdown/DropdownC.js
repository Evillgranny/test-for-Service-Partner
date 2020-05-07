import { Dropdown } from "../../model/dropdown/Dropdown"

export let avatarDD = new Dropdown('.header-avatar', '.header-user-info')
export let whopperDD = new Dropdown('.whopper', '.header-nav')
export let filtersDD = new Dropdown('.filter-btn', '.filter-categories')
export let selectDD = new Dropdown('.filter-mobile-select', '.filter-mobile-options')

if (window.innerWidth > 1024) {
    avatarDD.dropdownClick()
    avatarDD.outClick()
    avatarDD.keyDownEsc()

    filtersDD.dropdownClick()
    filtersDD.outClick()
    filtersDD.keyDownEsc()
}

if (window.innerWidth < 1025) {
    whopperDD.dropdownClick()
    whopperDD.outClick()
    whopperDD.keyDownEsc()

    selectDD.dropdownClick()
    selectDD.outClick()
    selectDD.keyDownEsc()
}




