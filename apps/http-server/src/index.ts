import express,{Request,Response} from "express";
import { client } from "@repo/db/client"

const app = express();
app.use(express.json())
interface userData{
    name:string,
    username:string,
    password:string
}
 app.get("/",(req,res)=>{
    res.send("the http server running")
 })
 app.post("/signup",async(req:Request,res:Response)=>{
    const data:userData=req.body;
    try {
        const result=await client.user.create({
            data:{
                name:data.name,
                password:data.password,
                username:data.username
            }
        })
        res.send({
            msg:"data added successfully",
            success:true,
            id:result.id
        })
    } catch (error) {
        res.status(500).send({
            msg:"internal server error",
            error,
            success:false
        })
    }
    
 })

 app.listen(3002);