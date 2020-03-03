/*
Create a Grid class with a constructor which accepts arguments you would expect you would need in order to create any generic grid. √
If this argument list grows too long, make it a single "config" or "options" object with named properties representing each of the configuration options your Grid class should expect you to supply. (it didn't grow too long) √
*/

/*
Your Grid should have methods that deal with the collection of cells in the grid as a whole, whereas methods that
deal only with a particular cell should be written on the Cell class. Think of methods that would be handy to have
and of things you've done repetitively for most grids. Writing these methods on these classes can make future
projects easier, more comprehensible, and more concise, 
for example: 
swapStyle("old-class", "new-class"), 
setAsClicked(), or 
setDefaultStyles().
*/
class GenericGrid{
    constructor(options = {
        rows: 3,
        cols: 3
    })
    {
        this.options = options
    }

    printGrid(appendToThisDomElement){
        for(let rowIndex = 0; rowIndex < this.options.rows; rowIndex++){
            const rowElement = document.createElement('div')
            rowElement.dataset.rowIndex = String(Number(rowIndex) + 1)
            appendToThisDomElement.appendChild(rowElement)
            
            /*
            Your grid should instantiate new instances of Cell automatically, as a part of the construction of the grid object √
             */
            
            for(let cellIndex = 0; cellIndex < this.options.cols; cellIndex++){
                const cellElement = new GenericCell({
                    cellId : this.options.cellId,
                    cellClass : this.options.cellClass,
                    cellPositionX : rowIndex,
                    cellPositionY : cellIndex
                })
                
                rowElement.appendChild(cellElement.fillCells())
            }
        }
    }

    /**
    Create a Grid method which will accept the row and column indexes and use them to search and return the instance of cell from the grid √
    Any other methods on Grid which need Cell information should accept a Cell instance as an argument, instead of indexes or elements.
    (But... a cell instance is an element??)
    */
    cellInstance(row, col){
        const cellSet = Array.from(document.querySelectorAll('.' + this.options.cellClass))
        return cellSet.find( (x, y) => 
            x.dataset.cellPositionX === String(row) && 
            x.dataset.cellPositionY === String(col))
    }
    
    //Create a Grid method which accepts a Cell as an argument and returns an array of existing neighboring cells.
    getCol(){ return Array.from(lastClickedCell[1].children) }
    
    getRow(){
        const allCells = Array.from(document.querySelectorAll('.' + this.options.cellClass))
        let rowClicked = lastClickedCell[0].dataset.cellPositionY
        return allCells.filter(cell => cell.dataset.cellPositionY == rowClicked)
    }

    addClickEventToCells(){
        const allCells = document.querySelectorAll('.' + this.options.cellClass)
        allCells.forEach( cell => cell.addEventListener('click', clickFunction))
    }
}

function clickFunction(element){
    console.log(element.path[0])

    //This is global right now
    //looking into how I can get access to this cell otherwise.
    lastClickedCell = element.path

    return element.path[0]
}
