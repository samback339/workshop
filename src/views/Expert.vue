<template>
  <div class="expert">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="hero-bg-decoration">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
      </div>
      <div class="container">
        <h1 class="fade-in">專家介紹</h1>
        <p>認識我們的服務與專業</p>
      </div>
    </section>

    <!-- Profile Section -->
    <section class="section profile">
      <div class="container">
        <div class="profile-card">
          <div class="profile-header">
            <div class="profile-avatar">👨‍💻</div>
            <div class="profile-info">
              <h2>Sam</h2>
              <p class="profile-title">Java 後端軟體工程師</p>
              <div class="profile-rating">
                <span class="stars">⭐⭐⭐⭐⭐</span>
                <span class="rating-text">5.0 (5 個評價)</span>
              </div>
            </div>
          </div>
          <div class="profile-bio">
            <p>您好我叫做 Sam，是一位專業的軟體工程師，專注於全端開發與技術教學。</p>
            <p>擁有豐富的實戰經驗，熟悉前後端技術棧，能夠提供從開發到部署的完整解決方案。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section services">
      <div class="container">
        <h2 class="section-title">服務項目</h2>
        <div class="services-grid">
          <div class="service-card" v-for="(service, index) in services" :key="index">
            <div class="service-icon">{{ service.icon }}</div>
            <h3>{{ service.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Teaching Section -->
    <section class="section teaching">
      <div class="container">
        <h2 class="section-title">🎓 家教經驗</h2>
        <div class="teaching-content">
          <div class="teaching-card">
            <h3>教學科目</h3>
            <div class="subject-tags">
              <span class="subject-tag">Java</span>
              <span class="subject-tag">Spring Boot</span>
              <span class="subject-tag">Python</span>
            </div>
          </div>

          <div class="teaching-methods">
            <h3>🎯 教學方式</h3>
            <div class="method-list">
              <div class="method-item">
                <div class="method-badge primary">主要</div>
                <div class="method-content">
                  <h4>線上授課</h4>
                  <p>使用 Google Meet 進行線上教學</p>
                  <p class="method-note">💡 建議學生準備雙螢幕，以便更好的學習體驗</p>
                </div>
              </div>
              <div class="method-item">
                <div class="method-badge secondary">次要</div>
                <div class="method-content">
                  <h4>面授教學</h4>
                  <p>僅限雙北地區，需有特殊需求</p>
                  <p class="method-note">📍 台北市、新北市</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="section pricing">
      <div class="container">
        <h2 class="section-title">💰 收費方式</h2>
        <p class="section-subtitle">彈性的計費方案</p>

        <div class="pricing-cards">
          <div class="pricing-card">
            <div class="pricing-header">
              <div class="pricing-icon">⏱️</div>
              <h3>計時制</h3>
            </div>
            <div class="pricing-amount">
              <span class="price">$500 - $800</span>
              <span class="unit">/ 每小時</span>
            </div>
            <ul class="pricing-features">
              <li>✓ 彈性安排時間</li>
              <li>✓ 適合短期學習</li>
              <li>✓ 按實際時數計費</li>
            </ul>
          </div>

          <div class="pricing-card featured">
            <div class="badge">推薦</div>
            <div class="pricing-header">
              <div class="pricing-icon">📦</div>
              <h3>專案制</h3>
            </div>
            <div class="pricing-amount">
              <span class="price">依專案評估</span>
            </div>
            <ul class="pricing-features">
              <li>✓ 完整專案開發</li>
              <li>✓ 根據規模報價</li>
              <li>✓ 從規劃到上線</li>
              <li>✓ 提供後續維護</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Important Notes -->
    <section class="section notes">
      <div class="container">
        <h2 class="section-title">⚠️ 注意事項</h2>
        <div class="notes-card">
          <div class="note-item">
            <div class="note-icon">📢</div>
            <p>若同一時期學生人數超過三位，為確保教學品質，將<strong>暫停提供家教服務</strong></p>
          </div>
          <div class="note-item">
            <div class="note-icon">🔒</div>
            <p>若學生提供實際專案作為教學範例，將<strong>遵守保密原則</strong>，不會外流或公開展示</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Time -->
    <section class="section service-time">
      <div class="container">
        <h2 class="section-title">⏰ 服務時段</h2>
        <div class="time-card">
          <div class="time-grid">
            <div class="time-item" v-for="day in serviceDays" :key="day.name">
              <div class="day-name">{{ day.name }}</div>
              <div class="day-time">{{ day.time }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews Section -->
    <section class="section reviews">
      <div class="container">
        <h2 class="section-title">⭐ 服務評價</h2>
        <p class="section-subtitle">客戶的真實反饋</p>

        <div class="reviews-grid">
          <div class="review-card" v-for="(review, index) in reviews" :key="index">
            <div class="review-header">
              <div class="reviewer-avatar">{{ review.avatar }}</div>
              <div class="reviewer-info">
                <h4>{{ review.name }}</h4>
                <div class="review-date">{{ review.date }}</div>
              </div>
              <div class="review-rating">⭐ {{ review.rating }}</div>
            </div>
            <p class="review-content">{{ review.content }}</p>
            <div class="review-service">{{ review.service }}</div>
            <div class="expert-reply" v-if="review.reply">
              <div class="reply-badge">專家回覆</div>
              <p>{{ review.reply }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Links Section -->
    <section class="section links">
      <div class="container">
        <h2 class="section-title">🌐 作品連結</h2>
        <div class="links-grid">
          <a href="https://medium.com/@samtash1034" target="_blank" class="link-card">
            <div class="link-icon">📝</div>
            <h3>部落格</h3>
            <p>medium.com/@samtash1034</p>
          </a>
          <a href="https://github.com/samtash1034" target="_blank" class="link-card">
            <div class="link-icon">💻</div>
            <h3>GitHub</h3>
            <p>github.com/samtash1034</p>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="expert-cta">
      <div class="container">
        <h2>準備開始合作了嗎？</h2>
        <p>歡迎透過以下方式聯繫我們</p>
        <div class="contact-methods">
          <a href="https://medium.com/@samtash1034" target="_blank" class="btn btn-primary">
            聯繫我們
          </a>
          <router-link to="/portfolio" class="btn btn-secondary">
            查看作品
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Expert',
  data() {
    return {
      services: [
        { icon: '💻', name: '電腦課程' },
        { icon: '👨‍🏫', name: '程式語言家教' },
        { icon: '🎨', name: '網頁設計' },
        { icon: '⚙️', name: '軟體開發' }
      ],
      serviceDays: [
        { name: '星期一', time: '09:00 - 24:00' },
        { name: '星期二', time: '09:00 - 24:00' },
        { name: '星期三', time: '09:00 - 24:00' },
        { name: '星期四', time: '09:00 - 24:00' },
        { name: '星期五', time: '09:00 - 24:00' },
        { name: '星期六', time: '09:00 - 24:00' },
        { name: '星期日', time: '09:00 - 24:00' }
      ],
      reviews: [
        {
          avatar: '👤',
          name: 'Ja xxx',
          date: '2025/11/08',
          rating: '5.0',
          content: '負責任、親切、也願意把事情處理好，推薦',
          service: '網站代管',
          reply: null
        },
        {
          avatar: '👤',
          name: '陳〇廷',
          date: '2025/11/07',
          rating: '5.0',
          content: '專業的 Python 教學，收穫很多！',
          service: '程式語言家教',
          reply: '祝福你 Python 學習一切順利，加油！'
        },
        {
          avatar: '👤',
          name: 'Nog xxx',
          date: '2025/09/15',
          rating: '5.0',
          content: '教學認真仔細專業',
          service: '程式語言家教',
          reply: null
        },
        {
          avatar: '👤',
          name: 'Jes xxx',
          date: '2025/06/12',
          rating: '5.0',
          content: '認真負責，效果佳!!!',
          service: '電腦課程',
          reply: '謝謝爸爸的好評，也祝福兒子學習順利、收穫滿滿！'
        },
        {
          avatar: '👤',
          name: '潘〇儒',
          date: '2025/01/17',
          rating: '5.0',
          content: '很積極的專家，也十分有耐心的和我溝通我的需求',
          service: '程式語言家教',
          reply: '謝謝你的評價！跟你合作過程很愉快！'
        }
      ]
    }
  }
}
</script>

<style scoped>
.expert {
  margin-top: 70px;
}

/* Page Hero */
.page-hero {
  background: var(--gradient-2);
  color: white;
  padding: 100px 20px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-bg-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -100px;
  animation-delay: 0s;
}

.circle-2 {
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: -50px;
  animation-delay: 2s;
}

.circle-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  left: 10%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

.page-hero .container {
  position: relative;
  z-index: 1;
}

.page-hero h1 {
  font-size: 3rem;
  margin-bottom: 15px;
}

.page-hero p {
  font-size: 1.3rem;
  opacity: 0.9;
}

/* Profile Section */
.profile {
  background: var(--light-color);
}

.profile-card {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 0;
  padding: 50px;
  box-shadow: var(--shadow);
}

.profile-header {
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
  align-items: center;
}

.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--gradient-1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  flex-shrink: 0;
}

.profile-info h2 {
  font-size: 2rem;
  color: var(--dark-color);
  margin-bottom: 10px;
}

.profile-title {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 15px;
}

.profile-rating {
  display: flex;
  align-items: center;
  gap: 10px;
}

.stars {
  font-size: 1.2rem;
}

.rating-text {
  color: #666;
  font-weight: 600;
}

.profile-bio {
  line-height: 1.8;
  font-size: 1.1rem;
  color: var(--text-color);
}

.profile-bio p {
  margin-bottom: 15px;
}

/* Services Section */
.services {
  background: white;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.service-card {
  padding: 30px;
  background: var(--light-color);
  border-radius: 0;
  text-align: center;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.service-card h3 {
  font-size: 1.1rem;
  color: var(--dark-color);
}

/* Teaching Section */
.teaching {
  background: var(--light-color);
}

.teaching-content {
  max-width: 900px;
  margin: 0 auto;
}

.teaching-card {
  background: white;
  padding: 40px;
  border-radius: 0;
  margin-bottom: 30px;
  box-shadow: var(--shadow);
}

.teaching-card h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--dark-color);
}

.subject-tags {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.subject-tag {
  padding: 12px 25px;
  background: var(--gradient-1);
  color: white;
  border-radius: 0;
  font-weight: 600;
  font-size: 1.1rem;
}

.teaching-methods {
  background: white;
  padding: 40px;
  border-radius: 0;
  box-shadow: var(--shadow);
}

.teaching-methods h3 {
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: var(--dark-color);
}

.method-list {
  display: grid;
  gap: 25px;
}

.method-item {
  display: flex;
  gap: 20px;
  padding: 25px;
  background: var(--light-color);
  border-radius: 0;
}

.method-badge {
  padding: 8px 20px;
  border-radius: 0;
  font-weight: 700;
  font-size: 0.9rem;
  height: fit-content;
  white-space: nowrap;
}

.method-badge.primary {
  background: var(--gradient-2);
  color: white;
}

.method-badge.secondary {
  background: #e0e0e0;
  color: #666;
}

.method-content h4 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: var(--dark-color);
}

.method-content p {
  color: #666;
  margin-bottom: 8px;
  line-height: 1.6;
}

.method-note {
  font-style: italic;
  color: var(--primary-color);
}

/* Pricing Section */
.pricing {
  background: white;
}

.pricing-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
}

.pricing-card {
  background: white;
  border: 3px solid var(--light-color);
  border-radius: 0;
  padding: 40px;
  transition: all 0.3s ease;
  position: relative;
}

.pricing-card.featured {
  border-color: var(--primary-color);
  transform: scale(1.05);
  box-shadow: var(--shadow-hover);
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}

.pricing-card.featured:hover {
  transform: scale(1.05) translateY(-5px);
}

.badge {
  position: absolute;
  top: -15px;
  right: 30px;
  background: var(--gradient-2);
  color: white;
  padding: 8px 20px;
  border-radius: 0;
  font-weight: 700;
}

.pricing-header {
  text-align: center;
  margin-bottom: 25px;
}

.pricing-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.pricing-header h3 {
  font-size: 1.8rem;
  color: var(--dark-color);
}

.pricing-amount {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 2px solid var(--light-color);
}

.price {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  display: block;
  margin-bottom: 5px;
}

.unit {
  color: #666;
  font-size: 1rem;
}

.pricing-features {
  list-style: none;
}

.pricing-features li {
  padding: 12px 0;
  color: var(--text-color);
  font-size: 1.1rem;
}

/* Notes Section */
.notes {
  background: var(--light-color);
}

.notes-card {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 0;
  padding: 40px;
  box-shadow: var(--shadow);
}

.note-item {
  display: flex;
  gap: 20px;
  padding: 25px;
  background: #fff3cd;
  border-left: 5px solid #ffc107;
  border-radius: 0;
  margin-bottom: 20px;
}

.note-item:last-child {
  margin-bottom: 0;
}

.note-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.note-item p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}

