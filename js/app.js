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
    const areaConvert = area.toFixed(2);
    const areaFloat = parseFloat(areaConvert)
    if(isNaN(areaFloat) || areaFloat <=0 ){
        return alert('please provide a valid number')
    }
    setTheTable(serial,nameOfCalculation,areaFloat);
    console.log(areaFloat,typeof areaFloat);
})
// Area (A) = w x l
document.getElementById('ractangle-btn').addEventListener('click' , function(){
    serial+=1;
    const nameOfCalculation = getElementValueById('ractangle');
    const width = getFieldValueById('ractangle-width');
    const length = getFieldValueById('ractangle-length');
    const area = width * length;
    const areaConvert = area.toFixed(2);
    if(isNaN(areaConvert) || areaConvert <= 0){
        return alert('please provide a valid number')
    }
    setTheTable(serial,nameOfCalculation,areaConvert);

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
// Area (A) = 0.5 x d1 x d2
document.getElementById('rhombus-btn').addEventListener('click' , function(){
    serial+=1;
    const nameOfCalculation = getElementValueById('rhombus');
    const d1 = parseFloat(getElementValueById('rhombus-d1'));
    const d2 = parseFloat(getElementValueById('rhombus-d2'));
    const area = 0.5 * d1 * d2 ;
    setTheTable(serial,nameOfCalculation,area);
})
// Area (A) = 0.5 x p x b
document.getElementById('pentagon-btn').addEventListener('click' , function(){
    serial+=1;
    const nameOfCalculation = getElementValueById('pentagon');
    const p = parseFloat(getElementValueById('pentagon-p'));
    const b = parseFloat(getElementValueById('pentagon-b'));
    const area = 0.5 * p * b ;
    setTheTable(serial,nameOfCalculation,area);
})
