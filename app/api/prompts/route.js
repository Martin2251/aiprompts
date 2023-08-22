// the handlers for the backend post requests sending something in 
import OpenAI from "openai";
import { NextResponse } from "next/server";
require("dotenv").config();

const openai = new OpenAI({
    apiKey: process.env.KEY
});

// calls open ai endpoint 

const improvePrompt = async(prompt) => {
return
}
export async function POST(req,_){
    try{
const prompt = await req.body.json();

const data = await improvePrompt(prompt)

return NextResponse.json({
    prompt:data,

})
    } catch(error) {
        console.log(error)
    }
}