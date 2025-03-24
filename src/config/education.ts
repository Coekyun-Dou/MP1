
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    // {
    //   school: 'Tsinghua University',
    //   major: 'MBA',
    //   logo: 'college',
    //   start: '2017',
    //   end: '2020'
    // },
    {
      school: '广东海洋大学',
      major: '物联网工程',
      logo: 'college',
      start: '2023',
      end: '至今'
    },
    {
      school: '汕头市澄海中学',
      major: '全日制普通高中',
      logo: 'college',
      start: '2017',
      end: '2023'
    },
  ]