#! /usr/bin/env node 


import inquirer from "inquirer";
import chalk from "chalk"
console.log(chalk.bgRedBright.blue("Welcom to CLI Table Generator!"));
let myTable = true;
//code in loop
while (myTable) {
    let myInput= await inquirer.prompt([{
        name:"num",
        type:"number",
        message:"Enter your number"
    }])
    let myNumber=myInput.num;
    console.log(myNumber);
    if(myNumber){
        console.log(`Here the table of num: ${myNumber}\n`);
        for (let i = 1; i <= 10; i++) {
           console.log(`${myNumber} x ${i} = ${myNumber*i}`); 
        }
        
    }else{
        console.log(`Enter input in numerical form.`);
        
    }
    // if user want again table 
    let againTable= await inquirer.prompt([{
        type:"confirm",
        name:"askuser",
        message:"Do you want to print another table ?",
        default:false
    }])
if (againTable.askuser===false){
    myTable=false

    console.log(chalk.bgRedBright.blue("Thank You for using CLI Table Generator."));
    
}
}