.note-item strong {
  color: #c82333;
}

/* Service Time */
.service-time {
  background: white;
}

.time-card {
  max-width: 700px;
  margin: 0 auto;
  background: var(--light-color);
  border-radius: 0;
  padding: 40px;
  box-shadow: var(--shadow);
}

.time-grid {
  display: grid;
  gap: 15px;
}

.time-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: white;
  border-radius: 0;
}

.day-name {
  font-weight: 700;
  color: var(--dark-color);
  font-size: 1.1rem;
}

.day-time {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 1.1rem;
}

/* Reviews Section */
.reviews {
  background: var(--light-color);
}

.reviews-grid {
  display: grid;
  gap: 25px;
  max-width: 900px;
  margin: 0 auto;
}

.review-card {
  background: white;
  padding: 30px;
  border-radius: 0;
  box-shadow: var(--shadow);
}

.review-header {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  align-items: center;
}

.reviewer-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--gradient-3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.reviewer-info {
  flex: 1;
}

.reviewer-info h4 {
  font-size: 1.1rem;
  color: var(--dark-color);
  margin-bottom: 5px;
}

.review-date {
  color: #999;
  font-size: 0.9rem;
}

.review-rating {
  font-weight: 700;
  color: #ffc107;
  font-size: 1.1rem;
}

