import foodModel from "../models/foodModel.js";
import fs from "fs";
import path from "path";

// Add food item
const addFood = async (req, res) => {
    try {
        const imageFilename = req.file ? req.file.filename : null;

        if (!imageFilename) {
            return res.status(400).json({ success: false, message: "Image upload failed" });
        }

        // Create a new food item
        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: imageFilename,
        });

        await food.save();

        // Clean up the temporary file
        fs.unlink(path.join('/tmp', imageFilename), (err) => {
            if (err) console.error('Failed to delete temp file:', err);
        });

        res.json({ success: true, message: "Food Added", data: food });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

// All food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

// Remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);

        if (!food) {
            return res.status(404).json({ success: false, message: "Food not found" });
        }

        // Delete the image file from /tmp
        const imagePath = path.join('/tmp', food.image);
        fs.unlink(imagePath, (err) => {
            if (err) console.error('Failed to delete image:', err);
        });

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food Removed" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export { addFood, listFood, removeFood };




//not optimised for vercel
// import { log } from "console";
// import foodModel from "../models/foodModel.js";
// import fs from "fs";

// //add food item

// const addFood = async (req, res) => {
//    let image_filename = `${req.file.filename}`;

//    const food = new foodModel({
//       name: req.body.name,
//       description: req.body.description,
//       price: req.body.price,
//       category: req.body.category,
//       image: image_filename,
//    });

//    try {
//       await food.save();
//       res.json({ success: true, message: "Food Added" });
//    } catch (error) {
//       console.log(error);
//       res.json({ success: false, message: "error" });
//    }
// };

// // all food list
// const listFood = async (req, res) => {
//    try {
//       const foods = await foodModel.find({});
//       res.json({ success: true, data: foods });
//    } catch (error) {
//       console.log(error);
//       res.json({ success: false, message: "Error" });
//    }
// };

// // remove food item
// const removeFood = async (req, res) => {
//    try {
//       const food = await foodModel.findById(req.body.id);
//       fs.unlink(`uploads/${food.image}`, () => {});

//       await foodModel.findByIdAndDelete(req.body.id);
//       res.json({ success: true, message: "Food Removed" });
//    } catch (error) {
//       console.log(error);
//       res.json({ success: false, message: "Error" });
//    }
// };

// export { addFood, listFood, removeFood };
