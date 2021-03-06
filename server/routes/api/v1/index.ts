import express from 'express'
import { exampleRouter } from './example.router'

const router = express.Router();
const NAMESPACE = "v1";

// Example API
router.use(`/${NAMESPACE}`, exampleRouter);

// router.use(`/${NAMESPACE}/product`, productRouter)
export default router;
