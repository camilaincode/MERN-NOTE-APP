import express from 'express'
import notesRoutes from './Routes/noteRoutes'
const app = express();
const port = 3000;

app.use("/api/notes",notesRoutes)


app.listen(port, () => {
    console.log(`server rodando em port: ${port}`)
})