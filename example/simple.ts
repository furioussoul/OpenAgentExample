import { google, kimi, OpenAgent } from "@furioussoul/openagent";

const agent = new OpenAgent({
  provider: "anthropic",
  baseURL: "https://oneai.17usoft.com/anthropic/v1",
  apiKey: "sk-R0ey7aR6NVOaReGl1yuRPx1WLQ4y7p3dThu4h23z2anWLdjy",
  model: "claude-opus-4.5",
});

for await (const event of agent.stream('帮我在当前目录创建一个react落地页项目，简单一点就好，好了之后npm run dev启动3010端口')) {
  if (event.type === 'text') process.stdout.write(event.text.trimStart());
  if (event.type === 'tool-start') console.log(`Using Tool: ${JSON.stringify(event.input)}`);
  if (event.type === 'tool-end') console.log(`Tool Result: ${JSON.stringify(event.output)}`)
  if (event.type === 'done') console.log(`\nCost: $${event.result.cost}`)
}
