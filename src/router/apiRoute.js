import express from "express";
import HomeController from "./../controllers/HomeController" // add controller

const router = express.Router()
const initAPIRoute = (app) => {

    app.get('/api-get', HomeController.getapi)

    return app.use("/api/v1", router)
}
export default initAPIRoute