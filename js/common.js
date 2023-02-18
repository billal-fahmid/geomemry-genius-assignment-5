// get the input field value
function getFieldValueById(id){
    const field = document.getElementById(id);
    const fieldValue = parseFloat(field.value);
    return fieldValue;
}

// get the calculation name in the element inner text
function getElementValueById(id){
    const element = document.getElementById(id);
    const elementValue =element.innerText;
    return elementValue ;
}
// after calculation set the data a table
function setTheTable(serial,name,result){
    const tableBody = document.getElementById('table-body');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${name}</td>
        <td>${result}<span>cm²</span></td>
        <td><button class="text-sm rounded-md  px-1 bg-sky-600 hover:bg-sky-500 text-white ">Convert to m²</button>
        </td>
    `
    tableBody.appendChild(tr);
}
function setRandomBackgoundColor(id){
    const cards = document.getElementById(id);
    cards.style.backgroundColor ='#'+Math.floor(Math.random()*16777215).toString(16);
}