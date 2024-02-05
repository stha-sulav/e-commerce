import { env } from "./utils/envValidation";
import { connectDb } from "./config/db.config";
import { server } from "./app";

const PORT = env.PORT || 8000;

connectDb().then(() => {
  server.listen(PORT, () => {
    console.log(`Server Listening at port: ${PORT}`);
  });
});
