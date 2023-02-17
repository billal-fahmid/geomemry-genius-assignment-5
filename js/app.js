function getFieldValueById(id){
    const field = document.getElementById(id);
    const fieldValue = parseFloat(field.value);
    return fieldValue;
}

// Area (A) = 0.5 x b x h
document.getElementById('triangle-btn').addEventListener('click' , function(){
    const base = getFieldValueById('triangle-field-b');
    const height = getFieldValueById('triangle-field-h');
    
})