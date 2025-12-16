<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container nav-container">
      <router-link to="/" class="logo">
        <span class="logo-icon">🚀</span>
        <span class="logo-text">火星創意</span>
      </router-link>

      <div class="nav-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul class="nav-menu" :class="{ 'active': isMenuOpen }">
        <li><router-link to="/" @click="closeMenu">首頁</router-link></li>
        <li><router-link to="/about-us" @click="closeMenu">關於火星創意</router-link></li>
        <li><router-link to="/portfolio" @click="closeMenu">作品案例</router-link></li>
        <li><router-link to="/courses" @click="closeMenu">教學案例</router-link></li>
        <li><router-link to="/process" @click="closeMenu">服務流程</router-link></li>
        <li><router-link to="/pricing" @click="closeMenu">費用</router-link></li>
        <li><a href="https://www.pro360.com.tw/service/549056" target="_blank" @click="closeMenu">Pro360專家檔案</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.navbar.scrolled {
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: 700;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  font-size: 2rem;
  animation: float 3s ease-in-out infinite;
}

.logo-text {
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 40px;
  align-items: center;
}

.nav-menu li a {
  font-weight: 600;
  color: var(--dark-color);
  position: relative;
  transition: color 0.3s ease;
}

.nav-menu li a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 3px;
  background: var(--gradient-2);
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-menu li a:hover,
.nav-menu li a.router-link-active {
  color: var(--primary-color);
}

.nav-menu li a.router-link-active::after,
.nav-menu li a:hover::after {
  width: 100%;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  z-index: 1001;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background: var(--dark-color);
  border-radius: 2px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background: white;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    transition: right 0.3s ease;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-menu li a {
    font-size: 1.2rem;
  }
}
</style>
