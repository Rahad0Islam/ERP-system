import cookieParser from "cookie-parser";
import type { Application } from "express";
import express from "express";
import cors from "cors";
import config from "./config/config";
import { notFound } from "./middleware/notFound";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
import { AuthRoutes } from "./modules/auth/auth.route";
import { CompanyRoutes } from "./modules/company/company.route";

const app: Application = express();
app.use(
	cors({
		origin: config.app_url,
		credentials: true,
	}),
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/health", async (req, res) => {
	res.status(200).json({
		status: "success",
		message: "Health check successful",
	});
});
app.get("/", async (req, res) => {
	res.send("ERP system is running successfully");
});

app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/company", CompanyRoutes);

app.use(notFound);
app.use(globalErrorHandler);

export default app;
