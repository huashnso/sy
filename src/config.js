const config = {
  //网页元数据
  metaData:{
    title: 'hsh的个人主页🎉',
    description: '欢迎来到HUAS HNSO的奇妙世界！',
    keywords: 'Leleo,leleo,个人主页,个人网站',
    icon: '/favicon.ico'   //网页图标，支持外链
  },

  avatar: "/img/avatar.jpg", // 头像
  welcometitle: "The world is in my hands!", // 标题

  // 颜色配置
  color: {
    themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
    welcometitlecolor: "#7BFFC9", // 标题颜色 例： #7BFFC9
    turntablecolor1: "#FFFF00",  // 转盘渐变色一
    turntablecolor2: "#00FFFF"   // 转盘渐变色二
  },
  
  brightness: 85, // 背景亮度 --%
  blur: 5, // 毛玻璃模糊效果

  // 我的标签
  tags : ['乐观开朗','温柔体贴','随和亲切','冷静沉着','才思敏捷','风趣幽默','刚正不阿','善解人意'],

  // 默认背景壁纸
  background: {
    "pc":{   //pc端
      "type":"pic",   //"pic":静态壁纸;"video":动态壁纸
      "datainfo":{
        "title":"海洋女孩", 
        "preview":"/img/wallpaper/static/海洋女孩/image-pre.webp",
        "url":"/img/wallpaper/static/海洋女孩/image.png",     //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":"https://t.mwm.moe/pc"
      },
    },
    "mobile":{   //移动端
      "type":"pic",
      "datainfo":{
        "title":"0001", 
        "preview":"/img/wallpaper/static-mobile/0001/image-pre.webp",
        "url":"/img/wallpaper/static-mobile/0001/image.png"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
      }
    }
      
  },

  //极坐标图数据
  polarChart:{
    skills: ['Node', 'Vue.js', 'React', 'JavaScript', 'Java', 'Python', 'linux', 'Docker', 'MySQL', 'MongoDB', 'AWS'],
    skillPoints: [90, 85, 78, 88, 80, 78, 85, 65, 82, 78, 65],
  },

  //社交按钮，图标使用mdi图标（https://pictogrammers.com/library/mdi/），复制图标名称即可
  socialPlatformIcons: [
    {icon:"mdi-github",link:"https://www.github.com/leleo886"},
    {icon:"mdi-email",link:"mailto:leleo886@foxmail.com"},
    {icon:"mdi-qqchat",link:"https://im.qq.com/"},
    {icon:"mdi-wechat",link:"https://wx.qq.com/"},
    {icon:"mdi-youtube",link:"https://www.youtube.com"},
    {icon:"mdi-facebook",link:"https://www.facebook.com"}
  ],

  //打字机
  typeWriterStrings: [
  "如果你看到了这行字，说明我已经成功吸引到了你的注意力。",
  "顶峰的少年，给了你所有细节，你却说我不是迪迦，给不了你想要的光。",
  "心简单，世界就简单，幸福才会生长；心自由，生活就自由，到哪都有快乐。",
  "生命太短，没有时间留给遗憾，若不是终点，请微笑一直向前。",
  "生活不是为了赶路，而是为了感受路，别让忙碌带走你的快乐。",
  "慢下来，你会发现，风里藏着温柔，云里裹着浪漫。",
  "生活嘛，慢慢来，好运都在路上，你急什么。",
  "生活的温柔，藏在每一个值得期待的明天里。",
  "日子是过给自己的，不必在意别人的眼光。",
  "你只管努力，剩下的交给时间，它会给你答案。",
  "那些看似不起波澜的日复一日，会在某天让你看到坚持的意义。",
  "生活的理想，就是为了理想的生活，慢慢来，谁不是翻山越岭在成长。",
  "风遇山止，船到岸停，我们都在奔赴各自不同的人生。",
  "把烦心事都丢进风里，让快乐和好运伴你前行。",
  "在心里种花，人生才不会荒芜，在心里种树，人生才不会迷路。",
  "你不必光芒万丈，也不必有什么特殊的意义，你只需要做那个小小的你，然后去爱。",
  "别慌，月亮也正在大海某处迷茫，你也终会找到属于自己的光。",
  "生活是自己的，尽情打扮，尽情可爱，尽情快乐。",
  "生活是晨起暮落，日子是柴米油盐，平淡的过着，简单的活着。",
  "日子渺小重复，却都是幸福，把普通的日子过得浪漫些。",
  "把不开心都丢进垃圾桶，一键清除，然后拥抱新的一天。",
  "生活是一场漫长的旅行，不要浪费时间，去等待那些不愿与你携手同行的人。",
  "你要储蓄你的可爱，眷顾你的善良，变得勇敢，当这个世界越来越坏时，只希望你能越来越好。",
  "别让生活的压力挤走快乐，不管昨天发生了什么，都要相信，明天会更好。",
  "生活有点苦，但我希望你能自己加糖，哪怕只是一颗糖，也能甜很久。",
  "把鸡毛蒜皮换成风和日丽，把乱七八糟换成顺顺利利。",
  "生活是自己的，所以我们要尽情的可爱，哪怕日子不怎么可爱，我们也要可爱。",
  "在这个快节奏的时代，慢下来，去感受生活的美好，才是最重要的。",
  "你要知道，你不是一个人，你还有星星和月亮，还有我。",
  "生活嘛，就是要笑一笑，没什么大不了，天塌下来还有高个子顶着。"
  ],

  //音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
  musicPlayer:{
    server: 'netease',  //服务提供商 --网易云音乐
    type: 'playlist',   //歌单类型
    id: '2028178887'  //歌单id ---> music.163.com/#/playlist?id=2028178887
  },

  //壁纸数据 -----可以将壁纸文件上传到图床获取网络直链。若想调用api，请前往脚本自行修改逻辑
  wallpaper:{
    pic:[
      {"title":"海洋女孩","preview":"/img/wallpaper/static/海洋女孩/image-pre.webp","url":"/img/wallpaper/static/海洋女孩/image.png"},
      {"title":"书房夜晚","preview":"/img/wallpaper/static/书房夜晚/image-pre.webp","url":"/img/wallpaper/static/书房夜晚/image.png"},
      {"title":"安逸舒适","preview":"/img/wallpaper/static/安逸舒适/image-pre.webp","url":"/img/wallpaper/static/安逸舒适/image.png"},
    ],
    picMobile:[
      {"title":"0001","preview":"/img/wallpaper/static-mobile/0001/image-pre.webp","url":"/img/wallpaper/static-mobile/0001/image.png"},
      {"title":"0002","preview":"/img/wallpaper/static-mobile/0002/image-pre.webp","url":"/img/wallpaper/static-mobile/0002/image.png"},
      {"title":"0003","preview":"/img/wallpaper/static-mobile/0003/image-pre.webp","url":"/img/wallpaper/static-mobile/0003/image.png"},
      {"title":"0004","preview":"/img/wallpaper/static-mobile/0004/image-pre.webp","url":"/img/wallpaper/static-mobile/0004/image.png"},
    ],
    video:[
      {
        "title":"尼尔：机械纪元 团队",
        "preview":"/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
        "url":"/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
      },
      {
        "title":"向往航天的女孩",
        "preview":"/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
        "url":"/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
      },
    ],
    videoMobile:[
      {
        "title":"幻觉镇-gaako_illust",
        "preview":"/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
      },
      {
        "title":"chuva",
        "preview":"/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
      },
      {
        "title":"Doodle-小猫女仆降临",
        "preview":"/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
      },
    ],
  },


  //项目卡片 其中 字段"show"控制初始卡片的text是否展开
  projectcards:[ 
    {go:"🚀 前往",img:"/img/sunshine.jpg",title:"HUAS HNSO传送门",subtitle:"一起去看世界吧", text:"世界辽阔无边，藏着朝暮晚霞，山野清风，岁岁皆是深情。",url:"https://huashnso.github.io/",show:false},
    {go:"🗂️ 前往",img:"/img/sunshine.jpg",title:"画廊",subtitle:"生活藏满缤纷色彩，处处皆是美好。", text:"深浅交织的斑斓色彩，褪去尘世浮躁，温柔抚平所有心绪。",url:"https://leleo.top",show:false},
    {go:"📝 前往",img:"/img/sunshine.jpg",title:"网盘",subtitle:"云端藏万象，方寸纳山河。", text:"它静默如影，跨越设备与距离，让重要的一切永不丢失。",url:"https://leleo.top",show:false},
    {go:"👍 前往",img:"/img/sunshine.jpg",title:"留言",subtitle:"人间朝暮，叶落归安。", text:"愿你遍历山河，仍觉人间值得。",url:"https://leleo.top",show:false},
    {go:"🗃 前往",img:"/img/sunshine.jpg",title:"Project 5",subtitle:"5,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://leleo.top",show:false},
    {go:"🎨 前往",img:"/img/sunshine.jpg",title:"Project 6",subtitle:"6,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://leleo.top",show:false},
    {go:"💍 前往",img:"/img/sunshine.jpg",title:"Project 7",subtitle:"7,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://leleo.top",show:false},
    {go:"🔍 前往",img:"/img/sunshine.jpg",title:"Project 8",subtitle:"8,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://leleo.top",show:false},
  ],
  statement: ["备案号：XXICP备123456789号","Copyright © 2025 Leleo"],
}

export default config
