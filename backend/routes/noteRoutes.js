import express from 'express'
const router = express.Router();

router.get("/",(req,res)=>{
     res.status(200).send("Nota visualizada")
 })

router.post("/",(req,res)=>{
    res.status(201).send("Nota criada")
 })

 router.put("/:id",(req,res)=>{
     res.status(200).send("Note atualizada")
 })

router.delete("/:id",(req,res)=>{
    res.status(200).send("Note deletada")
 })

export default router;