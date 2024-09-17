
function createColumn(contentString){
  const columnString = `<div class="col">${contentString} </div>`;
  return columnString;
  
  }
function createRow(columnsString){
  const rowString = `<div class="row">${columnsString} </div>`
  return rowString
  
}
function createContainer(rowString){
  const containerString =  `<div class = "row">${rowString}
    </div>`
  return containerString;
}