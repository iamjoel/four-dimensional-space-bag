# 关键概念
> LLM 擅长理解和生成文本。

Open AI 提供了一系列不同模型来适应不同的任务。可以通过 fine-tune 来训练出自己的模型来适应特定的任务。

## 关键概念
### Prompts
Prompt 是一个文本片段，用来描述你想要模型生成的内容。

### Completion
输出的结果。 算 token 的时候， 包含 prompts + completion。

### Tokens
模型理解和处理文本，会把文本分割成一个个的 Token。Token 可能是一个单词，或者是几个字符。1个 Token 大概是 4 个字符 或 0.75 个单词。

Token 计算工具：[Tokenizer](https://platform.openai.com/tokenizer)。

### 支持的模型
* [GPT-4](https://platform.openai.com/docs/models/gpt-4)
  * gpt-4: 最大 Token 为 8k。
  * gpt-4-32k: 最大 Token 为 32k。
* [GPT-3.5](https://platform.openai.com/docs/models/gpt-3-5)
  * gpt-3.5-turbo: 生成聊天类文本。 4k，大概 3k 个单词。
  * text-davinci-003：生成文本类内容。
  * code-davinci-002: 生成代码类内容。
* [DALL·E](https://platform.openai.com/docs/models/dall-e) 生成图片。
* [Whisper](https://platform.openai.com/docs/models/whisper) 生成音频。翻译和语音识别。
* [Embeddings](https://platform.openai.com/docs/models/embeddings) 嵌入。衡量两个文本的相似度。
  * [Question answering using embeddings-based search](https://github.com/openai/openai-cookbook/blob/main/examples/Question_answering_using_embeddings.ipynb)
* [Moderation](https://platform.openai.com/docs/models/moderation) 检测文本中的敏感内容。

模型工具：[Comparison tool](https://gpttools.com/comparisontool)。

### 模型的参数
* Temperature: 0 - 1.0。值越小，生成的文本越精确(选择概率更高的，更少的风险）。值越大，生成的文本越随机(创意性）。
* Top P

## Fine-turning
Fine-turning 是指在一个已经训练好的模型上，继续训练，以适应特定的任务。

训练数据例如：
```json
{"prompt": "<prompt text>", "completion": "<ideal generated text>"}
{"prompt": "<prompt text>", "completion": "<ideal generated text>"}
{"prompt": "<prompt text>", "completion": "<ideal generated text>"}
...
```

训练好之后，可以用新的模型名执行任务。
```js
const response = await openai.createCompletion({
  model: FINE_TUNED_MODEL
  prompt: YOUR_PROMPT,
})
```

## 文档
* [Key concepts 官方文档](https://platform.openai.com/docs/introduction/key-concepts)
* [官方 SDK](https://platform.openai.com/docs/libraries/community-libraries) 对接口调用的封装而已。
* [Playground](https://platform.openai.com/playground/p/default-explain-code?lang=node.js)
* [Weight & Biases](https://docs.wandb.ai/guide) 帮助 Fine turning 的工具。