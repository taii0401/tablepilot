# PROJECT.md

## 1. Project Overview

### Project Name

```text
{{PROJECT_NAME}}
```

### Project Description

```text
{{PROJECT_DESCRIPTION}}
```

### Project Goal

本專案主要目標：

```text
{{PROJECT_GOAL}}
```

---

# 2. Technology Stack

## Backend

```text
Laravel
PHP
MySQL
Redis
```

## Frontend

```text
React
TypeScript
Vite
```

## Authentication

```text
Laravel Sanctum
```

## AI

```text
{{AI_PROVIDER}}
```

例如：

```text
OpenAI
Gemini
None
```

## Infrastructure

目前：

```text
Local Development
```

未來：

```text
AWS
```

---

# 3. Application Architecture

```text
                    React Web
                        │
                        │ REST API
                        ▼
                 Laravel Backend
                        │
          ┌─────────────┼─────────────┐
          │             │             │
          ▼             ▼             ▼
        MySQL         Redis       External API
```

未來 Mobile：

```text
              ┌── React Web
              │
              ▼
        Laravel REST API
              ▲
              │
              └── Mobile App
```

---

# 4. User Roles

本專案使用角色：

```text
{{USER_ROLES}}
```

例如：

```text
Admin
Business Owner
Customer
```

每個角色必須在此描述：

### Role

Responsibilities：

```text
-
-
-
```

Permissions：

```text
-
-
-
```

---

# 5. Core Modules

主要 Module：

```text
{{MODULES}}
```

例如：

```text
Authentication
User
Restaurant
Reservation
Notification
AI Agent
```

每個 Module 開發前，應先確認：

* Responsibility
* Database
* API
* Permission
* Business Rule
* Related Module

---

# 6. Business Rules

本區記錄不可由 Developer / AI 自行推測的重要商業規則。

```text
{{BUSINESS_RULES}}
```

例如：

```text
1. User 未登入也可以建立預約。
2. Business Owner 必須登入才能管理資料。
3. 預約不可建立在非營業時間。
4. 同一桌位同一時間不可重複預約。
```

Business Rule 修改時必須同步更新此文件。

---

# 7. Database

主要資料表：

```text
{{DATABASE_TABLES}}
```

資料關係：

```text
{{DATABASE_RELATIONSHIPS}}
```

Schema 設計需參考：

```text
../../Knowledge/Architecture/database-design.md
```

---

# 8. API

API Base：

```text
/api
```

主要 API：

```text
{{API_LIST}}
```

所有 API 必須：

* Validate Input
* Check Permission
* 統一 Response Structure
* 統一 Error Handling

---

# 9. Frontend Pages

主要頁面：

```text
{{FRONTEND_PAGES}}
```

例如：

```text
Home
Login
Dashboard
Restaurant Detail
Reservation
Settings
```

---

# 10. Design System

## Style

```text
{{DESIGN_STYLE}}
```

## Colors

```text
Primary:
Secondary:
Background:
Surface:
Text:
Muted Text:
Border:
Success:
Warning:
Error:
```

## UI Principles

```text
{{UI_PRINCIPLES}}
```

---

# 11. AI Agent

若專案包含 AI：

Agent：

```text
{{AI_AGENTS}}
```

AI Agent Responsibilities：

```text
{{AI_AGENT_RESPONSIBILITIES}}
```

AI 不可：

* 直接修改 Database
* 繞過 Backend Validation
* 繞過 Authorization
* 自行決定 Business Rule

---

# 12. Current Phase

目前開發階段：

```text
{{CURRENT_PHASE}}
```

例如：

```text
Phase 1 - MVP
```

---

# 13. MVP Scope

MVP 功能：

```text
{{MVP_SCOPE}}
```

不在 MVP：

```text
{{OUT_OF_SCOPE}}
```

避免開發期間持續擴張 Scope。

---

# 14. Future Roadmap

```text
Phase 1
Web MVP

Phase 2
AI Features

Phase 3
AWS Deployment

Phase 4
Mobile App
```

可依實際專案修改。

---

# 15. Development Constraints

目前限制：

```text
- 不使用 Docker
- Web First
- REST API First
- Mobile-ready API
```

其他限制：

```text
{{CONSTRAINTS}}
```

---

# 16. Important Decisions

Architecture Decision：

```text
{{ARCHITECTURE_DECISIONS}}
```

例如：

```text
ADR-001
Frontend 與 Backend 分離。

Reason：
未來需要 Mobile App 共用 Backend API。
```

重大決策應記錄原因，不只記錄結果。

---

# 17. Development Status

完成：

```text
{{COMPLETED}}
```

進行中：

```text
{{IN_PROGRESS}}
```

待開發：

```text
{{TODO}}
```

此區應隨專案進度持續更新。
