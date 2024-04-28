import express from "express";
import connectDB from "./config/connectDB.js";
import memberRoutes from "./routes/member.routes.js";
import classRoutes from "./routes/class.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import cors from "cors";
const { PORT } = process.env;

await connectDB();

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", memberRoutes);
app.use("/api", classRoutes);


app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
