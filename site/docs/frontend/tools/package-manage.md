# 包管理工具
## Yarn
### 按照 yarn.lock 来安装依赖
```shell
yarn install --frozen-lockfile
```

### 设置获取 npm 包的源
```shell
yarn config set registry [源的 URL]
```

如：
```shell
yarn config set registry https://registry.npmjs.org
```
