# AGENTS.md

## 1. Template Overview

本目錄為 Laravel + React 專案 Template。

技術架構：

* Backend：Laravel REST API
* Frontend：React + TypeScript + Vite
* Database：MySQL
* Authentication：Laravel Sanctum
* Cache / Queue：Redis
* Development Environment：Local Environment
* Version Control：Git

本 Template 採用前後端分離架構：

```text
React Web
    │
    │ REST API
    ▼
Laravel API
    │
    ├── MySQL
    └── Redis
```

未來需保留 Mobile App 串接能力：

```text
            React Web
               │
               ▼
         Laravel REST API
               ▲
               │
          Mobile App
```

因此 Backend 不可依賴 React 畫面邏輯。

---

# 2. Development Principles

開發前必須先理解需求，再修改程式。

禁止：

* 未確認需求就大量修改程式
* 將 Business Logic 寫在 Controller
* Frontend 直接依賴 Database 結構
* 在程式中 Hard Code API URL
* 重複實作相同邏輯
* 為未來可能需求過度設計
* 無必要引入新的 Library
* 無必要修改既有 Architecture

優先原則：

1. Correctness
2. Maintainability
3. Readability
4. Testability
5. Performance
6. Extensibility

---

# 3. Knowledge Base

開發前優先參考：

```text
../../Knowledge/Laravel
../../Knowledge/React
../../Knowledge/MySQL
../../Knowledge/Redis
../../Knowledge/Architecture
```

若涉及 AWS：

```text
../../Knowledge/AWS
```

若涉及 AI Agent：

```text
../../Knowledge/AI-Agent
```

若涉及 Queue / Redis：

```text
../../Knowledge/Redis
```

並遵循：

```text
../../AGENTS.md
../../instructions.md
```

若 Global 規則與 Project 規則衝突：

```text
Project Rule
    >
Template Rule
    >
Global Rule
```

但安全性與資料完整性規則不得覆蓋。

---

# 4. Project Context

開始開發前必須先閱讀：

```text
PROJECT.md
```

理解：

* Project Goal
* User Roles
* Business Rules
* Modules
* Database
* API
* UI / UX
* Current Development Phase

不可只根據單一 Prompt 推測整個專案架構。

---

# 5. Backend Architecture

Backend 使用：

```text
api/
```

Laravel 負責：

* REST API
* Authentication
* Authorization
* Business Logic
* Database
* Queue
* Cache
* External Service Integration

建議架構：

```text
Controller
    ↓
Request Validation
    ↓
Service
    ↓
Repository / Model
    ↓
Database
```

Controller 應保持精簡。

Controller 主要負責：

* 接收 Request
* 呼叫 Service
* 回傳 Response

Business Logic 優先放入：

```text
app/Services
```

若 Domain 複雜，可依 Module 拆分：

```text
app/
├── Http/
├── Models/
├── Services/
├── Repositories/
├── Actions/
├── Enums/
└── DTOs/
```

不得為了套 Pattern 而建立沒有實際價值的抽象層。

---

# 6. Laravel Standards

必須：

* 使用 Form Request Validation
* 使用 API Resource 統一 Response
* 使用 Enum 管理固定狀態值
* 使用 Transaction 處理多筆相關資料
* 使用 Exception Handling 統一錯誤
* 避免 N+1 Query
* 適當使用 Eager Loading
* Database Index 必須依 Query Pattern 設計
* Migration 必須可安全執行

命名：

```text
Model              Singular PascalCase
Controller         XxxController
Service            XxxService
Request            XxxRequest
Resource           XxxResource
Table              snake_case plural
Column             snake_case
```

API：

```text
/api/...
```

例如：

```text
GET    /api/restaurants
POST   /api/restaurants
GET    /api/restaurants/{restaurant}
PUT    /api/restaurants/{restaurant}
DELETE /api/restaurants/{restaurant}
```

---

# 7. Database Rules

Database 使用 MySQL。

設計原則：

* 避免重複資料
* 外鍵關係必須明確
* 對搜尋與 Join 欄位建立 Index
* Status 優先使用明確 Enum / TinyInt
* 時間欄位語意必須清楚
* 金額不可使用 Float
* Soft Delete 依實際 Business Requirement 決定

預約、付款、庫存等重要資料：

必須考慮：

* Transaction
* Race Condition
* Idempotency
* Locking
* Unique Constraint

---

# 8. Redis Rules

