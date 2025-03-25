// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    // {
    //   company: 'Shanghai Soong Ching Ling School',
    //   title: 'Computer Science Teacher',
    //   logo: 'college',
    //   start: '2020',
    //   end: 'Present'
    // },
    // {
    //   company: 'Bigo Live',
    //   title: 'US Operations',
    //   logo: 'coffee',
    //   start: '2018',
    //   end: '2020'
    // },
    {
      company: '广东海洋大学“风渔融合”智能创新团队',
      title: '“基于YOLOv8的海洋牧场鱼类数量检测”项目组成员',
      logo: 'coffee',
      start: '2023',
      end: '至今'
    },
    {
      company: '广东海洋大学-泰迪智能科技联合双创工作室',
      title: '大数据挖掘与分析',
      logo: 'bank',
      start: '2023',
      end: '2025'
    },
    {
      company:'广东省“攀登计划”立项项目——“云上游荔”团队',
      title:'微信小程序开发',
      logo:'college',
      start:'2023',
      end:'2024'
    }
  ]