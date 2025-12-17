<template>
  <div class="course-detail" v-if="course">
    <!-- Hero Section -->
    <section class="detail-hero">
      <div class="container">
        <router-link to="/courses" class="back-btn">← 返回教學案例</router-link>
        <h1 class="fade-in">{{ course.title }}</h1>
        <p>{{ course.description }}</p>
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
        <div class="info-card">
          <h2 class="section-title">教學內容</h2>
          <ul class="feature-list">
            <li v-for="(feature, i) in course.features" :key="i">
              {{ feature }}
            </li>
          </ul>
        </div>
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
import { coursesData } from '@/data/courses.js'

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

.detail-hero h1 {
  font-size: 3rem;
  margin-bottom: 15px;
}

.detail-hero p {
  font-size: 1.3rem;
  opacity: 0.9;
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

.info-card {
  background: var(--light-color);
  padding: 40px;
  border-radius: 0;
  box-shadow: var(--shadow);
  max-width: 800px;
  margin: 0 auto;
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
  content: '•';
  position: absolute;
  left: 0;
  color: var(--secondary-color);
  font-weight: 700;
  font-size: 1.5rem;
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

  .thumbnail {
    width: 100px;
    height: 70px;
  }
}
</style>
