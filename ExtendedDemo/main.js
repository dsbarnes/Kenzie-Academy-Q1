const main = document.querySelector('main')

const board = new GenericGrid({
    rows : 5,
    cols : 9,
    cellClass : 'cell',
})
board.printGrid(main)
board.addClickEventToCells()

