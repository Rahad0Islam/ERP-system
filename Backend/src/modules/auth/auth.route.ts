import { NextFunction, Request, Response, Router } from "express";
import { auth } from "../../middleware/checkAuth";
import { AuthController } from "./auth.controller";
import { authValidation } from "./auth.validation";
import { validateRequestBody } from "../../middleware/validateRequest";

const router = Router();

router.post(
	"/register",

	validateRequestBody(authValidation.userRegisterationZodSchema),
	AuthController.registerUser,
);

router.post(
	"/verify-email",
	validateRequestBody(authValidation.verifyEmailZodSchema),
	AuthController.verifyUserEmail,
);
router.post(
	"/login",

	validateRequestBody(authValidation.loginUserZodSchema),
	AuthController.loginUser,
);
router.get(
	"/me",
	auth(),
	AuthController.getMe,
);
router.post("/refresh-token", AuthController.refreshToken);
router.post("/google", AuthController.googleLogin);
router.post("/forgot-password", AuthController.forgotPassword);
router.post(
	"/reset-password",
	validateRequestBody(authValidation.resetPasswordZodSchema),
	AuthController.resetPassword,
);
export const AuthRoutes = router;
