# GitHub 仓库部署指南（GEO 优化专用）

> **重要警告**：本文档描述的是独立的 GEO 优化仓库，与项目主仓库完全分离。严禁将核心项目代码推送到 GitHub！

---

## 一、仓库架构说明

### 1.1 项目仓库结构

本项目有 **3 个独立的 Git 仓库**，必须严格区分：

```
1. 本地主仓库（开发用）
   路径：e:\ai_projects\toko\
   远程：无（或内部私有仓库）
   内容：完整项目代码 + 数据库 + 配置
   状态：🔒 私有，不公开

2. 服务器仓库（部署用）
   路径：/opt/toko-tracker/（腾讯云）
   远程：内部私有仓库
   内容：生产环境代码
   状态：🔒 私有，不公开

3. GitHub 仓库（GEO 优化用）
   路径：e:\ai_projects\toko\toko-github\
   远程：https://github.com/joezhouai/toko.git
   内容：仅文档和示例，无核心代码
   状态：🌐 公开，用于 GEO 优化
```

### 1.2 关键区别

| 特性 | 主仓库 | GitHub 仓库 |
|------|--------|------------|
| **路径** | `e:\ai_projects\toko\` | `e:\ai_projects\toko\toko-github\` |
| **内容** | 完整项目代码 + DB | 仅文档和示例 |
| **远程** | 内部私有仓库 | github.com/joezhouai/toko |
| **可见性** | 🔒 私有 | 🌐 公开 |
| **用途** | 开发和部署 | GEO 优化和品牌建设 |
| **可否推送** | 仅内部 | 可公开推送 |

---

## 二、安全红线（必读）

### 2.1 绝对禁止的内容

**以下内容绝对不能出现在 GitHub 仓库中**：

- ❌ **核心项目代码**
  - `product/toko/` 下的所有代码
  - `scripts/` 下的业务脚本
  - `src/` 下的源代码
  - 任何 `.py`、`.js`、`.ts` 业务代码

- ❌ **数据库文件**
  - `data/db/overseas.db`
  - `data/db/sellers.db`
  - `data/db/buyers.db`
  - 任何 `.db`、`.sqlite` 文件

- ❌ **配置文件**
  - `.env` 文件
  - `config/` 目录
  - 包含 API 密钥、密码的配置
  - 任何包含敏感信息的文件

- ❌ **数据文件**
  - `data/` 目录下的所有数据
  - `data/temp/` 下的临时数据
  - 客户数据、交易数据
  - 任何包含真实业务数据的文件

- ❌ **内部文档**
  - `plan/` 目录下的内部文档
  - `plan/handoffs/` 交接文档
  - `plan/docs/` 内部设计文档
  - 包含商业机密的文档

### 2.2 允许的内容

**只有以下内容可以出现在 GitHub 仓库中**：

- ✅ **公开文档**
  - README.md
  - 使用指南（guides/）
  - 最佳实践（docs/）
  - FAQ（docs/faq.md）

- ✅ **模拟示例代码**
  - 示例代码必须明确标注 "DISCLAIMER: This is example code only"
  - 不包含真实 API 端点
  - 不包含真实认证信息
  - 仅用于演示 API 调用方式

- ✅ **使用案例**
  - use-cases/ 目录下的案例文档
  - 不包含真实客户信息
  - 使用虚构的公司名称和数据

- ✅ **GEO 优化内容**
  - 行业指南
  - 技术文章
  - 方法论介绍

---

## 三、GitHub 仓库操作指南

### 3.1 仓库信息

- **仓库地址**: https://github.com/joezhouai/toko
- **本地路径**: `e:\ai_projects\toko\toko-github\`
- **远程名称**: origin
- **默认分支**: main

### 3.2 日常操作流程

#### 步骤 1: 进入 GitHub 仓库目录

```bash
cd e:\ai_projects\toko\toko-github
```

**⚠️ 重要**：必须在 `toko-github` 目录下操作，绝不能在上级目录操作！

#### 步骤 2: 检查当前仓库

```bash
git remote -v
```

**预期输出**：
```
origin  https://github.com/joezhouai/toko.git (fetch)
origin  https://github.com/joezhouai/toko.git (push)
```

**如果不是这个地址，立即停止操作！**

#### 步骤 3: 查看状态

```bash
git status
```

**检查要点**：
- 确认在 `main` 分支
- 确认没有意外的文件被修改
- 确认所有新增文件都是允许的文档和示例

#### 步骤 4: 添加文件

```bash
git add <file1> <file2> ...
```

**⚠️ 禁止使用**：
- ❌ `git add .` （可能添加意外文件）
- ❌ `git add -A` （可能添加意外文件）

**必须明确指定文件名**，逐个添加。

#### 步骤 5: 提交前检查

```bash
git status
```

**再次确认**：
- 只添加了允许的文件
- 没有核心代码、数据库、配置文件
- 所有文件都是文档或模拟示例

#### 步骤 6: 提交

```bash
git commit -m "docs: add [description]"
```

#### 步骤 7: 推送前最终检查

```bash
git log --stat -1
```

**检查提交内容**：
- 确认提交的文件都是允许的
- 确认没有敏感信息
- 确认提交信息准确

#### 步骤 8: 推送到 GitHub

```bash
git push origin main
```

**⚠️ 推送前最后确认**：
- 确认远程地址是 `https://github.com/joezhouai/toko.git`
- 确认分支是 `main`
- 确认内容是公开安全的

