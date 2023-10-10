// import express from "express"
// import userModel from "../services/userModel.js"
// import bodyParser from "body-parser"
import userModel from "../services/userModel.js"
import pool from './../configs/connectDB.js'
const postsController = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from users")
            res.json({
                data: rows
            })
        }catch(error){
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },

    getById: async(req,res) =>{
        try{
            const { id } = req.params
            const [rows, fields] = await pool.query("select * from users where id = ?",[id])
            res.json({
                data: rows
            })
        }
        catch(error){
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    create: async(req,res) =>{
        try{
         
            const { username,password,fullname,groupid } = req.body
            const sql = "insert into users (username,password,fullname,groupid) values (?,?,?,?)"
            const [rows, fields] = await pool.query(sql,[username,password,fullname,groupid])
            res.json({
                data: rows
            })
        }
        catch(error){
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    update: async(req,res) =>{
        try{
         
            const { username,password,fullname,groupid } = req.body
            const { id } = req.params
            const sql = "UPDATE users set username=?, password=?,fullname=?, groupid=? WHERE id = ?"
            const [rows, fields] = await pool.query(sql,[username,password,fullname,groupid,id])
            res.json({
                data: rows
            })
        }
        catch(error){
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    delete: async(req,res) =>{
        try{
         
        
            const { id } = req.params
            const sql = "DELETE FROM users WHERE id = ?"
            const [rows, fields] = await pool.query(sql,[id])
            res.json({
                data: rows
            })
        }
        catch(error){
            console.log(error)
            res.json({
                status: "error"
            })
        }
    }



}
module.exports = postsController

