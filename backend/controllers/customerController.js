import Customer from "../models/Customer.js";

// 🔍 GET CUSTOMER BY PHONE
export const getCustomerByPhone = async (req, res) => {
  try {
    const { phone } = req.query;

    const customer = await Customer.findOne({ phone });

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ➕ CREATE CUSTOMER
export const createCustomer = async (req, res) => {
  try {
    const { name, phone } = req.body;

    // check duplicate
    const existing = await Customer.findOne({ phone });
    if (existing) {
      return res.status(400).json({ message: "Customer already exists" });
    }

    const customer = new Customer({ name, phone });
    await customer.save();

    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};