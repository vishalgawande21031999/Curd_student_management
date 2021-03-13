import express from 'express'
import { v4 as uuidv4 } from 'uuid';


const router= express.Router()
let users=[]

router.get('/',(req,res) => {

    res.send(users)
})
router.post('/',(req,res) =>{
    const user = req.body
    const userID =uuidv4(); 

  
    users.push({ ...user,id : uuidv4()})

    res.send(`user ${user.FIRSTNAME}added`)

})
router.get('/:id',(req,res)=>{
    const { id } = req.params
    const foundUser = users.find((user)=>user.id == id)
    res.send(foundUser)
})
router.delete('/:id',(req,res)=>{
    const { id } = req.params
    users = users.filter((users)=>user.id !=id)
res.send(`user with id${id} deleted`)
})

export default router