<template>
  <div class="courses">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <h1 class="fade-in">教學案例</h1>
        <p>實戰教學經驗分享</p>
      </div>
    </section>

    <!-- Courses Grid -->
    <section class="section projects">
      <div class="container">
        <h2 class="section-title">📚 教學專案</h2>
        <p class="section-subtitle">Spring Boot 與 Python 實戰教學</p>

        <div class="projects-grid">
          <div class="project-card" v-for="(course, index) in courses" :key="index" @click="goToDetail(course.id)">
            <div class="project-image">
              <img
                :src="getCurrentImage(course)"
                :alt="course.title"
                class="project-img"
              />
            </div>
            <div class="project-content">
              <div class="course-badge">{{ course.tech }}</div>
              <h3>{{ course.title }}</h3>
              <p class="project-description">{{ course.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="courses-cta">
      <div class="container">
        <h2>想學習這些技術？</h2>
        <p>我們提供客製化的教學服務</p>
        <router-link to="/expert" class="btn btn-primary">立即聯繫</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Courses',
  data() {
    return {
      courses: [
        {
          id: 'springboot-ecommerce',
          folder: 'springboot-ecommerce',
          tech: 'Spring Boot',
          title: 'Spring Boot 電商系統開發',
          description: '從零開始打造完整的電商後端系統，包含商品管理、訂單處理、會員系統等核心功能',
          tags: ['Spring Boot', 'MySQL', 'Redis', 'JWT'],
          features: [
            'RESTful API 設計與實作',
            'Spring Security 權限控管',
            'MyBatis 資料庫操作',
            'Redis 快取應用',
            'JWT 身份驗證',
            '第三方金流串接'
          ],
          images: []
        },
        {
          id: 'springboot-microservices',
          folder: 'springboot-microservices',
          tech: 'Spring Boot',
          title: 'Spring Boot 微服務架構',
          description: '學習微服務架構設計，使用 Spring Cloud 建構分散式系統',
          tags: ['Spring Boot', 'Spring Cloud', 'Docker', 'Kubernetes'],
          features: [
            '微服務架構設計',
            'Spring Cloud Gateway 閘道器',
            'Eureka 服務註冊與發現',
            'Feign 服務間通訊',
            'Docker 容器化部署',
            'Kubernetes 容器編排'
          ],
          images: []
        },
        {
          id: 'python-data-analysis',
          folder: 'python-data-analysis',
          tech: 'Python',
          title: 'Python 數據分析與視覺化',
          description: '使用 Python 進行數據分析、處理與視覺化，從數據中挖掘價值',
          tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
          features: [
            'Pandas 數據處理',
            'NumPy 數值運算',
            'Matplotlib 資料視覺化',
            'Jupyter Notebook 實作',
            '網路爬蟲資料收集',
            '機器學習基礎應用'
          ],
          images: []
        }
      ]
    }
  },
  methods: {
    getCurrentImage(course) {
      const basePath = import.meta.env.BASE_URL
      if (course.images.length > 0) {
        return `${basePath}courses/${course.folder}/${course.images[0]}`
      } else {
        return `${basePath}courses/${course.folder}/default.svg`
      }
    },
    goToDetail(courseId) {
      this.$router.push(`/courses/${courseId}`)
    }
  }
}
</script>

<style scoped>
.courses {
  margin-top: 70px;
}

/* Page Hero */
.page-hero {
  background: var(--gradient-2);
  color: white;
  padding: 100px 20px 80px;
  text-align: center;
}

.page-hero h1 {
  font-size: 3rem;
  margin-bottom: 15px;
}

.page-hero p {
  font-size: 1.3rem;
  opacity: 0.9;
}

/* Projects Section */
.projects {
  background: var(--light-color);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.project-card {
  background: white;
  border-radius: 0;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-hover);
}

.project-image {
  background: #f5f5f5;
  height: 280px;
  overflow: hidden;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.project-content {
  padding: 30px;
  position: relative;
}

.course-badge {
  display: inline-block;
  padding: 6px 15px;
  background: var(--gradient-1);
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 15px;
  border-radius: 0;
}

.project-content h3 {
  font-size: 1.5rem;
  color: var(--dark-color);
  margin-bottom: 15px;
}

.project-description {
  color: #666;
  line-height: 1.8;
}

/* Courses CTA */
.courses-cta {
  background: var(--gradient-3);
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.courses-cta h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.courses-cta p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

/* Responsive */
@media (max-width: 768px) {
  .page-hero h1 {
    font-size: 2.2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
