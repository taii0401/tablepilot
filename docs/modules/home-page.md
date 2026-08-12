# Home Page

## 1. Overview

建立 TablePilot 一般用戶首頁。

目前階段以完成網站 UI / UX 為主，使用 Static Mock Data，不串接 Laravel API。

首頁的主要目的：

1. 讓使用者快速理解 TablePilot 是餐廳探索與預約平台。
2. 讓使用者可以依日期、時間、人數搜尋餐廳。
3. 提供 AI 預約入口。
4. 展示熱門餐廳與餐廳分類。
5. 引導餐廳店家進入店家登入 / 註冊流程。

---

# 2. Target User

主要使用者：

```text
一般餐廳消費者
```

一般使用者目前：

* 不需要登入
* 可以瀏覽餐廳
* 可以搜尋餐廳
* 未來可以直接建立預約

餐廳店家：

* 從首頁進入店家登入 / 註冊頁面

---

# 3. Route

首頁：

```text
/
```

---

# 4. Page Structure

首頁由以下區塊組成：

```text
Header
    ↓
Hero / Search
    ↓
Popular Restaurants
    ↓
Restaurant Categories
    ↓
AI Reservation Introduction
    ↓
How It Works
    ↓
Restaurant Owner CTA
    ↓
Footer
```

---

# 5. Header

## Content

左側：

```text
TablePilot Logo
TablePilot
```

Navigation：

```text
首頁
探索餐廳
AI 預約
```

右側：

```text
店家登入
```

## Behavior

目前：

* 首頁連結指向 `/`
* 其他尚未完成的功能可以暫時不導頁
* 不需要建立空白頁面
* 不需要建立登入功能

---

# 6. Hero Section

Hero 為首頁主要視覺區域。

Desktop 使用左右兩欄。

左側：

```text
Headline

找到適合你的餐廳，
享受每一次用餐時光。

Description

搜尋餐廳、選擇時間，
或直接告訴 AI 你的需求。
```

提供主要搜尋區：

```text
地區
日期
時間
人數

[搜尋餐廳]
```

並提供 AI 預約入口：

```text
不知道怎麼選？

直接告訴 AI：

「幫我找星期六晚上台北適合 4 個人的餐廳」

[AI 幫我找]
```

右側：

```text
餐廳情境圖片
```

圖片風格：

* 自然光
* 木質
* 暖色
* 舒適餐廳
* 不使用過度奢華風格

---

# 7. Search Form

搜尋條件：

### Location

例如：

```text
台北市
```

### Date

使用：

```text
date input
```

### Time

例如：

```text
18:00
18:30
19:00
19:30
20:00
```

### Party Size

例如：

```text
2 人
3 人
4 人
5 人
6 人
```

### Search

Primary Button：

```text
搜尋餐廳
```

目前 Submit：

```text
不呼叫 API
```

可以暫時使用：

```text
console.log()
```

不建立搜尋結果頁。

---

# 8. AI Reservation Entry

提供自然語言 Input。

Placeholder：

```text
例如：幫我找星期六晚上台北適合 4 個人的餐廳
```

Button：

```text
AI 幫我找
```

提供 Quick Suggestions：

```text
今晚兩人約會
週末家庭聚餐
台北四人餐廳
一人 $1000 內
```

點擊 Suggestion：

將內容填入 AI Input。

目前：

```text
不呼叫 AI API
```

---

# 9. Popular Restaurants

Section Title：

```text
熱門餐廳
```

Description：

```text
探索最近受到大家喜愛的餐廳
```

目前使用 Static Mock Data。

至少顯示 6 家餐廳。

Restaurant Card：

```text
Restaurant Image

Restaurant Name

Category
Location

Rating
Average Price

查看餐廳
```

Mock Data Example：

```text
山里 Kitchen
日式料理
台北市信義區
4.8
約 $800 / 人
```

Desktop：

```text
3 Cards / Row
```

Tablet：

```text
2 Cards / Row
```

Mobile：

```text
1 Card / Row
```

目前 Restaurant Card 不需要導向 Restaurant Detail Page。

---

# 10. Restaurant Categories

Section Title：

```text
今天想吃什麼？
```

Categories：

```text
日式料理
義式料理
牛排
火鍋
中式料理
咖啡廳
```

可使用簡單 Icon。

目前：

```text
Static UI Only
```

不建立 Category API。

不建立 Category Result Page。

---

# 11. AI Reservation Introduction

介紹 TablePilot AI 預約功能。

Title：

```text
不知道怎麼選？
交給 AI
```

Example：

```text
星期六晚上，
台北，
四個人，
希望安靜一點，
一人預算 $1000。
```

Flow：