Redis 僅用於適合 Redis 的場景：

* Cache
* Queue
* Distributed Lock
* Rate Limit
* Temporary State

Redis 不作為主要永久資料來源。

涉及 Lock：

```text
Acquire Lock
    ↓
Re-check Database
    ↓
Execute Transaction
    ↓
Commit
    ↓
Release Lock
```

即使取得 Lock，也必須重新檢查 Database 狀態。

---

# 9. Frontend Architecture

Frontend 使用：

```text
web/
```

技術：

* React
* TypeScript
* Vite

Frontend 負責：

* UI
* Form
* Client-side State
* API Integration
* Routing
* User Interaction

建議結構：

```text
src/
├── api/
├── assets/
├── components/
├── features/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── types/
└── utils/
```

Business Feature 優先放在：

```text
features/
```

例如：

```text
features/
├── auth/
├── restaurants/
├── reservations/
└── tables/
```

---

# 10. API Client

所有 HTTP Request 必須集中管理。

禁止在 Component 中散落：

```typescript
fetch(...)
axios(...)
```

統一使用：

```text
src/api/
```

或 Feature API：

```text
src/features/restaurants/api/
```

API URL 必須從 Environment Variable 取得：

```text
VITE_API_BASE_URL
```

---

# 11. UI / UX

所有新頁面必須遵循專案 `PROJECT.md` 指定之 Design System。

不得自行加入與既有風格不一致的：

* 顏色
* Font Size
* Border Radius
* Shadow
* Button Style
* Form Style

Reusable UI 必須 Component 化。

例如：

```text
Button
Input
Card
Modal
Badge
Table
EmptyState
Loading
```

---

# 12. Authentication

Web Authentication：

```text
Laravel Sanctum
```

登入後 API Request：

```text
React
    ↓
Laravel API
    ↓
Sanctum Authentication
```

權限與 Role 判斷必須由 Backend 執行。

Frontend 隱藏按鈕不能視為 Authorization。

---

# 13. Security

不得：

* Commit `.env`
* Commit API Key
* Commit Password
* Commit AWS Credential
* 將 Secret 寫入 Frontend
* 信任 Frontend 傳入的 User ID / Role
* 直接輸出 Internal Exception

必須考慮：

* Validation
* Authorization
* SQL Injection
* XSS
* CSRF
* Rate Limit
* Mass Assignment
* Sensitive Data Exposure

---

# 14. Testing

Backend 重要 Business Logic 必須優先建立測試。

優先測試：

```text
Authentication
Authorization
Business Rules
Critical APIs
Concurrency-sensitive operations
```

Frontend 優先測試：

```text
Form validation
Critical interactions
Business-critical flows
```

不要求為單純 UI 排版建立沒有價值的測試。

---

# 15. AI Agent Integration

若專案包含 AI Agent：

AI 只能負責：

* Natural Language Understanding
* Intent Recognition
* Structured Parameter Extraction
* Recommendation
* Explanation

AI 不可直接作為 Business Rule 的唯一判斷來源。

例如：

```text
User:
幫我訂明天晚上七點四個人

        ↓

AI Agent

        ↓

{
  "intent": "create_reservation",
  "date": "...",
  "time": "19:00",
  "party_size": 4
}

        ↓

Laravel Business Logic

        ↓

Availability Check

        ↓

Reservation
```

以下判斷必須由 Backend 執行：

* 是否營業
* 是否有空位
* 是否超過人數
* 是否已被預約
* 是否允許取消
* 是否允許修改

不得讓 LLM 直接寫入 Database。

---

# 16. Development Workflow

收到新需求時：

```text
1. 閱讀 PROJECT.md
2. 找出相關 Module
3. 確認目前 Architecture
4. 確認 Database / API 影響
5. 提出實作方案
6. 修改 Backend / Frontend
7. 執行 Test / Lint
8. Integration Review
```

如果需求會修改：

* Database Schema
* API Contract
* Authentication
* Architecture
* Business Rule

必須先說明影響範圍。

---

# 17. Definition of Done

功能完成至少需符合：

* 功能符合需求
* Validation 正確
* Authorization 正確
* API Error Handling 正確
* 沒有明顯 N+1
* 不產生重複邏輯
* Frontend TypeScript 無錯誤
* UI 符合 Design System
* 重要 Business Logic 有測試
* 不暴露 Secret
* 文件有需要時同步更新
