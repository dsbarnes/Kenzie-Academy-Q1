/*
 * Create a Cell class with a constructor which similarly accepts any argument you would need to create any generic grid cell.
 */
class GenericCell{
    
    constructor(options = {}){
        this.options = options
    }

    fillCells(){
        this.element = document.createElement('div')
        // console.log(arguments)
        this.element.id = this.options.cellId
        this.element.classList.add(this.options.cellClass)
        this.element.dataset.cellPositionX = this.options.cellPositionX
        this.element.dataset.cellPositionY = this.options.cellPositionY
        return this.element
    }
}
