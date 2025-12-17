export const projectsData = [
  {
    id: 'chat-room',
    icon: '💬',
    folder: 'chat-room',
    title: '即時聊天室系統',
    description: '協助學生完成畢業專題，使用 WebSocket 實現支援即時訊息推送與接收',
    tags: ['Java', 'SpringBoot', 'MySQL', 'React', 'WebSocket'],
    features: [
      '登入登出功能',
      '即時訊息推送與接收',
      '訊息歷史紀錄',
      '已讀功能'
    ],
    images: ['1.png', '2.png', '3.png', '4.png']
  },
  {
    id: 'student-project',
    icon: '🎓',
    folder: 'student-project',
    title: '學生管理系統',
    description: '協助學生完成個人專案，提供技術指導與實作支援',
    tags: ['Java', 'SpringBoot', 'MySQL', 'React'],
    features: [
      '專題管理系統',
      '進度追蹤功能',
      '文件上傳與分享',
      '評分與評論系統',
      '學習資源整合'
    ],
    images: ['1.png', '2.png', '3.png', '4.png', '5.png']
  },
  {
    id: 'deploy-platform',
    icon: '🚀',
    folder: 'deploy-platform',
    title: '自動化部署平台',
    description: 'CI/CD 流程建置，實現自動化測試與部署',
    tags: ['Docker', 'Jenkins', 'AWS'],
    features: [
      'Git 整合自動部署',
      '容器化應用部署',
      '自動化測試流程',
      '構建失敗通知與告警',
      '郵件通知集成'
    ],
    images: ['1.jpg', '2.jpg']
  },
  {
    id: 'blog-optimization',
    icon: '📝',
    folder: 'blog-optimization',
    title: '個人網站頁面優化',
    description: '提升部落格載入速度與使用者體驗，優化 SEO 與效能表現',
    tags: ['Html', 'Css', 'JavaScript'],
    features: [
      '更換網站圖片',
      '響應式設計優化',
      'SEO 優化',
      '優化圖片解析度'
    ],
    images: ['1.png', '2.png', '3.png']
  }
]

export default projectsData
