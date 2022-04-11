import {Router} from "express";
import * as pricesController from "./pricesController.js";

const router = Router();

router.get("/:pair", pricesController.pairPrice);


export default router;
