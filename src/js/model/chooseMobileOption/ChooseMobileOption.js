export class ChooseMobileOption {
    constructor(selectItem, selectedItem) {
        this.selectItem = selectItem
        this.selectedItem = selectedItem
    }

    selectItemClick(selectItem) {
        $(this.selectItem).on('click', function () {
            let showElem = $(this).data('category')
            $(this).hide()
            $(`${selectItem}[data-category="${showElem}"]`).css({display: 'flex'})
        })
    }

    selectedItemClick(selectItem) {
        $(this.selectedItem).on('click', function () {
            let showElem = $(this).data('category')
            $(this).hide()
            $(`${selectItem}[data-category="${showElem}"]`).show()
        })
    }
}