export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Felix Du'
export const headline = '一名来自广东海洋大学的学生'
export const introduction =
  "Coucou Les Amis! 我叫Felix Du，来自广东省汕头市。目前就读于广东海洋大学计算机科学与工程学院，未来立志成为一名生物信息学领域的优秀学者，欢迎大家与我交朋友！"
export const email = 'less_duuuzx@163.com'
export const githubUsername = 'Coekyun-Dou'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Coucou Les Amis!My name is Felix Du. I'm from Swotaw, Guangdong Province. I'm currently studying at the school of Computer Science and Engineering of GDOU, and I aspire to become a scholar in the field of bioinformatics in the future.",
  'Currently I am working on a new course called AI Camp, an innovative course where high school students create real-world products and startups while exploring the frontiers of AI.',
  "I started this blog to share the insights I learn every day. Most blogs focus on education in Artificial Intelligence and general computer science, while others share the life lessons I've learned.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.douyin.com/user/MS4wLjABAAAAiZKjwy0CSxtoAF7ZdjBOH_DuM15HFBSQUQi23hqqUM8?from_tab_name=main',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/327261742?spm_id_from=333.1387.0.0',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
