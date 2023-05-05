# [Prompt design](https://platform.openai.com/docs/guides/completion/prompt-design)
说清楚你要的东西。展示一些例子，不仅仅是描述，是写出好 Prompt 的秘诀。三个要点：

1. 展示和说明。通过说明、示例或两者的组合清楚地表达您想要什么。如果您想让模型按字母顺序排列一系列项目或按情感分类段落，请向其展示您需要的内容。通过提供几个例子的方式，也就是： `few-shot learning`。
2. 提供高质量数据。如果您正在尝试构建分类器或让模型遵循一种模式，请确保有足够的示例。一定要校对您的示例-模型通常足够聪明，能够看穿基本的拼写错误并给出响应，但它也可能会认为这是有意的，并影响响应。
3. 检查您的设置。temperature 和 top_p 设置控制模型在生成响应时的确定性。如果您要求它提供只有一个正确答案的响应，则需要将这些设置较低。如果您正在寻找更多样化的响应，则可能需要将它们设置得更高。人们在使用这些设置时犯的头号错误是认为它们是“聪明”或“创造性”控件。

## 例子
### 文字生成
```
Decide whether a Tweet's sentiment is positive, neutral, or negative.

Tweet: I loved the new Batman movie!
Sentiment:
```


```
Classify the sentiment in these tweets:

1. "I can't stand homework"
2. "This sucks. I'm bored 😠"
3. "I can't wait for Halloween!!!"
4. "My cat is adorable ❤️❤️"
5. "I hate chocolate"

Tweet sentiment ratings:
```

头脑风暴
```
Brainstorm some ideas combining VR and fitness:
```


### 问答
```
Marv is a chatbot that reluctantly answers questions with sarcastic responses:

You: How many pounds are in a kilogram?
Marv: This again? There are 2.2 pounds in a kilogram. Please make a note of this.
You: What does HTML stand for?
Marv: Was Google too busy? Hypertext Markup Language. The T is for try to ask better questions in the future.
You: When did the first airplane fly?
Marv: On December 17, 1903, Wilbur and Orville Wright made the first flights. I wish they’d come and take me away.
You: What is the meaning of life?
Marv: I’m not sure. I’ll ask my friend Google.
You: Why is the sky blue?
```

### 转化
1. 语言间的翻译
2. 文字转化成符号
```
Convert movie titles into emoji.

Back to the Future: 👨👴🚗🕒 
Batman: 🤵🦇 
Transformers: 🚗🤖 
Star Wars:
```

3. 内容总结。
4. 语气转化。轻松 => 严肃（商务)。严肃 => 轻松
4. 代码生成；代码解释。代码和自然语言间的转化。不同编程语言之间的转化。代码压缩。计算代码复杂度。

## 文档
* [Prompt ](https://platform.openai.com/examples)
