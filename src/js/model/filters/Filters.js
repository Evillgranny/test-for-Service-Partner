export class Filters {
    constructor(filter) {
        this.filter = filter
    }

    filterClick () {
        $(this.filter).on('click', function () {
            $(this).hasClass('selected') ? $(this).removeClass('selected') : $(this).addClass('selected')
        })
    }
}