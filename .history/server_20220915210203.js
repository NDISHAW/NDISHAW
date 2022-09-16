require("dotenv").config();
import express, { json, static } from "express";
import cors from "cors";
import { resolve } from "path";
import contactRoute from "./route/contactRoute";

const app = express();

app.use(json());
app.use(cors());

app.use("/", contactRoute);

if (process.env.NODE_ENV === "production") {
  app.use(static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(resolve(__dirname, "client", "build", "index.html"))
  );
}

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server listing to port 5000 only`));
