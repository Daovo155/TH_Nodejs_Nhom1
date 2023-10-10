// const newUser = async(req, res) => {
//     return res.render("newUser", {data: {title: "Tao tai khoan"}})
// }

// const listUser = async(req, res) => {
    
//     const users = [
//         {name:"Nhu Huynh", role: "Admin"},
//         {name:"Nhu Huynh 2", role: "Admin"},
//         {name:"Nhu Huynh 3", role: "Admin1"}
//     ]

//     return res.render("listUser", {items: users})
// }
// const detailUser = async(req, res) => {
//     return res.render("detailUser", {data: {title: "Chi tiet tai khoan"}})
// }
import express from "express"
import userModel from "../services/userModel.js"
import bodyParser from "body-parser"
import bcrypt from 'bcryptjs'
const UserPage = (req, res)=>{
    return res.render("newUser",{data: {title: 'Tao tai khoan'}})
}

const loginpage = async(req, res) => {
    return res.render("home",{data: {page: 'newUser', title: 'Tạo tài khoản'}})
}

const listUser = async(req, res) => {
    const users = [
        { name: "Nguyen Nhu Huynh", role: "Admin", Email: "Huynh@gmail.com" },
        { name: "Nguyen Huynh Nhu", role: "User", Email: "Huynh@gmail.com" }
      ];
    return res.render("home",{data: {page: 'listUser', title: 'Danh sachs tai khoan'},users: users})
}

const login = async(req, res) => {
    return res.render("home",{data: {page: 'login', title: 'Dang nhap'}})
}

const detail_user = (req, res)=>{
    let Username = req.params.username
    return res.render("home",{data: {title: 'chi tiet nguoi dung',page: 'detailUser',params: Username}})
}


module.exports = {

    loginpage,
    listUser,
    login,
    detail_user
}