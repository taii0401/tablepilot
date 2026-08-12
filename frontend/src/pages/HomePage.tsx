import { useState, type FormEvent } from 'react'
import '../styles/theme.css'

const restaurants = [
  {
    name: '山里 Kitchen',
    category: '日式料理',
    location: '台北市信義區',
    rating: '4.8',
    price: '約 $800 / 人',
    image:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: '日光小館',
    category: '義式料理',
    location: '台北市大安區',
    rating: '4.7',
    price: '約 $700 / 人',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: '木寓牛排館',
    category: '牛排',
    location: '台北市松山區',
    rating: '4.9',
    price: '約 $1,200 / 人',
    image:
      'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: '暖鍋食堂',
    category: '火鍋',
    location: '台北市中山區',
    rating: '4.6',
    price: '約 $650 / 人',
    image:
      'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: '拾味小院',
    category: '中式料理',
    location: '台北市中正區',
    rating: '4.8',
    price: '約 $900 / 人',
    image:
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: '午後木光',
    category: '咖啡廳',
    location: '台北市士林區',
    rating: '4.7',
    price: '約 $450 / 人',
    image:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=85',
  },
]

const categories = [
  { icon: '🍣', name: '日式料理' },
  { icon: '🍝', name: '義式料理' },
  { icon: '🥩', name: '牛排' },
  { icon: '🍲', name: '火鍋' },
  { icon: '🥢', name: '中式料理' },
  { icon: '☕', name: '咖啡廳' },
]

const suggestions = [
  '今晚兩人約會',
  '週末家庭聚餐',
  '台北四人餐廳',
  '一人 $1000 內',
]

