const questions = [
  // 用户自定义题
  { id: 1, text: "于朦胧印象最深的粉丝ID是什么？", options: ["把于朦胧上了", "晚风叩帘笼"], correct: 0, selected: null, isAnswered: false },

  // --- 基础个人资料 ---
  { id: 2, text: "于朦胧的英文名是？", options: ["Alan Yu", "Aaron Yu"], correct: 0, selected: null, isAnswered: false },
  { id: 3, text: "于朦胧的出生日期是？", options: ["1989年7月15日", "1988年6月15日"], correct: 1, selected: null, isAnswered: false },
  { id: 4, text: "于朦胧出生于哪个城市？", options: ["甘肃兰州", "新疆乌鲁木齐"], correct: 1, selected: null, isAnswered: false },
  { id: 5, text: "于朦胧毕业的院校是？", options: ["北京演艺专修学院", "北京电影学院"], correct: 0, selected: null, isAnswered: false },
  { id: 6, text: "于朦胧的星座是？", options: ["天秤座", "双子座"], correct: 1, selected: null, isAnswered: false },
  { id: 7, text: "于朦胧的主要职业身份不包括？", options: ["相声演员", "MV导演"], correct: 0, selected: null, isAnswered: false },
  { id: 8, text: "于朦胧的生肖是？", options: ["龙", "兔"], correct: 0, selected: null, isAnswered: false },
  { id: 9, text: "于朦胧是维吾尔族人吗？", options: ["是", "不是"], correct: 1, selected: null, isAnswered: false },
  { id: 10, text: "于朦胧的身高约为？", options: ["183cm", "178cm"], correct: 0, selected: null, isAnswered: false },

  // --- 早期经历与选秀 ---
  { id: 11, text: "2013年，于朦胧参加了哪个选秀节目出道？", options: ["加油！好男儿", "快乐男声"], correct: 1, selected: null, isAnswered:false },
  { id :12 , text : "于朦胧在2013年《快乐男声》中的最终名次是？" , options : [ "全国总决赛第十名" , "全国总冠军" ] , correct : 0 , selected : null , isAnswered : false },
  { id :13 , text : "早在2010年，于朦胧曾参加过“快乐男声”并进入了？" , options : [ "全国300强" , "全国10强" ] , correct : 0 , selected : null , isAnswered : false },
  { id :14 , text : "出道前，于朦胧曾从事过什么职业？" , options : [ "MV导演" , "健身教练" ] , correct : 0 , selected : null , isAnswered : false },
  { id: 15, text: "2011年，他参演的微电影是？", options: ["《老男孩》", "《纵身一跃》"], correct: 1, selected: null, isAnswered: false },

  // --- 影视代表作：太子妃升职记 ---
  { id: 16, text: "让于朦胧受到广泛关注的2015年古装剧是？", options: ["《临江仙》", "《太子妃升职记》"], correct: 1, selected: null, isAnswered: false },
  { id: 17, text: "他在《太子妃升职记》中饰演的角色是？", options: ["九王（齐翰）", "太子（齐晟）"], correct: 0, selected: null, isAnswered: false },
  { id: 18, text: "《太子妃升职记》中“九王”的标志性造型特点是？", options: ["一身黑甲", "一袭白衣"], correct: 1, selected: null, isAnswered: false },

  // --- 影视代表作：三生三世十里桃花 ---
  { id: 19, text: "他在《三生三世十里桃花》中饰演的角色是？", options: ["折颜", "白真"], correct: 1, selected: null, isAnswered: false },
  { id: 20, text: "在《三生三世十里桃花》中，白真的身份是？", options: ["青丘白止帝君第四子", "天族太子"], correct: 0, selected: null, isAnswered: false },
  { id: 21, text: "剧中白真与女主角白浅的关系是？", options: ["兄妹", "师徒"], correct: 0, selected: null, isAnswered: false },
  { id: 22, text: "凭借白真一角，他获得的赞誉是？", options: ["天界第一战神", "四海八荒第一美男"], correct: 1, selected: null, isAnswered: false },

  // --- 影视代表作：新白娘子传奇 ---
  { id: 23, text: "他在2019年版《新白娘子传奇》中饰演？", options: ["许仙", "法海"], correct: 0, selected: null, isAnswered: false },
  { id: 24, text: "2019版《新白娘子传奇》中，与其搭档饰演白素贞的是？", options: ["鞠婧祎", "杨幂"], correct: 0, selected: null, isAnswered: false },
  { id: 25, text: "该版《新白娘子传奇》是基于哪个版本授权改编的？", options: ["2006年刘涛版", "1992年叶童赵雅芝版"], correct: 1, selected: null, isAnswered: false },

  // --- 影视代表作：两世欢 ---
  { id: 26, text: "他在古装悬疑剧《两世欢》中饰演的男主角是？", options: ["李谦", "景辞"], correct: 1, selected: null, isAnswered: false },
  { id: 27, text: "《两世欢》的女主角扮演者是？", options: ["赵丽颖", "陈钰琪"], correct: 1, selected: null, isAnswered: false },
  { id: 28, text: "景辞在剧中的身份背景与哪个国家有关？", options: ["赵王养子", "梁国太子"], correct: 0, selected: null, isAnswered: false },

  // --- 影视代表作：其他剧集 ---
  { id: 29, text: "他在《轩辕剑之汉之云》中饰演的角色是？", options: ["皇甫朝云", "徐暮云"], correct: 1, selected: null, isAnswered: false },
  { id: 30, text: "在《轩辕剑之汉之云》中，徐暮云的一头标志性发色是？", options: ["白发", "红发"], correct: 0, selected: null, isAnswered: false },
  { id: 31, text: "他在《凉生，我们可不可以不忧伤》中饰演的角色是？", options: ["程天恩", "凉生"], correct: 0, selected: null, isAnswered: false },
  { id: 32, text: "程天恩这个角色的身体状况是？", options: ["双腿残疾", "失明"], correct: 0, selected: null, isAnswered: false },
  { id: 33, text: "他在青春剧《谁的青春不叛逆》中饰演？", options: ["鹿相", "鹿因"], correct: 0, selected: null, isAnswered: false },
  { id: 34, text: "他在《明月曾照江东寒》中饰演的角色是？", options: ["林放", "温宥"], correct: 0, selected: null, isAnswered: false },
  { id: 35, text: "林放在剧中的身份是？", options: ["魔教教主", "君安城第一美男/武林盟主"], correct: 1, selected: null, isAnswered: false },
  { id: 36, text: "于朦胧在《侠客行不通》中饰演的全能侠有没有武功？", options: ["有", "没有"], correct: 1, selected: null, isAnswered: false },

  // --- 音乐作品 ---
  { id: 37, text: "于朦胧发行的首张个人EP名称是？", options: ["《礼物》", "《玩具》"], correct: 1, selected: null, isAnswered: false },
  { id: 38, text: "他的同名Mini专辑是？", options: ["《于朦胧》", "《朦胧》"], correct: 0, selected: null, isAnswered: false },
  { id: 39, text: "歌曲《刚好》是哪一年发行的？", options: ["2013年", "2018年"], correct: 0, selected: null, isAnswered: false },
  { id: 40, text: "歌曲《月朦胧鸟朦胧》的MV是于朦胧执导的吗？", options: ["是", "不是"], correct: 0, selected: null, isAnswered: false },
  { id: 41, text: "歌曲《月光》是哪部剧的片尾曲？", options: ["《两世欢》", "《明月曾照江东寒》"], correct: 1, selected: null, isAnswered: false },
  { id: 42, text: "于朦胧个人古风单曲《镜》是哪一年发行的？", options: ["2020", "2018"], correct: 1, selected: null, isAnswered: false },

  // --- 综艺与其他 ---
  { id: 43, text: "2020年，他参加了哪个混龄男性艺人竞演综艺？", options: ["《披荆斩棘的哥哥》", "《追光吧！哥哥》"], correct: 1, selected: null, isAnswered: false },
  { id: 44, text: "他在《追光吧！哥哥》中展现了哪种乐器才艺？", options: ["大提琴", "架子鼓"], correct: 0, selected: null, isAnswered: false },
  { id: 45, text: "他曾作为MV导演为哪位歌手拍摄《61秒》MV？", options: ["丁爽", "李宇春"], correct: 0, selected: null, isAnswered: false },
  { id: 46, text: "2017年，他推出了首张个人同名Mini专辑的主打歌是？", options: ["《自导自演》", "《入戏》"], correct: 0, selected: null, isAnswered: false },
  { id: 47, text: "2014年，他曾获得“全明星风尚盛典”的什么奖项？", options: ["最佳男歌手奖", "风尚新晋男演员奖"], correct: 1, selected: null, isAnswered: false },

  // --- 细节与杂项 ---
  { id: 48, text: "于朦胧的粉丝通常被称为？", options: ["柠檬", "青柠"], correct: 0, selected: null, isAnswered: false },
  { id: 49, text: "他的粉丝应援色通常是？", options: ["柠檬黄", "清新绿"], correct: 0, selected: null, isAnswered: false },
  { id: 50, text: "2018年，他获得了中国电视剧品质盛典的？", options: ["年度星锐剧星奖", "年度最佳男配角"], correct: 0, selected: null, isAnswered: false },
  { id: 51, text: "他在《青春抛物线》中饰演的角色是？", options: ["傅安晏", "叶修"], correct: 0, selected: null, isAnswered: false },
  { id: 52, text: "《青春抛物线》是一部关于什么运动的剧？", options: ["篮球", "排球"], correct: 1, selected: null, isAnswered: false },
  { id: 53, text: "2014年，他出版的个人图文写真书叫？", options: ["《朦胧日记》", "《礼物·遇见于朦胧》"], correct: 1, selected: null, isAnswered: false },
  { id: 54, text: "在古装剧《霍去病》中，他饰演的历史人物是？", options: ["李敢", "卫青"], correct: 0, selected: null, isAnswered: false },
  { id: 55, text: "2017年，他获得了亚洲金曲大赏的？", options: ["内地年度最受欢迎全能艺人", "最佳金曲奖"], correct: 0, selected: null, isAnswered: false },
  { id: 56, text: "他是否参加过2024年的央视春节联欢晚会？", options: ["否", "是"], correct: 1, selected: null, isAnswered: false },
  { id: 57, text: "在《把爱带回家》中，他饰演的角色是？", options: ["夏星尘", "高存志"], correct: 0, selected: null, isAnswered: false },
  { id: 58, text: "他曾主演古装神话电影《玩偶》吗？", options: ["否", "是"], correct: 0, selected: null, isAnswered: false },
  { id: 59, text: "2019年，他获得了金骨朵网络影视盛典的？", options: ["最佳男主角", "年度突破男演员"], correct: 1, selected: null, isAnswered: false },
  { id: 60, text: "哪首歌被收录在于朦胧首张个人EP《玩具》中？", options: ["《凝视》", "《自导自演》"], correct: 0, selected: null, isAnswered: false },
  { id: 61, text: "于朦胧的首部电视剧作品是？", options: ["《把爱带回家》", "《谁的青春不叛逆》"], correct: 0, selected: null, isAnswered: false },
  { id: 62, text: "于朦胧的别名是？", options: ["朦朦、朦胧、萌萌", "胧胧"], correct: 0, selected: null, isAnswered: false },
  { id: 63, text: "华晨宇（花花）怎么称呼于朦胧？", options: ["萌萌", "胧儿"], correct: 1, selected: null, isAnswered: false },
  { id: 64, text: "于朦胧的血型是？", options: ["A型", "B型"], correct: 1, selected: null, isAnswered: false },
  { id: 65, text: "于朦胧演过什么话剧？", options: ["《寄生虫》", "《人民至上》"], correct: 0, selected: null, isAnswered: false },
  { id: 66, text: "2007年，于朦胧参加的是什么选秀节目？", options: ["《快乐男声》", "《我型我秀》"], correct: 1, selected: null, isAnswered: false },
  { id: 67, text: "于朦胧在《一伞烟雨》中饰演的角色是？", options: ["南风意", "司徒寒山"], correct: 0, selected: null, isAnswered: false },
  { id: 68, text: "于朦胧在《一伞烟雨》中饰演的南风意是一名？", options: ["画师", "捉妖师"], correct: 1, selected: null, isAnswered: false },
  { id: 69, text: "2017年，于朦胧获得了第一届微博电视影响力盛典的？", options: ["年度新锐艺人", "年度微博红人"], correct: 0, selected: null, isAnswered: false },
  { id: 70, text: "2019年，于朦胧获得了凤凰时尚盛典的？", options: ["年度时尚气质榜样", "最佳男艺人"], correct: 0, selected: null, isAnswered: false },
  { id: 71, text: "2021年，于朦胧获得了费加罗风尚盛典的？", options: ["年度时尚潮流奖", "年度风尚星光魅力奖"], correct: 1, selected: null, isAnswered: false },
  { id: 72, text: "于朦胧爱不爱吃辣？", options: ["不爱", "很爱"], correct: 1, selected: null, isAnswered: false },
  { id: 73, text: "于朦胧吃火锅必点的菜是什么？", options: ["虾、青笋、土豆", "毛肚、鸭胗、黄喉"], correct: 0, selected: null, isAnswered: false },
  { id: 74, text: "于朦胧脸上的痘坑是怎么来的？", options: ["青春期长痘痘留下的", "小时候长水痘妈妈扣的"], correct: 0, selected: null, isAnswered: false },
];

window.questions = questions;
