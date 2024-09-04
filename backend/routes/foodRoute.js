import express from "express";
import {
   addFood,
   listFood,
   removeFood,
} from "../controllers/foodController.js";
import multer from "multer";
import path from "path";

const foodRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      // Use /tmp directory on Vercel
      cb(null, '/tmp/');
   },
   filename: (req, file, cb) => {
      // Ensure unique filenames
      cb(null, `${Date.now()}-${file.originalname}`);
   },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;



// import express from "express";
// import {
//    addFood,
//    listFood,
//    removeFood,
// } from "../controllers/foodController.js";
// import multer from "multer";

// const foodRouter = express.Router();

// //Image Storage Engine

// const storage = multer.diskStorage({
//    destination: "uploads",
//    filename: (req, file, cb) => {
//       return cb(null, `${Date.now()}${file.originalname}`);
//    },
// });

// const upload = multer({ storage: storage });

// foodRouter.post("/add", upload.single("image"), addFood);
// foodRouter.get("/list", listFood);
// foodRouter.post("/remove", removeFood);

// export default foodRouter;
