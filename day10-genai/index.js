import "dotenv/config"
import readline from "readline/promises";
import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage } from "@langchain/core/messages";
import { sendEmail } from "./mail.service.js";
import { tool } from "@langchain/core/tools";
import { createReactAgent } from "@langchain/langgraph/prebuilt";

import * as z from "zod";

const emailTool = tool(
    sendEmail,
    {
        name: "emailTool",
        description: "A tool to send emails.",
        schema: z.object({
            to: z.string().describe("Email address of the receiver"),
            html: z.string().describe("The HTML content of the email"),
            subject: z.string().describe("The subject of the email"),
        })
    }
)


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const model = new ChatMistralAI({
model: "mistral-small-latest",
temperature: 0
});

const agent = createReactAgent({
    llm: model,
    tools: [emailTool]
})



const messages = []

while(true){
    const userInput = await rl.question("You: ")

messages.push(new HumanMessage(userInput))

    const response = await agent.invoke({
        messages
    })
    messages.push(response.messages[ response.messages.length - 1])
    // console.log(response)

    // console.log(`[${new Date().toISOString()}] AI: ${response.content}`)
}



// const response = await model.invoke("What is the capital of India?")

console.log(response.text)