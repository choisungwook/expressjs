import express from "express";
const router = express.Router();


router.get("/tweets", (req, res, next) => {
    console.info("--- tweets api is called ---");
});

export default router;
