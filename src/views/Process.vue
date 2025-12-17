<template>
  <div class="process">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="hero-bg-decoration">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
      </div>
      <div class="container">
        <h1 class="fade-in">服務流程</h1>
        <p>專業透明的合作流程，讓專案開發更順利</p>
      </div>
    </section>

    <!-- Process Steps -->
    <section class="section process-steps">
      <div class="container">
        <h2 class="section-title">🔄 從諮詢到上線，五大步驟</h2>
        <p class="section-subtitle">清晰的流程，確保專案品質</p>

        <div class="steps-container">
          <div class="step-card" v-for="(step, index) in steps" :key="index">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <div class="step-icon">{{ step.icon }}</div>
              <h3>{{ step.title }}</h3>
              <p class="step-description">{{ step.description }}</p>
              <ul class="step-details">
                <li v-for="(detail, i) in step.details" :key="i">{{ detail }}</li>
              </ul>
            </div>
            <div class="step-arrow" v-if="index < steps.length - 1">→</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="section timeline">
      <div class="container">
        <h2 class="section-title">⏱️ 專案時程參考</h2>
        <p class="section-subtitle">實際時程依專案規模調整</p>

        <div class="timeline-container">
          <div class="timeline-item" v-for="(item, index) in timeline" :key="index">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>{{ item.phase }}</h3>
              <p class="timeline-duration">{{ item.duration }}</p>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Process',
  data() {
    return {
      steps: [
        {
          icon: '📞',
          title: '諮詢報價',
          description: '了解需求，提供專業建議與報價',
          details: [
            '需求討論與分析',
            '技術可行性評估',
            '時程與預算規劃',
            '提供詳細報價單'
          ]
        },
        {
          icon: '🎨',
          title: '首頁設計定稿',
          description: '設計首頁視覺與架構',
          details: [
            '提供設計草稿',
            '根據回饋調整',
            '確認視覺風格',
            '首頁設計定稿'
          ]
        },
        {
          icon: '📱',
          title: '內頁設計定稿',
          description: '完成所有頁面設計',
          details: [
            '內頁設計展開',
            '保持一致性風格',
            '互動效果規劃',
            '全站設計確認'
          ]
        },
        {
          icon: '💻',
          title: '程式製作',
          description: '前後端開發與功能實作',
          details: [
            '前端切版與開發',
            '後端API建置',
            '功能整合測試',
            '效能優化調整'
          ]
        },
        {
          icon: '🚀',
          title: '結案上線',
          description: '部署上線與交付',
          details: [
            '最終測試驗收',
            '正式環境部署',
            '教育訓練說明',
            '原始碼交付'
          ]
        }
      ],
      timeline: [
        {
          phase: '諮詢報價階段',
          duration: '1-3 個工作天',
          description: '快速回應需求，提供專業評估'
        },
        {
          phase: '設計階段',
          duration: '1-2 週',
          description: '視覺設計與使用者體驗規劃'
        },
        {
          phase: '開發階段',
          duration: '2-6 週',
          description: '依專案規模調整開發時間'
        },
        {
          phase: '測試與上線',
          duration: '3-5 個工作天',
          description: '確保品質後正式上線'
        }
      ]
    }
  }
}
</script>

<style scoped>
.process {
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

/* Process Steps */
.process-steps {
  background: var(--light-color);
}

.steps-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.step-card {
  background: white;
  border-radius: 0;
  padding: 40px;
  box-shadow: var(--shadow);
  display: grid;
  grid-template-columns: 80px 1fr 60px;
  gap: 30px;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
}

.step-card:hover {
  transform: translateX(10px);
  box-shadow: var(--shadow-hover);
}

.step-number {
  width: 80px;
  height: 80px;
  background: var(--gradient-1);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 700;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.step-content h3 {
  font-size: 1.8rem;
  color: var(--dark-color);
  margin-bottom: 10px;
}

.step-description {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.step-details {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}

.step-details li {
  color: #666;
  padding: 8px 0 8px 25px;
  position: relative;
}

.step-details li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--secondary-color);
  font-weight: 700;
}

.step-arrow {
  font-size: 3rem;
  color: var(--primary-color);
  text-align: center;
  font-weight: 700;
}

/* Timeline */
.timeline {
  background: white;
}

.timeline-container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline-container::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--gradient-1);
}

.timeline-item {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  position: relative;
}

.timeline-dot {
  width: 60px;
  height: 60px;
  background: var(--gradient-1);
  border-radius: 50%;
  flex-shrink: 0;
  border: 4px solid white;
  box-shadow: var(--shadow);
  z-index: 1;
}

.timeline-content {
  flex: 1;
  background: var(--light-color);
  padding: 30px;
  border-radius: 0;
  box-shadow: var(--shadow);
}

.timeline-content h3 {
  font-size: 1.5rem;
  color: var(--dark-color);
  margin-bottom: 10px;
}

.timeline-duration {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 15px;
}

.timeline-content p {
  color: #666;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .page-hero h1 {
    font-size: 2.2rem;
  }

  .step-card {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .step-arrow {
    transform: rotate(90deg);
  }

  .step-details {
    grid-template-columns: 1fr;
  }

  .timeline-container::before {
    left: 15px;
  }

  .timeline-dot {
    width: 30px;
    height: 30px;
  }
}
</style>
