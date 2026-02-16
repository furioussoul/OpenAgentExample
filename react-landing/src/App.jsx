import './App.css'

function App() {
  return (
    <div className="landing-page">
      {/* 导航栏 */}
      <nav className="navbar">
        <div className="logo">🚀 MyApp</div>
        <div className="nav-links">
          <a href="#features">功能</a>
          <a href="#about">关于</a>
          <a href="#contact">联系我们</a>
        </div>
      </nav>

      {/* Hero区域 */}
      <section className="hero">
        <h1>打造你的下一个伟大产品</h1>
        <p>简单、快速、高效的解决方案，助力你的业务腾飞</p>
        <div className="hero-buttons">
          <button className="btn-primary">立即开始</button>
          <button className="btn-secondary">了解更多</button>
        </div>
      </section>

      {/* 功能特点 */}
      <section id="features" className="features">
        <h2>核心功能</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>极速响应</h3>
            <p>毫秒级响应速度，提供流畅的用户体验</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>安全可靠</h3>
            <p>企业级安全防护，保障数据安全</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>精准高效</h3>
            <p>智能化处理，提升工作效率</p>
          </div>
        </div>
      </section>

      {/* 关于我们 */}
      <section id="about" className="about">
        <h2>关于我们</h2>
        <p>我们是一支充满激情的团队，致力于为用户提供最优质的产品和服务。</p>
      </section>

      {/* 页脚 */}
      <footer id="contact" className="footer">
        <p>© 2024 MyApp. All rights reserved.</p>
        <p>联系邮箱: contact@myapp.com</p>
      </footer>
    </div>
  )
}

export default App
