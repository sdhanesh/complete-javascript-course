'use strict';

function displayName(){
    console.log("hello Dhanesh");
}

displayName();
displayName();
displayName();


/// function declaration
function greetings(personName){
    const d = `hey welcome ${personName}`;
    return d;
}

const demo=greetings("dhanu");
console.log(demo);


// function expression

const ageCal=function (yearOfBirth){
  return 2023-yearOfBirth;
}

console.log("Age = "+ageCal(1999));

//arrow functions 
const retirementAge=(yearOfBirth,personName)=>{
    const age=2023-yearOfBirth;
    const retirement=65-age;
    return `${personName} is having ${retirement} left for service`;
}

console.log(retirementAge(1999,'dhanesh'));


/////Arrays

const ages=new Array(1,2,3,4,5);
console.log(ages); 

const namesList=new Array("kuki","dhanesh","ishu");
console.log(namesList);

function calcTip(bill){
    if(bill>=50 && bill<=300){
       return  bill*0.15;
    }
    else{
        return bill*0.2;
    }
}

const bills=new Array(125,555,44,100,1000);

const tips=new Array()

    const newArr=new Array();
const sizeA=bills.length;
for(let i=0;i<sizeA;i++){

    tips.push(calcTip(bills[i]));
    newArr.push(bills[i]+tips[i]);
}
console.log(newArr);

///////object

const dhanesh={
    fName:'dhanesh',
    lName:'surisetty',
    year:1999,
    location:'vizag',
    technology:'java',

    calAge:function(){
       this.age=2023-this.year;
       return this.age;
    }
}

console.log(dhanesh);
console.log(dhanesh.age);

const valueSelect=prompt('select fName,Lname,technology');
console.log(dhanesh[valueSelect]);