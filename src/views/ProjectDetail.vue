<template>
  <div class="project-detail" v-if="project">
    <!-- Hero Section -->
    <section class="detail-hero">
      <div class="container">
        <router-link to="/portfolio" class="back-btn">← 返回作品列表</router-link>
        <h1 class="fade-in">{{ project.title }}</h1>
        <p>{{ project.description }}</p>
      </div>
    </section>

    <!-- Image Gallery -->
    <section class="section gallery">
      <div class="container">
        <h2 class="section-title">專案展示</h2>
        <div class="main-image">
          <img
            :src="getCurrentImage(project)"
            :alt="project.title"
            class="gallery-img"
          />
          <div class="carousel-controls" v-if="project.images.length > 1">
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
        <div class="thumbnail-list" v-if="project.images.length > 1">
          <img
            v-for="(img, i) in project.images"
            :key="i"
            :src="getImageUrl(project, img)"
            :alt="`${project.title} - 圖片 ${i + 1}`"
            class="thumbnail"
            :class="{ active: i === currentImageIndex }"
            @click="setImage(i)"
          />
        </div>
      </div>
    </section>

    <!-- Project Info -->
    <section class="section project-info">
      <div class="container">
        <div class="info-grid">
          <div class="info-card">
            <h2 class="section-title">專案介紹</h2>
            <ul class="feature-list">
              <li v-for="(feature, i) in project.features" :key="i">
                {{ feature }}
              </li>
            </ul>
          </div>

          <div class="info-card">
            <h2 class="section-title">使用技術</h2>
            <div class="tech-tags">
              <span class="tech-tag" v-for="(tag, i) in project.tags" :key="i">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="not-found">
    <div class="container">
      <h1>找不到專案</h1>
      <router-link to="/portfolio" class="btn btn-primary">返回作品列表</router-link>
    </div>
  </div>
</template>

<script>
import { projectsData } from '../data/projects'

export default {
  name: 'ProjectDetail',
  data() {
    return {
      project: null,
      currentImageIndex: 0
    }
  },
  created() {
    this.loadProject()
  },
  watch: {
    '$route.params.id': 'loadProject'
  },
  methods: {
    loadProject() {
      const projectId = this.$route.params.id
      this.project = projectsData.find(p => p.id === projectId)
      this.currentImageIndex = 0
    },
    getCurrentImage(project) {
      const basePath = import.meta.env.BASE_URL
      if (project.images.length > 0) {
        return `${basePath}portfolio/${project.folder}/${project.images[this.currentImageIndex]}`
      } else {
        return `${basePath}portfolio/${project.folder}/default.svg`
      }
    },
    getImageUrl(project, imageName) {
      const basePath = import.meta.env.BASE_URL
      return `${basePath}portfolio/${project.folder}/${imageName}`
    },
    nextImage() {
      if (this.project.images.length > 0) {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length
      }
    },
    previousImage() {
      if (this.project.images.length > 0) {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.project.images.length) % this.project.images.length
      }
    },
    setImage(index) {
      this.currentImageIndex = index
    }
  }
}
</script>

<style scoped>
.project-detail {
  margin-top: 70px;
}

/* Hero Section */
.detail-hero {
  background: var(--gradient-3);
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

/* Project Info */
.project-info {
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
  content: '•';
  position: absolute;
  left: 0;
  color: var(--secondary-color);
  font-weight: 700;
  font-size: 1.5rem;
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
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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
