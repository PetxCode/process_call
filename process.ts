import express, { Request, Response } from "express";
import mongoose, { connect } from "mongoose";

import { CronJob } from "cron";

const port: number = 2299;
const url: string = "mongodb://localhost:27017/process";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  try {
    const job = new CronJob(
      "10 * * * * *", // cronTime
      function () {
        console.log("You will see this message every 10 second of each Minute");

        // job.stop();
      },

      null,
      true
    );

    res.status(200).json({
      message: "Awesome from Process",
    });
  } catch (error) {
    res.status(404).json({
      message: "Error",
    });
  }
});

app.listen(process.env.PORT || port, () => {
  connect(url).then(() => {
    console.log("connected from process");
  });
});
