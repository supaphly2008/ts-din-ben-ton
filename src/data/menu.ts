interface MenuDate {
  from: string
  to: string
}

export const menuDate: MenuDate = {
  from: '2021/03/29',
  to: '2021/04/09',
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
        active: false,
      },
      {
        id: 6,
        name: 'BBQ烤豬',
        price: 120,
        active: true,
      },
      {
        id: 7,
        name: '檸檬雞餐',
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
        active: false,
      },
      {
        id: 11,
        name: '義式香料嫩雞(無飯)',
        price: 120,
        active: false,
      },
      {
        id: 12,
        name: '千金雞餐',
        price: 120,
        active: true,
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
        name: '照燒雞腿排',
        price: 120,
        active: false,
      },
      {
        id: 16,
        name: '香辣雞腿',
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
    id: 3,
    name: '滿溢',
    active: true,
    bento: [
      {
        id: 1,
        name: '奶油箘菇烤雞',
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
        active: false,
      },
      {
        id: 5,
        name: '檸檬烤雞餐(無飯)',
        price: 120,
        active: true,
      },
      {
        id: 6,
        name: '黑松露蘑菇烤雞餐',
        price: 120,
        active: true,
      },
      {
        id: 7,
        name: '義式香料烤雞(無飯)',
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
        active: false,
      },
      {
        id: 11,
        name: '花雕雞餐',
        price: 120,
        active: false,
      },
      {
        id: 12,
        name: '清蒸糖醋魚',
        price: 120,
        active: true,
      },
      {
        id: 13,
        name: '泰式咖哩烤雞',
        price: 120,
        active: false,
      },
      {
        id: 14,
        name: '辣子雞丁',
        price: 120,
        active: false,
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
        name: '懷舊排骨',
        price: 120,
        active: true,
      },
      {
        id: 2,
        name: '家傳咕咾肉',
        price: 120,
        active: true,
      },
      {
        id: 3,
        name: '古法蒸鮮魚',
        price: 130,
        active: true,
      },
      {
        id: 4,
        name: '慢烤紅椒雞腿',
        price: 160,
        active: true,
      },
      {
        id: 5,
        name: '麻油鮮菇雞',
        price: 150,
        active: false,
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
        name: '香煎扁鱈魚',
        price: 140,
        active: false,
      },
      {
        id: 2,
        name: '無刺虱目魚肚',
        price: 140,
        active: true,
      },
      {
        id: 3,
        name: '塔香三杯杏包菇餐',
        price: 120,
        active: true,
      },
      {
        id: 4,
        name: '檸檬烤雞餐',
        price: 130,
        active: true,
      },
      {
        id: 5,
        name: '香滷棒棒腿',
        price: 130,
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
        active: true,
      },
      {
        id: 3,
        name: '義式鷄腿排',
        price: 130,
        active: false,
      },
      {
        id: 4,
        name: '海南雞飯',
        price: 130,
        active: true,
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
        name: '鹽烤鮭魚',
        price: 130,
        active: false,
      },
      {
        id: 10,
        name: '雞胸肉炒飯便當',
        price: 120,
        active: true,
      },
      {
        id: 11,
        name: '日式雞塊烏龍麵',
        price: 120,
        active: false,
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
        active: true,
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
        name: '椒麻香酥雞',
        price: 130,
        active: false,
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
    id: 111,
    name: '伊東家',
    active: true,
    bento: [
      {
        id: 1,
        name: '黃悶雞腿肉烏龍麵',
        price: 100,
        active: false,
      },
      {
        id: 2,
        name: '肉燥雞腿肉烏龍麵',
        price: 100,
        active: false,
      },
      {
        id: 3,
        name: '咖哩雞腿肉烏龍麵',
        price: 100,
        active: false,
      },
      {
        id: 4,
        name: '照燒雞腿肉便當',
        price: 100,
        active: true,
      },
      {
        id: 5,
        name: '肉燥雞腿肉便當',
        price: 100,
        active: true,
      },
      {
        id: 6,
        name: '咖哩雞腿肉便當',
        price: 100,
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
    id: 14,
    name: '(臺前花車)了凡',
    active: true,
    date: ['2021/04/08'],
    bento: [
      {
        id: 1,
        name: '叉燒燒肉便當',
        price: 140,
        active: true,
        date: ['2021/04/08'],
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
        date: ['2021/04/08'],
      },
      {
        id: 4,
        name: '叉燒便當',
        price: 130,
        active: true,
        date: ['2021/04/08'],
      },
      {
        id: 5,
        name: '蔥油雞便當',
        price: 130,
        active: true,
        date: ['2021/04/08'],
      },
    ],
  },
  {
    id: 15,
    name: '(臺前花車)紅豆食府',
    active: true,
    date: [
      '2021/04/07',
      '2021/04/08',
      '2021/04/09'
    ],
    bento: [
      {
        id: 1,
        name: '宮保雞丁',
        price: 130,
        active: true,
        date: ['2021/04/08'],
      },
      {
        id: 2,
        name: '紅燒獅子頭',
        price: 130,
        active: true,
        date: ['2021/04/07', '2021/04/09'],
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
        date: ['2021/04/07'],
      },
      {
        id: 8,
        name: '無錫排骨',
        price: 150,
        active: true,
        date: ['2021/04/09'],
      },
      {
        id: 9,
        name: '富貴牛腩煲',
        price: 150,
        active: true,
        date: ['2021/04/08'],
      },
      {
        id: 10,
        name: '椒麻香酥雞',
        price: 130,
        active: true,
        date: ['2021/04/07', '2021/04/09'],
      },
      {
        id: 11,
        name: '蔥油鮮魚',
        price: 130,
        active: true,
        date: ['2021/04/08'],
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
    date: ['2021/04/07'],
    bento: [
      {
        id: 1,
        name: '炭烤大雞腿',
        price: 120,
        active: true,
        date: ['2021/04/07'],
      },
      {
        id: 2,
        name: '炭烤大雞排',
        price: 120,
        active: true,
        date: ['2021/04/07'],
      },
      {
        id: 3,
        name: '炭烤牛五花',
        price: 120,
        active: true,
        date: ['2021/04/07'],
      },
      {
        id: 4,
        name: '燒肉飯',
        price: 120,
        active: true,
        date: ['2021/03/30'],
      },
      {
        id: 5,
        name: '燒烤松阪豬',
        price: 120,
        active: true,
        date: ['2021/04/07'],
      },
    ],
  },
  {
    id: 20,
    name: '(臺前花車)紅豆小館',
    active: true,
    date: [
      '2021/04/07',
      '2021/04/08',
      '2021/04/09'
    ],
    bento: [
      {
        id: 1,
        name: '回鍋肉',
        price: 130,
        active: true,
        date: ['2021/04/08'],
      },
      {
        id: 2,
        name: '辣子雞丁',
        price: 130,
        active: true,
        date: [
          '2021/04/07',
          '2021/04/08',
          '2021/04/09'
        ],
      },
      {
        id: 3,
        name: '水煮嫩肉',
        price: 150,
        active: true,
        date: ['2021/04/07'],
      },
      {
        id: 4,
        name: '豆酥鮮魚',
        price: 130,
        active: true,
        date: ['2021/04/07', '2021/04/09'],
      },
      {
        id: 5,
        name: '香辣口水雞',
        price: 150,
        active: true,
        date: ['2021/04/08'],
      },
      {
        id: 6,
        name: '蒜泥白肉',
        price: 150,
        active: true,
        date: ['2021/04/09'],
      },
    ],
  },
  {
    id: 21,
    name: '(臺前花車)食晴誠食',
    active: true,
    date: ['2021/04/09'],
    bento: [
      {
        id: 1,
        name: '香料烤雞蛋包飯',
        price: 120,
        active: true,
        date: ['2021/03/29'],
      },
      {
        id: 2,
        name: '紹興醉雞飯',
        price: 120,
        active: true,
        date: ['2021/03/29'],
      },
      {
        id: 3,
        name: '糖醋魚飯',
        price: 120,
        active: true,
        date: ['2021/03/29'],
      },
      {
        id: 4,
        name: '椒麻雞蛋包飯',
        price: 120,
        active: true,
        date: ['2021/04/01'],
      },
      {
        id: 5,
        name: '明太子烤雞飯',
        price: 120,
        active: true,
        date: ['2021/04/01'],
      },
      {
        id: 6,
        name: '蔥爆牛肉飯',
        price: 120,
        active: true,
        date: ['2021/04/01'],
      },
      {
        id: 7,
        name: '泰式紅咖哩雞飯',
        price: 120,
        active: true,
        date: ['2021/04/09'],
      },
      {
        id: 8,
        name: '打拋豬花雕雞飯',
        price: 120,
        active: true,
        date: ['2021/04/09'],
      },
      {
        id: 9,
        name: '豬排炒飯',
        price: 120,
        active: true,
        date: ['2021/04/09'],
      },
    ],
  },
]
