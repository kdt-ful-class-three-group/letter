import express, {Request, Response} from 'express';
import path from 'path'

const app = express()
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`)
})