interface MenuDate {
  from: string
  to: string
}

export const menuDate: MenuDate = {
  from: '2020/11/30',
  to: '2020/12/04',
}

export interface Bento {
  id: number
  name: string
  price: number
  active: boolean
  date?: string[]
}

export interface BentoCompany {
  id: number
  name: string
  active: boolean
  date?: string[]
  bento: Bento[]
}

export const menu: BentoCompany[] = [
  {
    id: 1,
    name: '鮮䊹',
    active: true,
    bento: [
      {
        id: 1,
        name: '柚香蔥麻雞',
        price: 120,
        active: false,
      },
      {
        id: 2,
        name: '味增腐乳雞',
        price: 120,
        active: false,
      },
      {
        id: 3,
        name: '紐奧良烤豬',
        price: 120,
        active: false,
      },
      {
        id: 4,
        name: '家傳醬味嫩雞(無飯)',
        price: 120,
        active: false,
      },
      {
        id: 5,
        name: '義式烤雞',
        price: 120,
        active: true,
      },
      {
        id: 6,
        name: 'BBQ烤豬',
        price: 120,
        active: true,
      },
      {
        id: 7,
        name: '泰式檸檬雞',
        price: 120,
        active: true,
      },
      {
        id: 8,
        name: '日式味增嫩雞(無飯)',
        price: 120,
        active: true,
      },
      {
        id: 9,
        name: '口水雞',
        price: 120,
        active: false,
      },
      {
        id: 10,
        name: 'みそ烤豬',
        price: 120,
        active: false,
      },
      {
        id: 11,
        name: '義式香料嫩雞(無面)',
        price: 120,
        active: false,
      },
      {
        id: 12,
        name: '蕃茄羅勒鷄',
        price: 120,
        active: false,
      },
      {
        id: 13,
        name: '藥膳嫩雞餐(無飯)',
        price: 120,
        active: false,
      },
      {
        id: 14,
        name: '紐奧良烤雞',
        price: 120,
        active: true,
      },
    ],
  },
  {
    id: 2,
    name: '周董燒肉',
    active: true,
    bento: [
      {
        id: 1,
        name: '炭烤沙朗牛排餐',
        price: 120,
        active: true,
      },
      {
        id: 2,
        name: '韓式烤牛肉壽司飯捲',
        price: 110,
        active: true,
      },
      {
        id: 3,
        name: '烤松板豬肉飯',
        price: 110,
        active: true,
      },
      {
        id: 4,
        name: '炙燒雞腿排飯',
        price: 110,
        active: true,
      },
      {
        id: 5,
        name: '韓式牛肉餐',
        price: 120,
        active: true,
      },
    ],
  },
  {
    id: 4,
    name: '滿溢',
    active: true,
    bento: [
      {
        id: 1,
        name: '巴薩米可紅酒醋烤雞',
        price: 120,
        active: true,
      },
      {
        id: 2,
        name: '味增醬烤雞',
        price: 120,
        active: true,
      },
      {
        id: 3,
        name: '韓式醬烤梅花豬',
        price: 120,
        active: true,
      },
      {
        id: 4,
        name: '照燒嫩雞餐(無飯)',
        price: 120,
        active: true,
      }
    ],
  },
  {
    id: 4,
    name: '悟饕',
    active: true,
    bento: [
      {
        id: 1,
        name: '香焰烤雞',
        price: 100,
        active: true,
      },
      {
        id: 2,
        name: '塔香雞腿飯包',
        price: 100,
        active: true,
      },
      {
        id: 5,
        name: '正宗池上',
        price: 100,
        active: true,
      },
    ],
  },
  {
    id: 5,
    name: '福隆',
    active: true,
    bento: [
      {
        id: 1,
        name: '招牌特餐',
        price: 100,
        active: true,
      },
      {
        id: 2,
        name: '古早味排骨',
        price: 110,
        active: true,
      },
      {
        id: 3,
        name: '無骨雞腿飯',
        price: 110,
        active: true,
      },
    ],
  },
  {
    id: 6,
    name: '地方煮夫',
    active: false,
    bento: [
      {
        id: 1,
        name: '慢烤豬五花(慢烤梅花豬)',
        price: 120,
        active: true,
      },
      {
        id: 2,
        name: '日式烤雞腿',
        price: 120,
        active: false,
      },
      {
        id: 3,
        name: '無飯輕食餐(水煮嫩雞)',
        price: 120,
        active: true,
      },
      {
        id: 4,
        name: '鹽烤鯛魚',
        price: 120,
        active: true,
      },
      {
        id: 5,
        name: '金沙雞腿',
        price: 120,
        active: true,
      },
    ],
  },
  {
    id: 7,
    name: '就是丼飯',
    active: false,
    bento: [
      {
        id: 1,
        name: '豬排丼',
        price: 120,
        active: true,
      },
      {
        id: 2,
        name: '香烤鷄腿丼',
        price: 120,
        active: true,
      },
      {
        id: 3,
        name: '牛排丼',
        price: 120,
        active: true,
      },
    ],
  },
  {
    id: 8,
    name: '紅豆食府',
    active: true,
    bento: [
      {
        id: 1,
        name: '紅燒獅孑頭',
        price: 130,
        active: false,
      },
      {
        id: 2,
        name: '左宗棠雞',
        price: 130,
        active: true,
      },
      {
        id: 3,
        name: '宮保雞丁',
        price: 130,
        active: false,
      },
      {
        id: 4,
        name: '咕咾酥肉',
        price: 130,
        active: true,
      },
      {
        id: 5,
        name: '椒麻香酥魚',
        price: 130,
        active: true,
      },
    ],
  },
  {
    id: 9,
    name: '河馬力士',
    active: true,
    bento: [
      {
        id: 1,
        name: '河馬餐(迷选香雞胸糙米時蔬飯)',
        price: 120,
        active: true,
      },
      {
        id: 2,
        name: '水水餐(迷迭香寫胸馬鈴薯無飯)',
        price: 120,
        active: true,
      },
      {
        id: 3,
        name: '巨巨餐(烤雞腿排糙米時蔬飯)',
        price: 150,
        active: true,
      },
    ],
  },
  {
    id: 10,
    name: '八麺玲瓏',
    active: true,
    bento: [
      {
        id: 1,
        name: '舒肥鷄胸肉',
        price: 120,
        active: true,
      },
      {
        id: 2,
        name: '椒麻鷄便當',
        price: 120,
        active: true,
      },
      {
        id: 3,
        name: '義式鷄腿排',
        price: 120,
        active: false,
      },
      {
        id: 4,
        name: '葱爆牛肉',
        price: 120,
        active: false,
      },
      {
        id: 5,
        name: '舒肥松阪豬',
        price: 120,
        active: false,
      },
      {
        id: 6,
        name: '無骨腿排蒜泥白肉雙拚',
        price: 120,
        active: false,
      },
      {
        id: 7,
        name: '宮保雞丁松阪豬雙拼',
        price: 120,
        active: true,
      },
      {
        id: 8,
        name: '梅花叉燒蔥爆牛雙拼',
        price: 120,
        active: true,
      },
    ],
  },
  {
    id: 11,
    name: '拾悸',
    active: true,
    bento: [
      {
        id: 1,
        name: '主廚特調嫩鷄胸',
        price: 120,
        active: true,
      },
      {
        id: 2,
        name: '醤烤無骨雞腿串',
        price: 120,
        active: true,
      },
      {
        id: 3,
        name: '日式鋤燒牛肉丼',
        price: 120,
        active: true,
      },
      {
        id: 4,
        name: '季節蔬果義式烘蛋餐(蛋奶素)',
        price: 120,
        active: true,
      },
    ],
  },
  {
    id: 12,
    name: '樂活食堂',
    active: true,
    bento: [
      {
        id: 1,
        name: '日式胡麻嫩雞餐',
        price: 120,
        active: true,
      },
      {
        id: 2,
        name: '義式花香雞片餐',
        price: 120,
        active: true,
      },
      {
        id: 3,
        name: '枸杞蒸鯛魚餐',
        price: 120,
        active: true,
      },
      {
        id: 4,
        name: '薑燒低脂豬肉片',
        price: 120,
        active: false,
      },
      {
        id: 5,
        name: '活菌香草里肌餐',
        price: 120,
        active: true,
      },
    ],
  },
  {
    id: 13,
    name: '紅豆小館',
    active: true,
    bento: [
      {
        id: 1,
        name: '辣子雞丁',
        price: 130,
        active: true,
      },
      {
        id: 2,
        name: '回鍋肉',
        price: 130,
        active: true,
      },
      {
        id: 3,
        name: '豆酥鮮魚',
        price: 130,
        active: true,
      }
    ],
  },
  {
    id: 14,
    name: '(臺前花車)了凡',
    active: true,
    date: ['2020/11/30'],
    bento: [
      {
        id: 1,
        name: '叉燒燒肉便當',
        price: 140,
        active: true,
        date: ['2020/11/30'],
      },
      {
        id: 2,
        name: '油雞叉燒便當',
        price: 130,
        active: false,
        date: ['2020/11/30'],
      },
      {
        id: 3,
        name: '油雞便當',
        price: 130,
        active: true,
        date: ['2020/11/30'],
      },
      {
        id: 4,
        name: '叉燒便當',
        price: 130,
        active: true,
        date: ['2020/11/30'],
      },
    ],
  },
  {
    id: 15,
    name: '(臺前花車)紅豆食府',
    active: true,
    date: [
      '2020/11/30',
      '2020/12/01',
      '2020/12/02',
      '2020/12/03',
      '2020/12/04',
    ],
    bento: [
      {
        id: 1,
        name: '宮保雞丁',
        price: 130,
        active: true,
        date: ['2020/11/23', '2020/11/25', '2020/11/27'],
      },
      {
        id: 2,
        name: '紅燒獅子頭',
        price: 130,
        active: true,
        date: ['2020/11/23', '2020/11/25', '2020/11/27'],
      },
      {
        id: 3,
        name: '紹興醉雞',
        price: 150,
        active: false,
        date: ['2020/10/17', '2020/10/20'],
      },
      {
        id: 4,
        name: '左宗棠雞',
        price: 130,
        active: true,
        date: ['2020/12/01', '2020/12/03'],
      },
      {
        id: 5,
        name: '咕咾酥肉',
        price: 130,
        active: true,
        date: ['2020/11/30', '2020/12/02', '2020/12/04'],
      },
      {
        id: 6,
        name: '鎮江子排',
        price: 150,
        active: false,
        date: ['2020/10/13', '2020/09/25'],
      },
      {
        id: 7,
        name: '東坡肉',
        price: 150,
        active: true,
        date: ['2020/11/30', '2020/12/04'],
      },
      {
        id: 8,
        name: '無錫排骨',
        price: 150,
        active: true,
        date: ['2020/12/02'],
      },
      {
        id: 9,
        name: '富貴牛腩煲',
        price: 150,
        active: true,
        date: ['2020/12/01', '2020/12/03'],
      },
      {
        id: 10,
        name: '椒麻香酥雞',
        price: 130,
        active: true,
        date: ['2020/11/30', '2020/12/02', '2020/12/04'],
      },
      {
        id: 11,
        name: '蔥油鮮魚',
        price: 130,
        active: true,
        date: ['2020/12/01', '2020/12/03'],
      },
    ],
  },
  {
    id: 16,
    name: '(臺前花車)究挑',
    active: true,
    date: ['2020/12/01', '2020/12/03'],
    bento: [
      {
        id: 1,
        name: '三杯雞',
        price: 130,
        active: true,
        date: ['2020/12/01'],
      },
      {
        id: 2,
        name: '栗子燒肉',
        price: 130,
        active: true,
        date: ['2020/12/01'],
      },
      {
        id: 3,
        name: '蔥爆牛肉',
        price: 130,
        active: true,
        date: ['2020/12/01'],
      },
      {
        id: 4,
        name: '香橙燒雞',
        price: 130,
        active: true,
        date: ['2020/12/03'],
      },
      {
        id: 5,
        name: '馬告烤豬五花',
        price: 130,
        active: true,
        date: ['2020/12/03'],
      },
      {
        id: 6,
        name: '鼓椒炒牛肉',
        price: 130,
        active: true,
        date: ['2020/12/03'],
      }
    ],
  },
  {
    id: 17,
    name: '(臺前花車)周董',
    active: true,
    date: ['2020/12/02', '2020/12/04'],
    bento: [
      {
        id: 1,
        name: '炭烤大雞腿',
        price: 120,
        active: true,
        date: ['2020/12/02', '2020/12/04'],
      },
      {
        id: 2,
        name: '炭烤大雞排',
        price: 120,
        active: true,
        date: ['2020/12/02', '2020/12/04'],
      },
      {
        id: 3,
        name: '炭烤牛五花',
        price: 120,
        active: true,
        date: ['2020/12/02', '2020/12/04'],
      },
      {
        id: 4,
        name: '燒肉飯',
        price: 120,
        active: true,
        date: ['2020/12/02'],
      },
      {
        id: 5,
        name: '燒烤松阪豬',
        price: 120,
        active: true,
        date: ['2020/12/04'],
      },
    ],
  },
  {
    id: 18,
    name: '(臺前花車)鮮纖',
    active: true,
    date: ['2020/09/24'],
    bento: [
      {
        id: 1,
        name: '泰式檸檬雞冷麵',
        price: 120,
        active: true,
        date: ['2020/09/24'],
      },
      {
        id: 2,
        name: '日式胡麻雞冷麵',
        price: 120,
        active: true,
        date: ['2020/09/24'],
      },
      {
        id: 3,
        name: '烈日莎莎雞冷麵(涼麵)',
        price: 120,
        active: true,
        date: ['2020/09/24'],
      },
    ],
  },
  {
    id: 19,
    name: '(臺前花車)弁當工廠',
    active: true,
    date: ['2020/10/16'],
    bento: [
      {
        id: 1,
        name: '韓式燒烤豬肉',
        price: 110,
        active: true,
        date: ['2020/10/16'],
      },
      {
        id: 2,
        name: '廣島燒雞排',
        price: 110,
        active: true,
        date: ['2020/09/15'],
      },
      {
        id: 3,
        name: '鯖魚一夜干',
        price: 110,
        active: true,
        date: ['2020/10/16'],
      },
      {
        id: 4,
        name: '義式迷迭香雞腿排',
        price: 110,
        active: true,
        date: ['2020/10/16'],
      },
    ],
  },
  {
    id: 20,
    name: '(臺前花車)紅豆小館',
    active: true,
    date: [
      '2020/11/30',
      '2020/12/01',
      '2020/12/02',
      '2020/12/03',
      '2020/12/04',
    ],
    bento: [
      {
        id: 1,
        name: '回鍋肉',
        price: 130,
        active: true,
        date: ['2020/12/01', '2020/12/03', '2020/12/04'],
      },
      {
        id: 2,
        name: '辣子雞丁',
        price: 130,
        active: true,
        date: ['2020/11/30', '2020/12/01', '2020/12/02', '2020/12/03'],
      },
      {
        id: 3,
        name: '水煮嫩肉',
        price: 150,
        active: true,
        date: ['2020/11/30', '2020/12/03'],
      },
      {
        id: 4,
        name: '豆酥鮮魚',
        price: 130,
        active: true,
        date: ['2020/11/30', '2020/12/02', '2020/12/04'],
      },
      {
        id: 5,
        name: '香辣口水雞',
        price: 150,
        active: true,
        date: ['2020/12/01', '2020/12/04'],
      },
      {
        id: 6,
        name: '蒜泥白肉',
        price: 150,
        active: true,
        date: ['2020/12/02'],
      }
    ],
  },
]
