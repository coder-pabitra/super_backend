import { configDotenv } from "dotenv";
import { DbConnect } from "./db/db";
import { app } from "./app";

const PORT = process.env.PORT;


DbConnect()
.then(() => {
    app.listen(PORT || 8000,`your application has started on port ${PORT}`)
} 
)
.catch((err) => {
    console.log(`DB CONNECTION FAILED ERROR IS : `,{err}
    )
})
