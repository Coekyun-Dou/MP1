// 书籍配置
export type BookType = {
  id: number
  title: string
  author?: string
  cover?: string
  rating?: number
  readDate?: string
  review?: string
  tags?: string[]
}

export const books: Array<BookType> = [
  {
    id: 1,
    title: '书籍标题 1',
    author: '作者名称',
    cover: '', // 待补充
    rating: 5,
    readDate: '2024-01',
    review: '这是一本很棒的书...',
    tags: ['小说', '科幻']
  },
  {
    id: 2,
    title: '书籍标题 2',
    author: '作者名称',
    cover: '', // 待补充
    rating: 4,
    readDate: '2024-02',
    review: '值得一读的好书...',
    tags: ['技术', '编程']
  },
  {
    id: 3,
    title: '书籍标题 3',
    author: '作者名称',
    cover: '', // 待补充
    rating: 5,
    readDate: '2024-03',
    review: '非常精彩的内容...',
    tags: ['历史', '传记']
  },
  {
    id: 4,
    title: '书籍标题 4',
    author: '作者名称',
    cover: '', // 待补充
    rating: 4,
    readDate: '2024-04',
    review: '让人深思的作品...',
    tags: ['哲学', '思想']
  },
  {
    id: 5,
    title: '书籍标题 5',
    author: '作者名称',
    cover: '', // 待补充
    rating: 5,
    readDate: '2024-05',
    review: '引人入胜的故事...',
    tags: ['文学', '经典']
  },
  {
    id: 6,
    title: '书籍标题 6',
    author: '作者名称',
    cover: '', // 待补充
    rating: 4,
    readDate: '2024-06',
    review: '实用的知识分享...',
    tags: ['管理', '商业']
  },
  {
    id: 7,
    title: '书籍标题 7',
    author: '作者名称',
    cover: '', // 待补充
    rating: 5,
    readDate: '2024-07',
    review: '优秀的写作风格...',
    tags: ['散文', '随笔']
  },
  {
    id: 8,
    title: '书籍标题 8',
    author: '作者名称',
    cover: '', // 待补充
    rating: 4,
    readDate: '2024-08',
    review: '开阔视野的好书...',
    tags: ['社会', '人文']
  },
  {
    id: 9,
    title: '书籍标题 9',
    author: '作者名称',
    cover: '', // 待补充
    rating: 5,
    readDate: '2024-09',
    review: '深入浅出的讲解...',
    tags: ['科普', '自然']
  },
  {
    id: 10,
    title: '书籍标题 10',
    author: '作者名称',
    cover: '', // 待补充
    rating: 4,
    readDate: '2024-10',
    review: '温暖人心的故事...',
    tags: ['治愈', '生活']
  },
  {
    id: 11,
    title: '书籍标题 11',
    author: '作者名称',
    cover: '', // 待补充
    rating: 5,
    readDate: '2024-11',
    review: '极具启发性...',
    tags: ['励志', '成长']
  },
  {
    id: 12,
    title: '书籍标题 12',
    author: '作者名称',
    cover: '', // 待补充
    rating: 4,
    readDate: '2024-12',
    review: '独特的视角...',
    tags: ['艺术', '设计']
  },
  {
    id: 13,
    title: '书籍标题 13',
    author: '作者名称',
    cover: '', // 待补充
    rating: 5,
    readDate: '2025-01',
    review: '经典之作...',
    tags: ['名著', '文学']
  },
  {
    id: 14,
    title: '书籍标题 14',
    author: '作者名称',
    cover: '', // 待补充
    rating: 4,
    readDate: '2025-02',
    review: '引人思考...',
    tags: ['心理', '认知']
  },
  {
    id: 15,
    title: '书籍标题 15',
    author: '作者名称',
    cover: '', // 待补充
    rating: 5,
    readDate: '2025-03',
    review: '不容错过的好书...',
    tags: ['悬疑', '推理']
  }
]

// 阅读页面配置
export const readingPageConfig = {
  headline: '我的阅读',
  description: '记录阅读过的好书，分享读书心得与感悟。'
}

