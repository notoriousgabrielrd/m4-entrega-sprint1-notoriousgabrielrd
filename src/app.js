import express from "express";
import routerLogin from "./routes/login.routes";
import userRouter from "./routes/users.routes"

const app = express()

const port = 3000

app.use(express.json())

app.use("/users", userRouter)

app.use("/login", routerLogin)

app.listen(port, () => {
    console.log(`App is runnig on ${port} already!`)
})


/*
 
 1- primeiro instancio o basico

 2- vou para routes

 7- importamos o router como UserRouter

  8- chamamos ele na função app.use -> linha 10

 */