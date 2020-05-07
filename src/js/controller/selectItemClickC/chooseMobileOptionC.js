import { ChooseMobileOption } from "../../model/chooseMobileOption/ChooseMobileOption";

export let chooseM = new ChooseMobileOption('.filter-mobile-options-item', '.filters-mobile-list-item')
chooseM.selectItemClick('.filters-mobile-list-item')
chooseM.selectedItemClick('.filter-mobile-options-item')