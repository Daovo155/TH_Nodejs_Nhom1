import express from "express"
import userModel from "../services/userModel.js"
import bodyParser from "body-parser"
import bcrypt from 'bcryptjs'

const login = (req, res) => {
    res.render('home', {data: {page: 'login', title: 'Đăng nhập'}})
}

const login_auth = async (req, res) => {
    //kiem tra ngdung co nhap vao k
    let body = req.body
    if (!body.username || !body.password) {
        res.status(404).send('<h1>Invalid parameter</h1>')
    }
    else {
        try {
            //kiem tra tim kiem username nhap vao co giong voi trong db k
            let auth = await userModel.auth(body.username)

            if (!auth[0].username || !auth[0].password || !auth[0].groupid) {
                console.log("khong ton tai tk")
            }
            else {
                //ma hoa lai mk da nhap tu form
                let hash = bcrypt.hashSync(body.password, bcrypt.genSaltSync(10))
                
                //so sanh password da nhap tu form dc ma hoa co giong voi pasword trong db k
                if (bcrypt.compareSync(body.password, auth[0].password)) {
                    //khoi tao session va gan gia tri do vao [key: value]
                    req.session.auth = {name:auth[0].username, pass:auth[0].password, role:auth[0].groupid}
                    res.redirect("/")
                }
                else {
                    console.log("sai mat khau")
                }
            }

        } catch (error) {
            console.log(error)
        }
    }
}


export default {login, login_auth}