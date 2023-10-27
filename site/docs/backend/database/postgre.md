# Postgre
DB 可视化工具：[DBeaver](https://dbeaver.io/download/)

## 登陆
```bash
psql -U 用户名
```

## 创建数据库
登陆后
```bash
CREATE DATABASE 数据库名;
```

## 删除数据库
```bash
DROP DATABASE 数据库名;
```

## 查询所有数据库
登陆后
```bash
\l
```

未登陆：
```bash
psql -l
```

## 选择数据库
登陆后
```bash
\c 数据库名
```

## 数据库下的所有表
```bash
\d
```


