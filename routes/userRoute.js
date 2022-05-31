import express from "express";
import { getUsers, createUser, getUserId, updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUserId);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