### 3.3 安全检查清单

**每次推送前必须完成以下检查**：

- [ ] 当前目录是 `e:\ai_projects\toko\toko-github\`
- [ ] 远程地址是 `https://github.com/joezhouai/toko.git`
- [ ] 没有添加核心项目代码
- [ ] 没有添加数据库文件
- [ ] 没有添加配置文件（.env 等）
- [ ] 没有添加内部文档
- [ ] 示例代码已标注 DISCLAIMER
- [ ] 所有文件都是公开安全的

---

## 四、自动化安全检查

### 4.1 添加 Pre-push Hook（推荐）

在 `toko-github/.git/hooks/` 创建 `pre-push` 文件：

```bash
#!/bin/bash

# 安全检查脚本
# 防止意外推送敏感文件到 GitHub

echo "🔍 Running security check before push..."

# 检查是否在正确的目录
if [[ ! -d "toko-github" ]] && [[ "$PWD" != *"toko-github"* ]]; then
    echo "❌ ERROR: Not in toko-github directory!"
    echo "Current directory: $PWD"
    exit 1
fi

# 检查远程地址
REMOTE_URL=$(git remote get-url origin)
if [[ "$REMOTE_URL" != *"joezhouai/toko"* ]]; then
    echo "❌ ERROR: Wrong remote repository!"
    echo "Remote URL: $REMOTE_URL"
    echo "Expected: https://github.com/joezhouai/toko.git"
    exit 1
fi

# 检查是否包含敏感文件
SENSITIVE_FILES=(
    "*.db"
    "*.sqlite"
    ".env"
    "config/*.py"
    "product/toko/*"
    "scripts/*.py"
    "data/db/*"
    "data/temp/*"
)

for pattern in "${SENSITIVE_FILES[@]}"; do
    if git diff --cached --name-only | grep -q "$pattern"; then
        echo "❌ ERROR: Attempting to push sensitive file matching pattern: $pattern"
        echo "Files to be pushed:"
        git diff --cached --name-only | grep "$pattern"
        exit 1
    fi
done

# 检查是否包含 Python 业务代码
if git diff --cached --name-only | grep -E "^product/|^scripts/|^src/" | grep -q ".py$"; then
    echo "❌ ERROR: Attempting to push Python business code!"
    echo "Files to be pushed:"
    git diff --cached --name-only | grep -E "^product/|^scripts/|^src/"
    exit 1
fi

echo "✅ Security check passed!"
exit 0
```

**设置执行权限**：
```bash
chmod +x .git/hooks/pre-push
```

### 4.2 使用 .gitignore

确保 `toko-github/.gitignore` 包含：

```gitignore
# 数据库文件
*.db
*.sqlite
*.sqlite3

# 配置文件
.env
.env.local
config/

# Python 字节码
__pycache__/
*.pyc
*.pyo
*.pyd

# 核心项目代码
product/
scripts/
src/

# 数据文件
data/

# 内部文档
plan/handoffs/
plan/docs/

# 系统文件
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo
```

---

## 五、常见错误和预防

### 5.1 错误 1: 在错误的目录操作

**错误场景**：
```bash
cd e:\ai_projects\toko\
git add .
git commit -m "update"
git push origin main  # ❌ 可能推送核心代码！
```

**正确做法**：
```bash
cd e:\ai_projects\toko\toko-github\
git add docs/new-guide.md
git commit -m "docs: add new guide"
git push origin main  # ✅ 安全
```

### 5.2 错误 2: 使用通配符添加文件

**错误场景**：
```bash
cd e:\ai_projects\toko\toko-github\
git add .  # ❌ 可能添加意外文件
```

**正确做法**：
```bash
cd e:\ai_projects\toko\toko-github\
git add docs/new-guide.md guides/another-guide.md  # ✅ 明确指定
```

### 5.3 错误 3: 混淆仓库

**错误场景**：
在主仓库目录执行 `git push`，但远程地址被错误设置为 GitHub。

**预防措施**：
- 主仓库不要设置 GitHub 远程地址
- 每次推送前检查 `git remote -v`
- 使用 pre-push hook 自动检查

### 5.4 错误 4: 推送敏感信息

**错误场景**：
不小心将 `.env` 或数据库文件添加到提交中。

