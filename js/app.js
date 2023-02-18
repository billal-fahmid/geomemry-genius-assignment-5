
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
    const areaFloat = parseFloat(areaConvert);
    if(isNaN(areaFloat) || areaFloat <= 0){
        return alert('please provide a valid number')
    }
    setTheTable(serial,nameOfCalculation,areaFloat);

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
// Area (A) = πab
document.getElementById('ellipse-btn').addEventListener('click' , function(){
    serial+=1;
    const nameOfCalculation = getElementValueById('ellipse');
    const a = parseFloat(getElementValueById('ellipse-a'));
    const b = parseFloat(getElementValueById('ellipse-b'));
    const area = Math.PI * a * b ;
    const areaConvert = area.toFixed(2);
    const areaFloat = parseFloat(areaConvert);
    setTheTable(serial,nameOfCalculation,areaFloat);
})
const cards= document.getElementsByClassName('card');
for(let i=0 ; i< cards.length ; i++){
    // cards[i].style.hover:backgroundColor ='#'+Math.floor(Math.random()*16777215).toString(16);
    document.getElementsByClassName
}
document.getElementById('card-1').addEventListener('mouseenter', function(){
    setRandomBackgoundColor('card-1');
})
document.getElementById('card-2').addEventListener('mouseenter',function(){
    setRandomBackgoundColor('card-2');
})
document.getElementById('card-3').addEventListener('mouseenter',function(){
    setRandomBackgoundColor('card-3');
})
document.getElementById('card-4').addEventListener('mouseenter',function(){
    setRandomBackgoundColor('card-4');
})
document.getElementById('card-5').addEventListener('mouseenter',function(){
    setRandomBackgoundColor('card-5');
})
document.getElementById('card-6').addEventListener('mouseenter',function(){
    setRandomBackgoundColor('card-6');
})