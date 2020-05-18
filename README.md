# vue-init

## description

**vue-init**是以 vue-cli3 所搭建的项目为基础，完成了更加丰富的项目基础化配置。包括了 axios 的封装，公共样式的封装，公共组件的封装等内容的合理管理，使你在新开发一个 VUE 项目时，可以直接开发，而不需要再去进行开发前的各项配置。

## 如何使用

**克隆该项目**

```
git clone https://github.com/DengZhanyong/vue-init.git
```

**删除远程库**

```
git remote rm origin
```

**连接自己的远程库**

```
git remote add origin 你的远程仓库地址
```

如果此时提交你的代码到远程库，你会发现，该项目还存在历史提交记录，可通过以下方式清除

**建立新的分支**

```
git checkout --orphan new-branch
```

**重新提交到暂存区**

```
git add .
git commit 'init'
```

**删除原 master 分支**

```
git branch -D master
```

**将当前分支名改为 master**

```
git branch -m master
```

**提交到远程仓库**

```
git push --set-upstream origin master
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