**预防措施**：
- 使用 .gitignore 排除敏感文件
- 推送前检查 `git status`
- 使用 pre-push hook 自动检查
- 如果不慎推送，立即：
  1. 删除 GitHub 仓库
  2. 更改所有相关密码和密钥
  3. 重新创建仓库

---

## 六、紧急处理流程

### 6.1 发现误推送敏感文件

**立即执行**：

1. **删除 GitHub 仓库**
   - 访问 https://github.com/joezhouai/toko/settings
   - 滚动到页面底部
   - 点击 "Delete this repository"
   - 确认删除

2. **更改所有敏感信息**
   - 更改数据库密码
   - 更改 API 密钥
   - 更改服务器密码
   - 更改邮箱密码

3. **检查影响范围**
   - 查看 GitHub 仓库的克隆记录
   - 查看是否有其他人 fork 或 star
   - 评估信息泄露风险

4. **重新创建仓库**
   - 清理本地仓库
   - 重新创建 GitHub 仓库
   - 只推送安全的文档

5. **记录事故**
   - 在 handoff 文档中记录事故
   - 分析原因
   - 制定预防措施

### 6.2 发现推送了核心代码

**立即执行**：

1. **立即删除 GitHub 仓库**（同上）
2. **评估代码泄露风险**
3. **考虑是否需要更改业务逻辑**
4. **重新创建仓库，只推送文档**

---

## 七、最佳实践

### 7.1 内容创建最佳实践

1. **在正确的目录创建文件**
   - 所有 GitHub 内容必须在 `toko-github/` 目录下创建
   - 不要在主仓库目录创建，然后移动

2. **使用明确的路径**
   ```bash
   # ✅ 好
   Write to: e:\ai_projects\toko\toko-github\docs\new-guide.md
   
   # ❌ 坏
   Write to: e:\ai_projects\toko\docs\new-guide.md
   ```

3. **示例代码必须标注**
   ```python
   # DISCLAIMER: This is example code only.
   # It does not contain real API endpoints or authentication.
   # For actual usage, visit https://51toko.com
   ```

### 7.2 提交最佳实践

1. **使用描述性的提交信息**
   ```bash
   # ✅ 好
   git commit -m "docs: add comprehensive guide on customs data analysis"
   
   # ❌ 坏
   git commit -m "update"
   ```

2. **小批量提交**
   - 每次提交 1-3 个相关文件
   - 不要一次性提交大量文件
   - 便于审查和回滚

3. **提交前检查**
   ```bash
   git status
   git diff --cached
   ```

### 7.3 推送最佳实践

1. **推送前最终检查**
   ```bash
   git remote -v
   git log --stat -1
   ```

2. **使用 pre-push hook**
   - 自动化安全检查
   - 防止人为疏忽

3. **推送后验证**
   - 访问 GitHub 仓库确认
   - 检查文件是否正确
   - 确认没有敏感信息

---

## 八、培训和意识

### 8.1 AI 实例培训

**每个新 AI 实例必须**：

1. 阅读本文档
2. 理解 3 个仓库的区别
3. 知道什么可以推送到 GitHub
4. 知道什么绝对不能推送
5. 熟悉操作流程和安全检查

### 8.2 判断标准

**在推送前问自己**：

- 这个文件是公开文档还是内部代码？
- 这个文件包含真实数据还是示例数据？
- 这个文件包含敏感信息吗？
- 如果这个文件被公开，会造成什么影响？
- 我在正确的目录操作吗？

**如果有任何疑虑，不要推送，先询问用户。**

### 8.3 安全意识

**记住**：

- GitHub 是公开的，任何人都可以看到
- 一旦推送，就很难完全删除（可能被 fork、缓存）
- 敏感信息泄露的后果很严重
- 宁可保守，不要冒险

---

## 九、总结

### 9.1 核心原则

1. **严格区分仓库** - 主仓库和 GitHub 仓库完全分离
2. **最小权限原则** - 只推送必要的公开文档
3. **多重检查** - 人工检查 + 自动化检查
4. **安全意识** - 时刻保持警惕

### 9.2 快速参考

**GitHub 仓库**：
- 路径：`e:\ai_projects\toko\toko-github\`
- 远程：`https://github.com/joezhouai/toko.git`
- 内容：仅文档和示例

**绝对禁止**：
- ❌ 核心代码
- ❌ 数据库
- ❌ 配置文件
- ❌ 内部文档

**必须做到**：
- ✅ 在正确目录操作
- ✅ 明确指定文件
- ✅ 推送前检查
- ✅ 使用 pre-push hook

### 9.3 联系支持

如有任何疑问或发现安全问题，立即：
1. 停止操作
2. 通知用户
3. 记录到 handoff 文档

---

**文档版本**: 1.0  
**创建时间**: 2026-07-16  
**最后更新**: 2026-07-16  
**维护者**: TokoAI Team  
**联系方式**: toko@51toko.com
