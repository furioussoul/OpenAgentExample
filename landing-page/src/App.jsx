import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`感谢订阅！邮箱: ${email}`)
    setEmail('')
  }

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero">
        <nav className="nav">
          <div className="logo">🚀 MyProduct</div>
          <div className="nav-links">
            <a href="#features">功能</a>
            <a href="#pricing">价格</a>
            <a href="#contact">联系我们</a>
          </div>
        </nav>
        
        <div className="hero-content">
          <h1>让您的工作效率<span className="highlight">提升 10 倍</span></h1>
          <p className="subtitle">
            简单、快速、高效的解决方案，助您轻松实现目标
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">立即开始</button>
            <button className="btn-secondary">了解更多</button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>核心功能</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>极速体验</h3>
            <p>毫秒级响应，让您的操作流畅无阻</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>安全可靠</h3>
            <p>企业级安全保障，数据加密存储</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>简单易用</h3>
            <p>直观的界面设计，零学习成本</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <h2>价格方案</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>免费版</h3>
            <div className="price">¥0<span>/月</span></div>
            <ul>
              <li>✓ 基础功能</li>
              <li>✓ 5GB 存储</li>
              <li>✓ 邮件支持</li>
            </ul>
            <button className="btn-outline">免费试用</button>
          </div>
          <div className="pricing-card popular">
            <div className="popular-badge">最受欢迎</div>
            <h3>专业版</h3>
            <div className="price">¥99<span>/月</span></div>
            <ul>
              <li>✓ 所有功能</li>
              <li>✓ 100GB 存储</li>
              <li>✓ 优先支持</li>
              <li>✓ API 访问</li>
            </ul>
            <button className="btn-primary">立即购买</button>
          </div>
          <div className="pricing-card">
            <h3>企业版</h3>
            <div className="price">¥299<span>/月</span></div>
            <ul>
              <li>✓ 所有功能</li>
              <li>✓ 无限存储</li>
              <li>✓ 专属客服</li>
              <li>✓ 定制开发</li>
            </ul>
            <button className="btn-outline">联系销售</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>订阅我们的资讯</h2>
        <p>第一时间获取产品更新和优惠信息</p>
        <form onSubmit={handleSubmit} className="subscribe-form">
          <input
            type="email"
            placeholder="请输入您的邮箱"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary">订阅</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">🚀 MyProduct</div>
            <p>让工作更简单</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>产品</h4>
              <a href="#">功能介绍</a>
              <a href="#">价格方案</a>
              <a href="#">更新日志</a>
            </div>
            <div className="footer-column">
              <h4>公司</h4>
              <a href="#">关于我们</a>
              <a href="#">加入我们</a>
              <a href="#">联系我们</a>
            </div>
            <div className="footer-column">
              <h4>支持</h4>
              <a href="#">帮助中心</a>
              <a href="#">隐私政策</a>
              <a href="#">服务条款</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 MyProduct. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
