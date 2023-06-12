# JavaScript 正则生成器
介绍文章：[一分钟做个写正则的 AI 应用？有点厉害哦](https://mp.weixin.qq.com/s/-I95ZVjCOhK2ZwXpx5wD-A)

## V1 能满足要求
问题：
1. 对正则的说明有时和正则不一致。
2. 格式不好看。

### Prompt
用 Javascript 来写正则。
依次输出以下 3 部分：
1. 正则。
2. 正则说明。
3. 举例：分别举满足正则和不满足正则的例子。

要写的正则要求如下：

### 输入
描述：在查询内容中，输入需要生成的正则的要求。例如：邮箱。

用户输入：邮箱验证

### 输出
正则：/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*.[a-zA-Z0-9]{2,6}$/

正则说明：
该正则用于验证邮箱，验证规则为：邮箱由字母、数字、下划线、英文句号、以及中划线组成，@符号后面跟着字母、数字、中划线，可以有多个，最后以.xxx或.xxx.xxx结尾，其中xxx为两到六位的字母或数字。

举例：
满足正则：example@example.com
不满足正则：example@example.com.cn

## V2 输出优化
对 v1 问题的优化。

### Prompt
```
用 Javascript 来写正则。输出格式如下：

## 正则
内容

## 说明
解释上面的正则。

## 举例
满足正则的例子：
不满足正则的例子：

---

对正则的说明要和正则一致。例如：
正则：/[a-z]{3}/。
解释：匹配3个小写英文字母。

---
要写的正则要求如下：
```