function HomePage() {
  const [aiPrompt, setAiPrompt] = useState('')

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const searchData = Object.fromEntries(new FormData(event.currentTarget))
    console.log('Search restaurants:', searchData)
  }

  const handleAiSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('AI reservation prompt:', aiPrompt)
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="/" aria-label="TablePilot 首頁">
            <span className="brand-mark" aria-hidden="true">T</span>
            <span>TablePilot</span>
          </a>
          <nav className="main-nav" aria-label="主要導覽">
            <a className="active" href="/">首頁</a>
            <a href="#restaurants">探索餐廳</a>
            <a href="#ai-reservation">AI 預約</a>
          </nav>
          <button className="text-button" type="button">店家登入</button>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-layout">
            <div className="hero-content">
              <p className="eyebrow">探索城市裡的美好餐桌</p>
              <h1>找到適合你的餐廳，<br />享受每一次用餐時光。</h1>
              <p className="hero-description">
                搜尋餐廳、選擇時間，<br />或直接告訴 AI 你的需求。
              </p>

              <form className="search-panel" onSubmit={handleSearch}>
                <label>
                  <span>地區</span>
                  <select name="location" defaultValue="台北市">
                    <option>台北市</option>
                    <option>新北市</option>
                    <option>桃園市</option>
                  </select>
                </label>
                <label>
                  <span>日期</span>
                  <input name="date" type="date" />
                </label>
                <label>
                  <span>時間</span>
                  <select name="time" defaultValue="19:00">
                    {['18:00', '18:30', '19:00', '19:30', '20:00'].map((time) => (
                      <option key={time}>{time}</option>
                    ))}
                  </select>
                </label>
                <label>
                  <span>人數</span>
                  <select name="partySize" defaultValue="2 人">
                    {['2 人', '3 人', '4 人', '5 人', '6 人'].map((size) => (
                      <option key={size}>{size}</option>
                    ))}
                  </select>
                </label>
                <button className="primary-button search-button" type="submit">
                  搜尋餐廳
                </button>
              </form>
            </div>

            <div className="hero-visual">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=90"
                alt="自然光灑落的溫暖木質餐廳空間"
              />
              <div className="hero-note">
                <span aria-hidden="true">★</span>
                <div><strong>4.8</strong><small>人氣餐廳平均評分</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="quick-ai-section" aria-labelledby="quick-ai-title">
          <div className="container">
            <div className="quick-ai-card">
              <div className="quick-ai-copy">
                <span className="ai-icon" aria-hidden="true">✦</span>
                <div>
                  <p className="eyebrow">不知道怎麼選？</p>
                  <h2 id="quick-ai-title">直接告訴 AI 你的用餐需求</h2>
                </div>
              </div>
              <form className="ai-form" onSubmit={handleAiSubmit}>
                <div className="ai-input-row">
                  <input
                    value={aiPrompt}
                    onChange={(event) => setAiPrompt(event.target.value)}
                    placeholder="例如：幫我找星期六晚上台北適合 4 個人的餐廳"
                    aria-label="告訴 AI 你的用餐需求"
                  />
                  <button className="primary-button" type="submit">AI 幫我找</button>
                </div>
                <div className="suggestions" aria-label="快速建議">
                  {suggestions.map((suggestion) => (
                    <button key={suggestion} type="button" onClick={() => setAiPrompt(suggestion)}>
                      {suggestion}
                    </button>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="section" id="restaurants">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow">大家的口袋名單</p><h2>熱門餐廳</h2></div>
              <p>探索最近受到大家喜愛的餐廳</p>
            </div>
            <div className="restaurant-grid">
              {restaurants.map((restaurant) => (
                <article className="restaurant-card" key={restaurant.name}>
                  <img src={restaurant.image} alt={`${restaurant.name}餐廳空間`} loading="lazy" />
                  <div className="restaurant-card-body">
                    <div className="card-title-row">
                      <h3>{restaurant.name}</h3>
                      <span className="rating">★ {restaurant.rating}</span>
                    </div>
                    <p>{restaurant.category} · {restaurant.location}</p>
                    <div className="card-footer">
                      <strong>{restaurant.price}</strong>
                      <button type="button">查看餐廳 <span aria-hidden="true">→</span></button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section categories-section">
          <div className="container">
            <div className="center-heading"><p className="eyebrow">依照你的心情選擇</p><h2>今天想吃什麼？</h2></div>
            <div className="category-grid">
              {categories.map((category) => (
                <button className="category-card" type="button" key={category.name}>
                  <span aria-hidden="true">{category.icon}</span>
                  <strong>{category.name}</strong>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="ai-reservation">
          <div className="container ai-intro">
            <div className="ai-example">
              <span className="ai-icon" aria-hidden="true">✦</span>
              <p>星期六晚上，<br />台北，四個人，<br />希望安靜一點，<br />一人預算 $1000。</p>
            </div>
            <div className="ai-intro-copy">
              <p className="eyebrow">TablePilot AI 預約</p>
              <h2>不知道怎麼選？<br />交給 AI</h2>
              <p>用一句話告訴我們你的需求，TablePilot 會協助整理條件，找到更適合你的選擇。</p>
              <ol className="ai-flow">
                {['理解需求', '尋找適合餐廳', '檢查可預約時間', '推薦其他時段', '完成預約'].map((step, index) => (
                  <li key={step}><span>{index + 1}</span>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section how-section">
          <div className="container">
            <div className="center-heading"><p className="eyebrow">簡單三步驟</p><h2>輕鬆完成餐廳預約</h2></div>
            <div className="steps-grid">
              {[
                ['01', '找餐廳', '依照地區、時間與人數，尋找適合的餐廳。'],
                ['02', '選擇時間', '查看餐廳可以預約的日期與時段。'],
                ['03', '完成預約', '填寫基本資料後即可完成訂位。'],
              ].map(([number, title, description]) => (
                <article className="step-card" key={number}>
                  <span>{number}</span><h3>{title}</h3><p>{description}</p>
                </article>
              ))}
            </div>
            <p className="ai-alternative"><span aria-hidden="true">✦</span> 也可以直接告訴 AI 你的需求。</p>
          </div>
        </section>

        <section className="owner-section">
          <div className="container owner-card">
            <div><p className="eyebrow">與我們一起創造好體驗</p><h2>你是餐廳店家嗎？</h2><p>加入 TablePilot，管理餐廳、桌位、營業時間與每日預約。</p></div>
            <button className="light-button" type="button">店家免費加入 <span aria-hidden="true">→</span></button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand" href="/" aria-label="TablePilot 首頁"><span className="brand-mark" aria-hidden="true">T</span><span>TablePilot</span></a>
          <nav aria-label="頁尾導覽"><a href="#restaurants">探索餐廳</a><a href="#ai-reservation">AI 預約</a><button type="button">店家登入</button></nav>
          <nav aria-label="法律資訊"><button type="button">服務條款</button><button type="button">隱私權政策</button></nav>
        </div>
        <div className="container copyright">© 2026 TablePilot</div>
      </footer>
    </div>
  )
}

export default HomePage
