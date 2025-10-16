
import { Router } from "express";
import { profile, createProfile } from "../controller/profile.controller.js";

const router = Router();
/**
 * @swagger
 * tags:
 *   - name: Profile

 *
 * /me:
 *   get:
 *     summary: Get my profile
 *     tags: [Profile]
 *     responses:
 *       200:
 *         description: Successful response with user profile
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 user:
 *                   type: object
 *                   properties:
 *                     email:
 *                       type: string
 *                       example: "johndoe@gmail.com"
 *                     name:
 *                       type: string
 *                       example: "John Doe"
 *                     stack:
 *                       type: string
 *                       example: "Node.js/Express"
 *                 timeStamps:
 *                   type: string
 *                   example: "2023-10-01T12:00:00Z"
 *                 fact:
 *                   type: string
 *                   example: "Cats sleep for 70% of their lives."
 *       404:
 *         description: Not found
 *       500:
 *         description: Server error
 */


router.get("/", profile);
router.post("/", createProfile);

export default router;