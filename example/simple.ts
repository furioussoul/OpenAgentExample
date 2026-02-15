import { google, kimi, OpenAgent } from 'mycto_agent'

// With proxy/custom endpoint
// const agent = new OpenAgent({
//   provider: 'anthropic',
//   apiKey: 'your_api_key',
//   baseURL: 'your_custom_endpoint',
//   model: 'model_name',
// })
const agent = kimi("your api key", 'kimi-k2.5-free')


// const agent = google('your_api_key', 'model_name') // With Google provider

const result = await agent.chat('帮我在当前目录创建一个10个文件，内容写上随机数字，然后再并行读取计算和')

console.log(result.text)
console.log(result.toolCalls) // 看看它调用了什么工具