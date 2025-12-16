<template>
  <div class="portfolio">
    <!-- Hero Section -->
    <section class="page-hero">
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

    <!-- CTA Section -->
    <section class="portfolio-cta">
      <div class="container">
        <h2>有專案需求嗎？</h2>
        <p>讓我們一起打造您的下一個成功專案</p>
        <router-link to="/expert" class="btn btn-primary">立即聯繫</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      projects: [
        {
          id: 'chat-room',
          icon: '💬',
          folder: 'chat-room',
          title: '即時聊天室系統',
          description: '基於 WebSocket 的即時通訊系統，支援多人聊天與訊息推送',
          tags: ['WebSocket', 'Node.js', 'Vue.js', 'Redis'],
          features: [
            '即時訊息推送與接收',
            '多人群組聊天室',
            '線上用戶狀態顯示',
            '訊息歷史紀錄',
            '檔案分享功能'
          ],
          images: ['1.svg', '2.svg'], // 可以添加圖片路徑，例如：['1.jpg', '2.jpg']
          currentImageIndex: 0
        },
        {
          id: 'admin-system',
          icon: '⚙️',
          folder: 'admin-system',
          title: '企業後台管理系統',
          description: '功能完整的企業級後台管理平台，包含權限管理與資料統計',
          tags: ['Spring Boot', 'React', 'MySQL', 'JWT'],
          features: [
            '用戶權限角色管理',
            '資料 CRUD 操作',
            '圖表統計分析',
            'RESTful API 設計',
            '響應式後台介面'
          ],
          images: [],
          currentImageIndex: 0
        },
        {
          id: 'student-project',
          icon: '🎓',
          folder: 'student-project',
          title: '學生專題系統',
          description: '協助學生完成畢業專題，提供技術指導與實作支援',
          tags: ['Django', 'Python', 'Bootstrap', 'SQLite'],
          features: [
            '專題管理系統',
            '進度追蹤功能',
            '文件上傳與分享',
            '評分與評論系統',
            '學習資源整合'
          ],
          images: [],
          currentImageIndex: 0
        },
        {
          id: 'deploy-platform',
          icon: '🚀',
          folder: 'deploy-platform',
          title: '自動化部署平台',
          description: 'CI/CD 流程建置，實現自動化測試與部署',
          tags: ['Docker', 'Jenkins', 'AWS', 'Nginx'],
          features: [
            'Git 整合自動部署',
            '容器化應用部署',
            '自動化測試流程',
            '監控與日誌系統',
            '回滾機制'
          ],
          images: ['1.jpg', '2.jpg'],
          currentImageIndex: 0
        },
        {
          id: 'ecommerce',
          icon: '🛒',
          folder: 'ecommerce',
          title: '電商購物網站',
          description: '完整的電商平台，包含購物車、金流串接與訂單管理',
          tags: ['Laravel', 'Vue.js', 'MySQL', 'Payment API'],
          features: [
            '商品管理系統',
            '購物車與結帳流程',
            '第三方金流串接',
            '訂單管理與追蹤',
            '會員系統與優惠券'
          ],
          images: [],
          currentImageIndex: 0
        },
        {
          id: 'data-dashboard',
          icon: '📊',
          folder: 'data-dashboard',
          title: '資料分析儀表板',
          description: '視覺化資料分析平台，提供即時數據統計與報表',
          tags: ['Python', 'Next.js', 'PostgreSQL', 'Chart.js'],
          features: [
            '即時數據視覺化',
            '多維度資料分析',
            '自定義報表生成',
            '資料匯出功能',
            '權限控制'
          ],
          images: [],
          currentImageIndex: 0
        }
      ]
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

/* Portfolio CTA */
.portfolio-cta {
  background: var(--gradient-1);
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.portfolio-cta h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.portfolio-cta p {
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

  .tech-showcase {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
