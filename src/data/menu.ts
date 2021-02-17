interface MenuDate {
  from: string
  to: string
}

export const menuDate: MenuDate = {
  from: '2021/02/17',
  to: '2021/02/26',
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
        active: true,
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
        active: false,
      },
      {
        id: 6,
        name: 'BBQ烤豬',
        price: 120,
        active: false,
      },
      {
        id: 7,
        name: '泰式檸檬雞',
        price: 120,
        active: false,
      },
      {
        id: 8,
        name: '日式味增嫩雞(無飯)',
        price: 120,
        active: false,
      },
      {
        id: 9,
        name: '口水雞',
        price: 120,
        active: true,
      },
      {
        id: 10,
        name: 'みそ烤豬',
        price: 120,
        active: true,
      },
      {
        id: 11,
        name: '義式香料嫩雞(無飯)',
        price: 120,
        active: true,
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
        active: false,
      },
      {
        id: 15,
        name: '照燒雞腿餐',
        price: 120,
        active: false,
      },
      {
        id: 16,
        name: '不醉不歸雞',
        price: 120,
        active: false,
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
    id: 3,
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
        active: false,
      },
      {
        id: 3,
        name: '韓式醬烤梅花豬',
        price: 120,
        active: false,
      },
      {
        id: 4,
        name: '照燒嫩雞餐(無飯)',
        price: 120,
        active: true,
      },
      {
        id: 5,
        name: '檸檬烤雞餐(無飯)',
        price: 120,
        active: false,
      },
      {
        id: 6,
        name: '奶油菌菇烤雞餐',
        price: 120,
        active: false,
      },
      {
        id: 7,
        name: '義式香料舒肥雞胸（無飯）',
        price: 120,
        active: false,
      },
      {
        id: 8,
        name: 'BBQ烤豬餐',
        price: 120,
        active: false,
      },
      {
        id: 9,
        name: '樹子時蔬蒸魚',
        price: 120,
        active: false,
      },
      {
        id: 10,
        name: '椒麻雞餐',
        price: 120,
        active: true,
      },
      {
        id: 11,
        name: '花雕雞餐',
        price: 120,
        active: false,
      },
      {
        id: 12,
        name: '清蒸糖醋魚餐',
        price: 120,
        active: true,
      },
      {
        id: 13,
        name: '辣味胡麻烤雞餐',
        price: 120,
        active: false,
      },
    ],
  },
  {
    id: 22,
    name: '饗丼食堂',
    active: false,
    bento: [
      {
        id: 1,
        name: '加州田園雞腿丼',
        price: 135,
        active: true,
      },
      {
        id: 2,
        name: '和風特選梅花豬丼',
        price: 110,
        active: true,
      },
      {
        id: 3,
        name: '極上美國雪花牛丼',
        price: 110,
        active: true,
      },
    ],
  },
  {
    id: 23,
    name: '六福萬怡',
    active: true,
    bento: [
      {
        id: 1,
        name: '招牌排骨',
        price: 120,
        active: true,
      },
      {
        id: 2,
        name: '蒜蓉蒸魚',
        price: 130,
        active: true,
      },
      {
        id: 3,
        name: '韓式辣醬雞',
        price: 130,
        active: true,
      },
      {
        id: 4,
        name: '金瓜肉絲米粉',
        price: 130,
        active: true,
      },
      {
        id: 5,
        name: '麻油鮮菇雞',
        price: 150,
        active: true,
      },
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
    id: 11,
    name: '拾悸',
    active: false,
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
    id: 10,
    name: '八麺玲瓏',
    active: true,
    bento: [
      {
        id: 1,
        name: '舒肥鷄胸肉',
        price: 120,
        active: false,
      },
      {
        id: 2,
        name: '椒麻鷄便當',
        price: 130,
        active: false,
      },
      {
        id: 3,
        name: '義式鷄腿排',
        price: 130,
        active: true,
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
        price: 130,
        active: false,
      },
      {
        id: 8,
        name: '梅花叉燒蔥爆牛雙拼',
        price: 120,
        active: false,
      },
      {
        id: 9,
        name: '香烤爐魚',
        price: 130,
        active: false,
      },
      {
        id: 10,
        name: '鹽烤鮭魚',
        price: 130,
        active: false,
      },
      {
        id: 11,
        name: '泰式辣炒雞丁',
        price: 120,
        active: true,
      },
      {
        id: 12,
        name: '清蒸坊魚',
        price: 120,
        active: true,
      },
    ],
  },
  {
    id: 12,
    name: '樂活食堂',
    active: false,
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
        active: true,
      },
      {
        id: 5,
        name: '活菌香草里肌餐',
        price: 120,
        active: false,
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
        active: false,
      },
      {
        id: 3,
        name: '宮保雞丁',
        price: 130,
        active: true,
      },
      {
        id: 4,
        name: '咕咾酥肉',
        price: 130,
        active: true,
      },
      {
        id: 5,
        name: '左宗棠雞',
        price: 130,
        active: true,
      },
      {
        id: 6,
        name: '蔥油鮮魚',
        price: 130,
        active: false,
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
    id: 22,
    name: '喬比健康廚房',
    active: true,
    bento: [
      {
        id: 1,
        name: '北海道薄鹽鮭魚',
        price: 140,
        active: true,
      },
      {
        id: 2,
        name: '香滷棒棒腿餐',
        price: 130,
        active: true,
      },
      {
        id: 3,
        name: '塔香三杯雞餐',
        price: 130,
        active: true,
      },
      {
        id: 4,
        name: '檸檬烤雞餐',
        price: 130,
        active: true,
      },
    ],
  },
  {
    id: 14,
    name: '(臺前花車)了凡',
    active: true,
    date: ['2021/02/19'],
    bento: [
      {
        id: 1,
        name: '叉燒燒肉便當',
        price: 140,
        active: true,
        date: ['2021/02/19'],
      },
      {
        id: 2,
        name: '油雞叉燒便當',
        price: 130,
        active: false,
        date: ['2020/12/12'],
      },
      {
        id: 3,
        name: '油雞便當',
        price: 130,
        active: true,
        date: ['2021/02/19'],
      },
      {
        id: 4,
        name: '叉燒便當',
        price: 130,
        active: true,
        date: ['2021/02/19'],
      },
    ],
  },
  {
    id: 15,
    name: '(臺前花車)紅豆食府',
    active: true,
    date: [
      '2021/02/17',
      '2021/02/18',
      '2021/02/19',
      '2021/02/20'
    ],
    bento: [
      {
        id: 1,
        name: '宮保雞丁',
        price: 130,
        active: true,
        date: ['2021/01/26', '2021/01/28'],
      },
      {
        id: 2,
        name: '紅燒獅子頭',
        price: 130,
        active: true,
        date: ['2021/02/17', '2021/02/19', '2021/02/20'],
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
        date: ['2020/12/08', '2020/12/10'],
      },
      {
        id: 5,
        name: '咕咾酥肉',
        price: 130,
        active: true,
        date: ['2020/12/07', '2020/12/09', '2020/12/11'],
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
        date: ['2021/02/17', '2021/02/18', '2021/02/19', '2021/02/20'],
      },
      {
        id: 8,
        name: '無錫排骨',
        price: 150,
        active: true,
        date: ['2021/02/03'],
      },
      {
        id: 9,
        name: '富貴牛腩煲',
        price: 150,
        active: true,
        date: ['2021/02/02', '2021/02/05'],
      },
      {
        id: 10,
        name: '椒麻香酥雞',
        price: 130,
        active: true,
        date: ['2021/02/17', '2021/02/19', '2021/02/20'],
      },
      {
        id: 11,
        name: '蔥油鮮魚',
        price: 130,
        active: true,
        date: ['2021/02/18'],
      },
    ],
  },
  {
    id: 16,
    name: '(臺前花車)究挑',
    active: true,
    date: ['2021/01/27'],
    bento: [
      {
        id: 1,
        name: '麻油雞',
        price: 130,
        active: true,
        date: ['2021/01/27'],
      },
      {
        id: 2,
        name: '芋香蒸肉',
        price: 130,
        active: true,
        date: ['2021/01/27'],
      },
      {
        id: 3,
        name: '竹筍炒牛肉',
        price: 130,
        active: true,
        date: ['2021/01/27'],
      },
      {
        id: 4,
        name: '宮保旗魚',
        price: 130,
        active: true,
        date: ['2021/01/27'],
      },
    ],
  },
  {
    id: 17,
    name: '(臺前花車)周董',
    active: true,
    date: ['2021/02/18'],
    bento: [
      {
        id: 1,
        name: '炭烤大雞腿',
        price: 120,
        active: true,
        date: ['2021/02/18'],
      },
      {
        id: 2,
        name: '炭烤大雞排',
        price: 120,
        active: true,
        date: ['2021/02/18'],
      },
      {
        id: 3,
        name: '炭烤牛五花',
        price: 120,
        active: true,
        date: ['2021/02/18'],
      },
      {
        id: 4,
        name: '燒肉飯',
        price: 120,
        active: true,
        date: ['2021/02/18'],
      },
      {
        id: 5,
        name: '燒烤松阪豬',
        price: 120,
        active: true,
        date: ['2020/12/18'],
      },
    ],
  },
  {
    id: 20,
    name: '(臺前花車)紅豆小館',
    active: true,
    date: [
      '2021/02/17',
      '2021/02/18',
      '2021/02/19',
      '2021/02/20'
    ],
    bento: [
      {
        id: 1,
        name: '回鍋肉',
        price: 130,
        active: true,
        date: ['2021/02/18', '2021/02/20'],
      },
      {
        id: 2,
        name: '辣子雞丁',
        price: 130,
        active: true,
        date: [
          '2021/02/17',
          '2021/02/18',
          '2021/02/20'
        ],
      },
      {
        id: 3,
        name: '水煮嫩肉',
        price: 150,
        active: true,
        date: ['2021/02/17', '2021/02/20'],
      },
      {
        id: 4,
        name: '豆酥鮮魚',
        price: 130,
        active: true,
        date: ['2021/02/17', '2021/02/19'],
      },
      {
        id: 5,
        name: '香辣口水雞',
        price: 150,
        active: true,
        date: ['2021/02/18'],
      },
      {
        id: 6,
        name: '蒜泥白肉',
        price: 150,
        active: true,
        date: ['2021/02/19'],
      },
    ],
  },
  {
    id: 21,
    name: '(臺前花車)食晴誠食',
    active: true,
    date: ['2021/02/01', '2021/02/03'],
    bento: [
      {
        id: 1,
        name: '打拋豬花雕雞雙拼便當',
        price: 120,
        active: true,
        date: ['2021/02/01'],
      },
      {
        id: 2,
        name: '黑胡椒牛肉',
        price: 120,
        active: true,
        date: ['2021/02/01'],
      },
      {
        id: 3,
        name: '炙燒明太子烤雞',
        price: 120,
        active: true,
        date: ['2021/02/01'],
      },
      {
        id: 4,
        name: '泰式椒麻雞',
        price: 120,
        active: false,
        date: ['2021/02/03'],
      },
      {
        id: 5,
        name: '壽喜牛肉',
        price: 120,
        active: false,
        date: ['2021/02/03'],
      },
      {
        id: 5,
        name: '糖醋雞丁',
        price: 120,
        active: false,
        date: ['2021/02/03'],
      },
    ],
  }
]
