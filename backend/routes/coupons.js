const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Coupon = require("../models/Coupon.js");

// Yeni bir kupon oluşturma (Create)
router.post("/", async (req, res) => {
  try {
    const { code } = req.body;

    const existingCoupon = await Coupon.findOne({ code });

    if (existingCoupon) {
      return res.status(400).json({ error: "This coupon is alread exists." });
    }

    const newCoupon = new Coupon(req.body);
    await newCoupon.save();

    res.status(201).json(newCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Tüm kuponları getirme (Read - All)
router.get("/", async (req, res) => {
  try {
    const coupons = await Coupon.find();

    res.status(200).json(coupons);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Belirli bir kuponu getirme (Read - Single by Coupon ID)
router.get("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;

    const coupon = await Coupon.findById(couponId);

    if (!coupon) {
      return res.status(404).json({ error: "Coupon not found." });
    }

    res.status(200).json(coupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Belirli bir kuponu getirme (Read - Single by Coupon Code)
router.get("/code/:couponCode", async (req, res) => {
  try {
    const couponCode = req.params.couponCode;

    const coupon = await Coupon.findOne({ code: couponCode });

    if (!coupon) {
      return res.status(404).json({ error: "Coupon not found." });
    }
    const { discountPercent } = coupon;
    res.status(200).json({ discountPercent });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// coupon güncelleme (Update)
router.put("/:couponId", async (req, res) => {
    try {
      const couponId = req.params.couponId;
  
      // Validate couponId
      if (!mongoose.Types.ObjectId.isValid(couponId)) {
        return res.status(400).json({ error: "Invalid coupon ID." });
      }
  
      const updates = req.body;
  
      // Find the existing coupon
      const existingCoupon = await Coupon.findById(couponId);
  
      // If coupon not found, return a 404 status
      if (!existingCoupon) {
        return res.status(404).json({ error: "Coupon not found." });
      }
  
      // Update the coupon with new values
      const updatedCoupon = await Coupon.findByIdAndUpdate(couponId, updates, {
        new: true,
        runValidators: true, // Ensures that the updates are validated against the schema
      });
  
      // Return the updated coupon
      res.status(200).json(updatedCoupon);
    } catch (error) {
      // Log the full error stack
      console.error("Error updating coupon:", error.stack);
      res.status(500).json({ error: "Server error." });
    }
  });

 // Coupon deletion (Delete)
router.delete("/:couponId", async (req, res) => {
    try {
      const couponId = req.params.couponId;
  
      // Validate couponId
      if (!mongoose.Types.ObjectId.isValid(couponId)) {
        return res.status(400).json({ error: "Invalid coupon ID." });
      }
  
      // Find and delete the coupon
      const deletedCoupon = await Coupon.findByIdAndDelete(couponId);
  
      // If coupon not found, return a 404 status
      if (!deletedCoupon) {
        return res.status(404).json({ error: "Coupon not found." });
      }
  
      // Return the deleted coupon
      res.status(200).json(deletedCoupon);
    } catch (error) {
      // Log the full error stack
      console.error("Error deleting coupon:", error.stack);
      res.status(500).json({ error: "Server error." });
    }
  });  
module.exports = router;
