import "dotenv/config.js"
import app from "./src/app.js"

const PORT = 3000; //porta lógica padrão para 

app.listen(PORT, ()=> { console.log("Servidor escutando!")});