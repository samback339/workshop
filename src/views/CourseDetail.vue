<template>
  <div class="course-detail" v-if="course">
    <!-- Hero Section -->
    <section class="detail-hero">
      <div class="container">
        <router-link to="/courses" class="back-btn">← 返回教學案例</router-link>
        <div class="tech-badge">{{ course.tech }}</div>
        <h1 class="fade-in">{{ course.title }}</h1>
        <p>{{ course.description }}</p>
        <div class="hero-tags">
          <span class="tag" v-for="(tag, i) in course.tags" :key="i">{{ tag }}</span>
        </div>
      </div>
    </section>

    <!-- Image Gallery -->
    <section class="section gallery">
      <div class="container">
        <h2 class="section-title">課程展示</h2>
        <div class="main-image">
          <img
            :src="getCurrentImage(course)"
            :alt="course.title"
            class="gallery-img"
          />
          <div class="carousel-controls" v-if="course.images.length > 1">
            <button
              class="carousel-btn prev"
              @click="previousImage()"
              aria-label="上一張"
            >‹</button>
            <button
              class="carousel-btn next"
              @click="nextImage()"
              aria-label="下一張"
            >›</button>
          </div>
        </div>
        <div class="thumbnail-list" v-if="course.images.length > 1">
          <img
            v-for="(img, i) in course.images"
            :key="i"
            :src="getImageUrl(course, img)"
            :alt="`${course.title} - 圖片 ${i + 1}`"
            class="thumbnail"
            :class="{ active: i === currentImageIndex }"
            @click="setImage(i)"
          />
        </div>
      </div>
    </section>

    <!-- Course Info -->
    <section class="section course-info">
      <div class="container">
        <div class="info-grid">
          <div class="info-card">
            <h2 class="section-title">教學內容</h2>
            <ul class="feature-list">
              <li v-for="(feature, i) in course.features" :key="i">
                {{ feature }}
              </li>
            </ul>
          </div>

          <div class="info-card">
            <h2 class="section-title">使用技術</h2>
            <div class="tech-tags">
              <span class="tech-tag" v-for="(tag, i) in course.tags" :key="i">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="detail-cta">
      <div class="container">
        <h2>對這門課程感興趣？</h2>
        <p>我們可以為您提供客製化的教學服務</p>
        <router-link to="/expert" class="btn btn-primary">立即聯繫</router-link>
      </div>
    </section>
  </div>

  <div v-else class="not-found">
    <div class="container">
      <h1>找不到課程</h1>
      <router-link to="/courses" class="btn btn-primary">返回教學案例</router-link>
    </div>
  </div>
</template>

<script>
const coursesData = [
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

export default {
  name: 'CourseDetail',
  data() {
    return {
      course: null,
      currentImageIndex: 0
    }
  },
  created() {
    this.loadCourse()
  },
  watch: {
    '$route.params.id': 'loadCourse'
  },
  methods: {
    loadCourse() {
      const courseId = this.$route.params.id
      this.course = coursesData.find(c => c.id === courseId)
      this.currentImageIndex = 0
    },
    getCurrentImage(course) {
      const basePath = import.meta.env.BASE_URL
      if (course.images.length > 0) {
        return `${basePath}courses/${course.folder}/${course.images[this.currentImageIndex]}`
      } else {
        return `${basePath}courses/${course.folder}/default.svg`
      }
    },
    getImageUrl(course, imageName) {
      const basePath = import.meta.env.BASE_URL
      return `${basePath}courses/${course.folder}/${imageName}`
    },
    nextImage() {
      if (this.course.images.length > 0) {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.course.images.length
      }
    },
    previousImage() {
      if (this.course.images.length > 0) {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.course.images.length) % this.course.images.length
      }
    },
    setImage(index) {
      this.currentImageIndex = index
    }
  }
}
</script>

<style scoped>
.course-detail {
  margin-top: 70px;
}

/* Hero Section */
.detail-hero {
  background: var(--gradient-2);
  color: white;
  padding: 100px 20px 80px;
  text-align: center;
  position: relative;
}

.back-btn {
  position: absolute;
  top: 90px;
  left: 20px;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0;
  transition: all 0.3s ease;
  font-weight: 600;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateX(-5px);
}

.tech-badge {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.3);
  color: white;
  border-radius: 0;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
  backdrop-filter: blur(10px);
}

.detail-hero h1 {
  font-size: 3rem;
  margin-bottom: 15px;
}

.detail-hero p {
  font-size: 1.3rem;
  opacity: 0.9;
  margin-bottom: 25px;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.tag {
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 0;
  font-size: 0.9rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

/* Gallery Section */
.gallery {
  background: var(--light-color);
}

.main-image {
  position: relative;
  max-width: 1000px;
  margin: 0 auto 30px;
  border-radius: 0;
  overflow: hidden;
  box-shadow: var(--shadow-hover);
}

.gallery-img {
  width: 100%;
  height: auto;
  display: block;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  pointer-events: none;
}

.carousel-btn {
  pointer-events: all;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  color: var(--dark-color);
}

.carousel-btn:hover {
  background: white;
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.thumbnail-list {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.thumbnail {
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 3px solid transparent;
}

.thumbnail:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.thumbnail.active {
  border-color: var(--primary-color);
  transform: scale(1.05);
}

/* Course Info */
.course-info {
  background: white;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.info-card {
  background: var(--light-color);
  padding: 40px;
  border-radius: 0;
  box-shadow: var(--shadow);
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  padding: 15px 0;
  color: #666;
  position: relative;
  padding-left: 35px;
  font-size: 1.1rem;
  line-height: 1.6;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.feature-list li:last-child {
  border-bottom: none;
}

.feature-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--secondary-color);
  font-weight: 700;
  font-size: 1.3rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.tech-tag {
  padding: 12px 24px;
  background: white;
  color: var(--primary-color);
  border-radius: 0;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* CTA Section */
.detail-cta {
  background: var(--gradient-3);
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.detail-cta h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.detail-cta p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

/* Not Found */
.not-found {
  margin-top: 70px;
  padding: 100px 20px;
  text-align: center;
}

.not-found h1 {
  font-size: 2.5rem;
  color: var(--dark-color);
  margin-bottom: 30px;
}

/* Responsive */
@media (max-width: 768px) {
  .detail-hero h1 {
    font-size: 2.2rem;
  }

  .back-btn {
    position: static;
    display: inline-block;
    margin-bottom: 20px;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .thumbnail {
    width: 100px;
    height: 70px;
  }
}
</style>