.review-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
  margin-bottom: 15px;
}

.review-service {
  display: inline-block;
  padding: 6px 15px;
  background: var(--light-color);
  border-radius: 0;
  font-size: 0.9rem;
  color: #666;
}

.expert-reply {
  margin-top: 20px;
  padding: 20px;
  background: #e8f5e9;
  border-left: 4px solid #4caf50;
  border-radius: 0;
}

.reply-badge {
  display: inline-block;
  padding: 4px 12px;
  background: #4caf50;
  color: white;
  border-radius: 0;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.expert-reply p {
  color: #2e7d32;
  line-height: 1.6;
}

/* Links Section */
.links {
  background: white;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
}

.link-card {
  padding: 40px;
  background: var(--light-color);
  border-radius: 0;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: var(--shadow);
}

.link-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-hover);
}

.link-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.link-card h3 {
  font-size: 1.5rem;
  color: var(--dark-color);
  margin-bottom: 10px;
}

.link-card p {
  color: #666;
  word-break: break-all;
}

/* CTA Section */
.expert-cta {
  background: var(--gradient-1);
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.expert-cta h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.expert-cta p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.contact-methods {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 768px) {
  .page-hero h1 {
    font-size: 2.2rem;
  }

  .profile-card {
    padding: 30px 20px;
  }

  .profile-header {
    flex-direction: column;
    text-align: center;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .pricing-cards {
    grid-template-columns: 1fr;
  }

  .pricing-card.featured {
    transform: scale(1);
  }

  .method-item {
    flex-direction: column;
  }

  .links-grid {
    grid-template-columns: 1fr;
  }
}
</style>
