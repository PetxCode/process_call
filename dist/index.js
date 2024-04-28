"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const cron_1 = require("cron");
const port = 2288;
const url = "mongodb://localhost:27017/process";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    try {
        const job = new cron_1.CronJob("10 * * * * *", // cronTime
        function () {
            console.log("You will see this message every 10 second of each Minute1");
            // job.stop();
        }, null, true);
        res.status(200).json({
            message: "Awesome from Index hit",
        });
    }
    catch (error) {
        res.status(404).json({
            message: "Error",
        });
    }
});
app.listen(port, () => {
    (0, mongoose_1.connect)(url).then(() => {
        console.log("connected from index");
    });
});
