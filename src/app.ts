import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import compression from "compression";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import sequelize from "./models";
import { todo } from "./router/todo";

const app = express();

app.use(helmet());
app.use(mongoSanitize());
app.use(cors());
app.use(express.json());
app.use(compression());

const port = Number(process.env.PORT);
const host = String(process.env.HOST);

app.use("/", todo);

// app.get("/", (req, res) => {
//     res.status(StatusCodes.OK).json({
//         success: true,
//         data: ReasonPhrases.OK,
//     });
// });
app.all("*", (req, res) => {
    res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        data: ReasonPhrases.NOT_FOUND,
    });
});

// app.use(httpErrorMiddleware);
// app.use(errorMiddleware);

const startServer = async () => {
    try {
        await sequelize!.authenticate();
        console.log(
            "⚡️[database]: Database connection has been established successfully."
        );
        app.listen(port, host, () => {
            console.log(
                `⚡️[auth-services]: Server is running at http://${host}:${port}`
            );
        });
    } catch (error) {
        console.log("😥 [database]: Unable to connect to the database:", error);
    }
};

startServer();
