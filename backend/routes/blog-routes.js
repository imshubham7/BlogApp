import express from 'express';
import { getAllBlogs } from '../controllers/blog-controller.js';
import { addBlog, updateBlog, getById, deleteBlog, getUserById } from '../controllers/blog-controller.js';

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteBlog);
blogRouter.get("/user/:id/", getUserById);

export default blogRouter;