```text
理解需求
    ↓
尋找適合餐廳
    ↓
檢查可預約時間
    ↓
推薦其他時段
    ↓
完成預約
```

目前只做功能介紹。

不實作 AI Agent。

---

# 12. How It Works

使用三個步驟說明預約流程。

```text
01
找餐廳

依照地區、時間與人數
尋找適合的餐廳。


02
選擇時間

查看餐廳可以預約的日期與時段。


03
完成預約

填寫基本資料後即可完成訂位。
```

另外顯示：

```text
也可以直接告訴 AI 你的需求。
```

---

# 13. Restaurant Owner CTA

首頁接近 Footer 前顯示店家 CTA。

Title：

```text
你是餐廳店家嗎？
```

Description：

```text
加入 TablePilot，
管理餐廳、桌位、營業時間與每日預約。
```

CTA：

```text
店家免費加入
```

目前：

```text
不需要實作註冊頁。
```

---

# 14. Footer

顯示：

```text
TablePilot

探索餐廳
AI 預約
店家登入

服務條款
隱私權政策

© 2026 TablePilot
```

目前未完成頁面不需要建立。

---

# 15. Design System

Design Style：

```text
Warm Minimal
```

## Colors

```text
Primary
#D9822B

Primary Hover
#C76F1E

Primary Soft
#FBE8D2

Background
#FAF7F2

Surface
#FFFFFF

Surface Warm
#FFF9F2

Text Primary
#332820

Text Secondary
#75675C

Border
#E9DED2

Success
#588157

Warning
#D69E2E

Error
#C75B4B
```

## Color Usage

大致比例：

```text
70% Warm White / Background
20% White / Neutral
10% Primary Orange
```

Primary Orange 主要使用於：

* Search Button
* AI CTA
* Important Action

避免整頁大量使用橘色。

---

# 16. UI Style

### Border Radius

```text
Input       12px
Button      12px
Card        16px
Large Card  20px
```

### Shadow

使用非常輕微 Shadow。

避免：

* Heavy Shadow
* Gradient
* Glassmorphism
* Neon Color
* Dark SaaS Dashboard Style

### Typography

優先：

```text
Noto Sans TC
PingFang TC
Microsoft JhengHei
sans-serif
```

---

# 17. Responsive

必須支援：

```text
Desktop
Tablet
Mobile
```

Mobile：

* Header 簡化
* Hero 改成單欄
* Search Form 垂直排列
* Restaurant Card 單欄
* 不可產生 Horizontal Overflow

未來 Mobile App 將沿用相同 Design System。

---

# 18. Mock Data

目前所有餐廳資料使用 Frontend Static Mock Data。

例如：

```text
Restaurant
Category
Location
Rating
Price
Image
```

Mock Data 可以暫時直接存在 HomePage。

目前不要建立：

```text
mock/
fixtures/
services/
repositories/
```

等 API Integration 階段再抽離。

---

# 19. Current Scope

本次只實作：

* Home Page
* Responsive Layout
* Warm Minimal Design
* Static Restaurant Data
* Static Category Data
* Search UI
* AI Prompt UI
* Restaurant Owner CTA

---

# 20. Out of Scope

本次禁止實作：

* Laravel API Integration
* Authentication
* Restaurant Detail Page
* Restaurant Search Result Page
* Reservation API
* AI API
* AI Agent
* Redux
* Zustand
* Global State
* API Client
* Restaurant Service
* Repository
* DTO
* Backend
* Database

不要因為未來可能需要而提前建立相關檔案。

---

# 21. File Scope

本次優先只新增：

```text
frontend/src/pages/HomePage.tsx
frontend/src/styles/theme.css
```

必要時修改：

```text
frontend/src/App.tsx
frontend/src/main.tsx
```

如果目前專案結構不同，優先沿用既有結構。

不要為每個 Section 建立 Component。

例如目前不要建立：

```text
Header.tsx
Hero.tsx
SearchForm.tsx
RestaurantCard.tsx
CategoryCard.tsx
AISection.tsx
HowItWorks.tsx
Footer.tsx
```

第一版可以先集中在：

```text
HomePage.tsx
```

當其他頁面需要共用，或 HomePage 複雜度明顯提高時，再進行 Component Refactor。

---

# 22. Definition of Done

完成條件：

* `/` 可以正常顯示首頁
* 符合 Warm Minimal Design
* Desktop 顯示正常
* Tablet 顯示正常
* Mobile 顯示正常
* Search UI 可以操作
* AI Input 可以輸入
* Quick Suggestion 可以填入 Input
* Restaurant Mock Data 正常顯示
* TypeScript Build 通過
* 沒有 Horizontal Overflow
* 沒有建立 Scope 外功能
