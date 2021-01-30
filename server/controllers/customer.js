const {Customer} = require('../models');

module.exports.createCustomer = async (req,res) => {
    //verify fields
    const {name,email,phone,address,age} = req.body;
    if(!name || !email || !phone || !address || !age){
        return res.status(401).send({message: "Missing required info!"});
    }

    try {
        const newCustomer = await new Customer(req.body);
        await newCustomer.save();
        return res.send(newCustomer);
    } catch (err) {
        return res.status(400).send({message: `Error: ${err.message}`});
    }
};
module.exports.updateCustomer = async (req,res) => {
    const {customerId} = req.params;
    const existingCustomer = await Customer.findById(customerId);
    if(!existingCustomer){
        return res.status(401).send({message: "Customer not found!"});
    }
    try {
        const updated = await existingCustomer.updateOne(req.body).exec();
        return res.status(200).send({existingCustomer});
            
    } catch (error) {
        return res.status(500).send({message: `Error: ${error.message}`});        
    }
 
};
module.exports.deleteCustomer = async (req,res) => {
    const {customerId} = req.params;
    const existingCustomer = await Customer.findById(customerId);
    if(!existingCustomer){
        return res.status(401).send({message: "Customer not found!"});
    }
    try {
        await existingCustomer.delete();
        return res.status(200).send({message: "Customer removed!"})
            
    } catch (error) {
        return res.status(500).send({message: `Error: ${error.message}`});        
    }

};
module.exports.fetchCustomer = async (req,res) => {
    const {customerId} = req.params;
    const existingCustomer = await Customer.findById(customerId);
    if(!existingCustomer){
        return res.status(401).send({message: "Customer not found!"});
    }
    return res.send(existingCustomer);
};
module.exports.listCustomers = async (req,res) => {
    try {
        const customers = await Customer.find().exec();
        return res.send(customers);
        } catch (err) {
        res.status(500).send({message: `Error: ${err.message}`});
    }
};
module.exports.searchCustomers = (req,res) => {};
