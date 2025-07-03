import express from 'express';
import path from 'path'

import message from './text';

const app = express()
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'./src')))

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/card',(req,res)=>{
  res.json(message)
})

app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`)
})