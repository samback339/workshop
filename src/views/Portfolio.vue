<template>
  <div class="portfolio">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="hero-bg-decoration">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
      </div>
      <div class="container">
        <h1 class="fade-in">作品案例</h1>
        <p>我們的專案成果展示</p>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="section projects">
      <div class="container">
        <h2 class="section-title">📂 專案經驗</h2>
        <p class="section-subtitle">多元化的開發經驗</p>

        <div class="projects-grid">
          <div class="project-card" v-for="(project, index) in projects" :key="index" @click="goToDetail(project.id)">
            <div class="project-image">
              <img
                :src="getCurrentImage(project)"
                :alt="project.title"
                class="project-img"
              />
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { projectsData } from '../data/projects'

export default {
  name: 'Portfolio',
  data() {
    return {
      // keep per-card carousel state locally so shared data stays immutable
      projects: projectsData.map(project => ({
        ...project,
        currentImageIndex: 0
      }))
    }
  },
  methods: {
    getCurrentImage(project) {
      const basePath = import.meta.env.BASE_URL
      if (project.images.length > 0) {
        // 如果有自定義圖片，使用自定義圖片
        return `${basePath}portfolio/${project.folder}/${project.images[project.currentImageIndex]}`
      } else {
        // 沒有圖片則使用預設圖片
        return `${basePath}portfolio/${project.folder}/default.svg`
      }
    },
    nextImage(projectIndex) {
      const project = this.projects[projectIndex]
      if (project.images.length > 0) {
        project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length
      }
    },
    previousImage(projectIndex) {
      const project = this.projects[projectIndex]
      if (project.images.length > 0) {
        project.currentImageIndex = (project.currentImageIndex - 1 + project.images.length) % project.images.length
      }
    },
    setImage(projectIndex, imageIndex) {
      this.projects[projectIndex].currentImageIndex = imageIndex
    },
    goToDetail(projectId) {
      this.$router.push(`/portfolio/${projectId}`)
    }
  }
}
</script>

<style scoped>
.portfolio {
  margin-top: 70px;
}

/* Page Hero */
.page-hero {
  background: var(--gradient-3);
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

/* Responsive */
@media (max-width: 768px) {
  .page-hero h1 {
    font-size: 2.2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .tech-showcase {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
