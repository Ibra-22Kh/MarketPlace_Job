import express from "express";
import {deleteUser} from "../controllers/user.controller.js"

const router = express.Router();

router.delete("/:id",deleteUser);
router.post("/login",);

export default router;