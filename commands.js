#!/usr/bin/env node

const program= require("commander")
const {addCustomer,findCustomer,updateCustomer,deleteCustomer,listCustomers}=require("./index")
const {prompt}=require("inquirer")


program
    .version('1.0.0')
    .description('Customer Management System')

const questions = [
    {
        type:'input',
        name:'firstName',
        message:'Enter First Name'
    },
    {
        type:'input',
        name:'lastName',
        message:'Enter Last Name'
    },
    {
        type:'input',
        name:'phone',
        message:'Enter Phone Number'
    },
    {
        type:'input',
        name:'email',
        message:'Enter Email'
    }
]

// add command
program
    .command('add')
    .alias('a')
    .description('add new customer')
    .action(()=>{
        prompt(questions).then(answers => addCustomer(answers));
    });
    

// find command
program
    .command('find <name>')
    .alias('f')
    .description('find a customer')
    .action((name)=>findCustomer(name));

// update command
program
    .command('update <_id>')
    .alias('u')
    .description('update a customer')
    .action(_id=>{
        prompt(questions).then(answers => updateCustomer(_id,answers));
    });

// delete command
program
    .command('remove <_id>')
    .alias('rm')
    .description('delete a customer')
    .action(_id=>deleteCustomer(_id));

// listcustomers command
program
    .command('list ')
    .alias('ls')
    .description('list all customers')
    .action(()=>listCustomers());

program.parse();
