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


let serial = 0;

// Area (A) = 0.5 x b x h
document.getElementById('triangle-btn').addEventListener('click' , function(){
    serial+=1;
    const nameOfCalculation = getElementValueById('triangle');
    const base = getFieldValueById('triangle-field-b');
    const height = getFieldValueById('triangle-field-h');
    const area = .5 * base * height ;
    if(isNaN(area) || area <=0 ){
        return alert('please provide a valid number')
    }
    setTheTable(serial,nameOfCalculation,area);
    
})
// Area (A) = w x l
document.getElementById('ractangle-btn').addEventListener('click' , function(){
    serial+=1;
    const nameOfCalculation = getElementValueById('ractangle');
    const width = getFieldValueById('ractangle-width');
    const length = getFieldValueById('ractangle-length');
    const area = width * length;
    if(isNaN(area) || area <= 0){
        return alert('please provide a valid number')
    }
    setTheTable(serial,nameOfCalculation,area);
})
// Area (A) = b x h
document.getElementById('parallelogram-btn').addEventListener('click' , function(){
    serial+=1;
    const nameOfCalculation = getElementValueById('parallelogram');
    const base = parseFloat(getElementValueById('parallelogram-base'));
    const height = parseFloat(getElementValueById('parallelogram-heigth'));
    const area = base * height ;
    setTheTable(serial,nameOfCalculation,area);
})


