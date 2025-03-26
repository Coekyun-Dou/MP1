// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "奖励与表彰"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: '第十九届广东省青少年机器人竞赛金牌',
    description: '',
    date: '2019',
    location: '广东东莞',
  },
  {
    name: '潮汕星河奖科技奖',
    description: '',
    date: '2020',
    location: '广东汕头',
  },
  {
    name:'第十六届蓝桥杯大赛广东省一等奖',
    description:'',
    date:'2025',
    location:'广东阳江'
  }
]

// Research & Projects
export const projectHeadLine = "研究与项目"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  // {
  //   name: 'Student Final Project Portfolio',
  //   description: 'Static website portfolio',
  //   link: { href: 'scls-cs.com', label: 'GitHub Cards' },
  //   tags: ['Website', 'Next.js', 'TailwindCSS', 'DaisyUI', 'Portfolio']
  // },
  // {
  //   name: 'Seeking DNA',
  //   description: '2022 SCLS Hackathon',
  //   link: { href: 'https://scls-cs.gitbook.io/scls-apcs-lab/lab5-dna', label: 'Hackathon' },
  //   tags: ['Hackathon', 'Java']
  // },
  // {
  //   name: 'Texas Holdem Poker Judge',
  //   description: '2024 SCLS Hackathon',
  //   link: { href: 'https://onecompiler.com/challenges/42yf4n5yn/scls-hackathon', label: 'Hackathon' },
  //   tags: ['Hackathon']
  // },
  {
    name: '基于YOLOv8的海洋牧场鱼类数量检测',
    description: '运用深度学习相关知识，改进优化YOLOv8视觉模型，提高计算机视觉水下鱼类检测的效率与质量',
    link: { href: 'github.com/Coekyun-Dou/fish-couting', label: 'View Course' },
    tags: ['深度学习', '计算机视觉','Pyqt']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "兴趣爱好"
export const activitiesIntro = "Personal interests"

export const activities: Array<ActivityItemType> = [
  {
    name: '篮球',
    description:
      '热爱篮球与勒布朗，常打1、2号位，扮演球场指挥官，球衣号码：3',
    date: 'forever',
    location: '中国',
    link: 'https://china.nba.cn/index',
  },
  {
    name: '音乐',
    description:
      '喜欢R&B，最喜爱的歌手：JayChou',
    date: 'forever',
    location: '中国',
    link: 'https://baike.baidu.com/item/%E5%91%A8%E6%9D%B0%E4%BC%A6/129156',
  },
  {
    name: '阅读',
    description:
      '喜好阅读，诗歌、散文与小说，最喜爱的作家：史铁生',
    date: 'forever',
    location: '中国',
  },
]
