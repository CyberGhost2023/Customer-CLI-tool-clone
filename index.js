const mongoose = require("mongoose");
const Customer=require("./models/customer")
const {DBHOST} = require("./config/config")

// connect to database
mongoose.connect(DBHOST,{
    useNewUrlParser:true,
    useUnifiedTopology:true
        }).catch(err=>{    
            console.log(err);
        });


// Add Customer
const addCustomer = (customer)=>{
    Customer.create(customer).then(()=>{
        console.info("customer added");
        mongoose.disconnect();
    })
}

// Find Customer
const findCustomer = (customerName)=>{
    const search= new RegExp(customerName,'i');
    Customer.find({$or:[{firstName:search},{lastName:search}]})
        .then(customer=>{
        console.info(customer);
        console.info(`${customer.length} matches`);
        mongoose.disconnect();
    })
} 

// Update Customer
const updateCustomer =(_id,customer)=>{
    Customer.findOneAndUpdate({_id},customer)
        .then(()=>{
            console.info('customer updated');
            mongoose.disconnect();
        })
}

const deleteCustomer =(_id)=>{
    Customer.findOneAndDelete({_id})
        .then(()=>{
            console.info('customer deleted');
            mongoose.disconnect();
        })
}

const listCustomers =()=>{
    Customer.find()
        .then(customers=>{console.info(customers);
            console.info(`total customers - ${customers.length} `)
        mongoose.disconnect();
    })
}
// export all methods
module.exports={
    addCustomer,
    findCustomer,
    updateCustomer,
    deleteCustomer,
    listCustomers
}