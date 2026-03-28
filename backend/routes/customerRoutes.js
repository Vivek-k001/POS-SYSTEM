import express from "express";
import { getCustomerByPhone, createCustomer } from "../controllers/customerController.js";

const router = express.Router();

// GET customer by phone
router.get("/", getCustomerByPhone);

// CREATE new customer
router.post("/", createCustomer);

export default router;