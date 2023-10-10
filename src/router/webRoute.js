import express from "express";
import HomeController from "./../controllers/HomeController" // add controller

const router = express.Router()
const initWebRoute = (app) => {

    app.get('/home/:namepage', HomeController.getHome) // truyền param
    app.get('/set-session', HomeController.setSession)
    app.get('/abc', HomeController.getAbc)

    return app.use("/", router)
}
export default initWebRoute