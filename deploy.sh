#!/usr/bin/env bash

set -e

# 构建 vitepress 项目
npx vitepress build

# 进入构建产物目录
cd docs/.vitepress/dist

# 删除旧的 git 仓库（保险起见，可选）
rm -rf .git

# 初始化 git 仓库
git init

# 添加远程仓库地址
git remote add origin https://github.com/zsharkape/docs.git

# 切换分支到 master
git checkout -b master

# 添加所有文件
git add -A

# 提交
git commit -m 'deploy: 发布到 master 分支'

# 强制推送到远程 master 分支
git push -f origin master

# 返回根目录
cd -
