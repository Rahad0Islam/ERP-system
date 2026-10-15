import { NextFunction, Request, Response, Router } from "express";
import { auth } from "../../middleware/checkAuth";
import { validateRequestBody } from "../../middleware/validateRequest";
import { companyController } from "./company.controller";

const router = Router();

router.post(
    '/apply-as-company-owner',
    companyController.applyAsCompanyOwner
);



export const CompanyRoutes = router;
