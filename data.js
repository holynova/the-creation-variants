const VARIATIONS = [
  // --- 一、科技重构与人机共生 ---
  {
    id: 1,
    titleCN: "人类与人工智能",
    titleEN: "Human & Artificial Intelligence",
    category: "tech",
    categoryLabel: "科技与共生",
    image: "images/01-human-and-ai.jpg",
    touchSubject: "血肉之躯 ⟷ 光纤神经元",
    meaning: "当碳基生命的温润指尖迎向硅基智能的璀璨光芒，神圣的光芒在两者之间迸发。这不是被取代的恐惧，而是生命意志向全新智能维度的觉醒与赋权。",
    quote: "“神造了人，而人以自己的智慧重塑了造物的幻影。”",
    tags: ["AI", "神经网络", "未来", "硅基生命"]
  },
  {
    id: 2,
    titleCN: "人类与机械人",
    titleEN: "Human & Cybernetic Android",
    category: "tech",
    categoryLabel: "科技与共生",
    image: "images/02-human-and-robot.jpg",
    touchSubject: "人类肌理 ⟷ 钛合金指节",
    meaning: "向阿西莫夫《机器人三定律》与赛博朋克科幻黄金时代的崇高致敬。在古典天使簇拥下的金属天使，探出精密机械指节，赋予机器第一丝自我意识的电流。",
    quote: "“当第一道电弧跳过指尖，机器便拥有了心跳的错觉。”",
    tags: ["机械人", "赛博朋克", "阿西莫夫", "硬件"]
  },
  {
    id: 3,
    titleCN: "史蒂夫·乔布斯与初代 iPhone",
    titleEN: "Steve Jobs & The Original iPhone",
    category: "tech",
    categoryLabel: "科技与共生",
    image: "images/03-jobs-and-iphone.jpg",
    touchSubject: "黑色高领 ⟷ 电容多点触控",
    meaning: "2007年旧金山莫斯康展览中心，乔布斯伸出手指触碰那块3.5英寸电容玻璃屏幕。指尖相碰的瞬间，点燃了全球移动互联网时代的星火燎原。",
    quote: "“我们重新定义了手机，也重新定义了人类连接世界的方式。”",
    tags: ["乔布斯", "iPhone", "苹果", "触控革命"]
  },
  {
    id: 4,
    titleCN: "程序员与绿色光标",
    titleEN: "Programmer & The Pulsing Cursor",
    category: "tech",
    categoryLabel: "科技与共生",
    image: "images/04-coder-and-cursor.jpg",
    touchSubject: "疲惫极客 ⟷ 终端口光标矩阵",
    meaning: "深夜无人的写字楼，主板电缆缠绕的工位上，疲惫的程序员向虚空伸出手。终端里跳动的绿色矩形方块探出一只代码织就的光之手，指尖相触，编译通过。",
    quote: "“在无数个寂静子夜，是那束跳动不息的光标守候着世界的运转。”",
    tags: ["代码", "终端", "黑客帝国", "极客浪漫"]
  },
  {
    id: 5,
    titleCN: "极客与开源企鹅",
    titleEN: "Geek & Tux The Linux Penguin",
    category: "tech",
    categoryLabel: "科技与共生",
    image: "images/05-geek-and-penguin.jpg",
    touchSummary: "自由黑客 ⟷ 开源神明",
    touchSubject: "开源先驱 ⟷ Tux 企鹅翼尖",
    meaning: "在代码云朵与终端窗口之间，憨态可掬却神圣不可侵犯的 Tux 企鹅探出翅膀。自由与开源的精神在此刻跨越物理限制，赋予全球开发者平等创新的火种。",
    quote: "“Talk is cheap. Show me the code. 自由不仅是免费，更是自由意志的流转。”",
    tags: ["Linux", "开源", "Tux", "自由软件"]
  },
  {
    id: 6,
    titleCN: "图灵与神秘苹果",
    titleEN: "Alan Turing & The Enigmatic Apple",
    category: "tech",
    categoryLabel: "科技与共生",
    image: "images/06-turing-and-apple.jpg",
    touchSubject: "密码破译之父 ⟷ 彩虹微光苹果",
    meaning: "布莱切利园的恩尼格玛转子与真空管旁，图灵伸出手指触向悬浮空中的咬痕苹果。二进制纸带如流云漫卷，这是现代计算科学源头最崇高而隐忍的史诗刻印。",
    quote: "“有时候，正是那些无人看好的人，成就了无人能及的事。”",
    tags: ["图灵", "密码机", "计算理论", "致敬先驱"]
  },

  // --- 二、宇宙探索与科学启蒙 ---
  {
    id: 7,
    titleCN: "宇航员与外星生命",
    titleEN: "Astronaut & Extraterrestrial Entity",
    category: "cosmos",
    categoryLabel: "宇宙与探索",
    image: "images/07-astronaut-and-alien.jpg",
    touchSubject: "阿波罗宇航手套 ⟷ 荧光星际灵体",
    meaning: "在荒凉寂寥的月壤之上，人类加压手套探向深空，遇见了穿越数亿光年星尘而来的高等荧光智慧。宇宙黑暗森林里最浪漫而纯粹的第一次接触。",
    quote: "“宇宙如此辽阔，若只有我们，岂不是太浪费空间了？”",
    tags: ["航天", "地外文明", "星际接触", "深空"]
  },
  {
    id: 8,
    titleCN: "牛顿与引力苹果",
    titleEN: "Isaac Newton & The Defying Apple",
    category: "cosmos",
    categoryLabel: "宇宙与探索",
    image: "images/08-newton-and-apple.jpg",
    touchSubject: "古典学者 ⟷ 反重力黄金之果",
    meaning: "伍尔斯索普庄园的树荫下，一颗苹果抗拒重力悬浮于天幕。牛顿伸出手指，天体几何轨道与微积分曲线在云海中显现，宏观宇宙的秩序被彻底启封。",
    quote: "“我不知道世人怎样看我，但我只觉得自己像个在海边拾贝的孩童。”",
    tags: ["牛顿", "万有引力", "古典物理", "顿悟时刻"]
  },
  {
    id: 9,
    titleCN: "旅行者1号与暗淡蓝点",
    titleEN: "Voyager 1 & The Pale Blue Dot",
    category: "cosmos",
    categoryLabel: "宇宙与探索",
    image: "images/09-voyager-and-earth.jpg",
    touchSubject: "金色唱片吊杆 ⟷ 遥远的母星地球",
    meaning: "飞出太阳圈的旅行者1号回望，金色唱片在探针与地球之间散发微光。这是人类向无垠宇宙投寄的最孤独漂流瓶，与亿万生灵共居的暗淡蓝点相向互望。",
    quote: "“看那个光点，那就是这里，那就是家，那就是我们。”",
    tags: ["旅行者号", "卡尔·萨根", "金色唱片", "深空遗迹"]
  },
  {
    id: 10,
    titleCN: "天文学家与黑洞奇点",
    titleEN: "Astronomer & The Singularity",
    category: "cosmos",
    categoryLabel: "宇宙与探索",
    image: "images/10-astronomer-and-blackhole.jpg",
    touchSubject: "观测者指尖 ⟷ 相对论吸积盘",
    meaning: "在雪山望远镜旁，渺小的天文学家向深空探出手。炽热旋转的光子环与视界黑洞伸展出引力光带，人类理性的极限与宇宙最极端天体在此交汇。",
    quote: "“凝视深渊的人，最终以公式与透镜照亮了深渊的面容。”",
    tags: ["黑洞", "爱因斯坦", "事件视界", "广义相对论"]
  },
  {
    id: 11,
    titleCN: "分子生物学家与 DNA 双螺旋",
    titleEN: "Biologist & DNA Double Helix",
    category: "cosmos",
    categoryLabel: "宇宙与探索",
    image: "images/11-biologist-and-dna.jpg",
    touchSubject: "实验白大褂 ⟷ 旋转发光碱基对",
    meaning: "拉丁文刻铭“CREATIO HELICIS”。在显微镜与试管之间，女科学家伸手触碰生命基因密码的金色螺旋。从无机尘埃到有机生命，这一触揭示了自我繁衍的终极奥义。",
    quote: "“我们不仅是星尘的产物，更是写在四种碱基字母里的宇宙诗篇。”",
    tags: ["DNA", "生命科学", "分子遗传", "克里克与沃森"]
  },

  // --- 三、艺术、哲学与文明源起 ---
  {
    id: 12,
    titleCN: "米开朗基罗与大卫像",
    titleEN: "Michelangelo & Statue of David",
    category: "art",
    categoryLabel: "艺术与哲学",
    image: "images/12-michelangelo-and-david.jpg",
    touchSubject: "工匠凿刀手 ⟷ 大理石雕像苏醒",
    meaning: "卡拉拉大理石碎屑飞溅，米开朗基罗手握木槌与錾子伸出右手。大卫冷峻的石雕手指在触碰瞬间化作有温度的血肉。创作者与造物的身份在永恒艺术中彻底倒转。",
    quote: "“我看见天使被困在石头里，我只是将他雕凿释放出来。”",
    tags: ["米开朗基罗", "大卫像", "文艺复兴", "雕塑传奇"]
  },
  {
    id: 13,
    titleCN: "梵高与炽烈向日葵",
    titleEN: "Vincent van Gogh & The Sunflowers",
    category: "art",
    categoryLabel: "艺术与哲学",
    image: "images/13-vangogh-and-sunflowers.jpg",
    touchSubject: "包扎伤耳的画家 ⟷ 太阳向日葵神灵",
    meaning: "阿尔勒的原野上，身着蓝布工装、耳缠绷带的梵高伸手向天际。一株宛若太阳神化身的金黄向日葵自云海降临，厚重油彩笔触如烈焰般在指间引燃。",
    quote: "“在我的画里，我想要表达某种令人抚慰的感情，就像音乐一样。”",
    tags: ["梵高", "向日葵", "后印象派", "灵魂燃烧"]
  },
  {
    id: 14,
    titleCN: "哲学家与真理之光",
    titleEN: "Philosopher & The Realm of Truth",
    category: "art",
    categoryLabel: "艺术与哲学",
    image: "images/14-philosopher-and-truth.jpg",
    touchSubject: "洞穴求索者 ⟷ 理念界真理女神",
    meaning: "走出柏拉图洞穴阴影的古希腊哲人，踏在冰冷石阶上向天穹伸手。光芒万丈的智慧女神自理念界俯身探出光之手，指尖相触，照亮蒙昧人类对终极真理的渴望。",
    quote: "“未经审视的生活是不值得过的。”",
    tags: ["苏格拉底", "柏拉图洞穴", "理念论", "古希腊哲学"]
  },
  {
    id: 15,
    titleCN: "远古智人与初生火种",
    titleEN: "Primitive Hominid & The First Flame",
    category: "art",
    categoryLabel: "艺术与哲学",
    image: "images/15-primitive-and-fire.jpg",
    touchSubject: "兽皮先民 ⟷ 普罗米修斯天火",
    meaning: "漆黑冰冷的更新世荒原，身披兽皮的原始先民战战兢兢地仰望苍穹。雷霆与天神普罗米修斯降下一缕永不熄灭的炽红火光，文明在指尖接引的瞬间诞生。",
    quote: "“火不仅驱散了黑暗与猛兽，更在古老眼眸中映出了文明的破晓。”",
    tags: ["普罗米修斯", "火种", "石器时代", "文明曙光"]
  },
  {
    id: 16,
    titleCN: "书法家与水墨游龙",
    titleEN: "Calligrapher & The Ink Dragon",
    category: "art",
    categoryLabel: "艺术与哲学",
    image: "images/16-calligrapher-and-dragon.jpg",
    touchSubject: "悬腕毛笔 ⟷ 宣纸化形墨龙",
    meaning: "云雾缭绕的高山石案前，东方书法大师提笔悬空。宣纸上的浓淡干湿化作一条凌空翻腾的纯黑水墨巨龙，龙爪与大师指尖相接，气韵生动，天地归心。",
    quote: "“笔落惊风雨，诗成泣鬼神。一墨一毫间，自有天地大化。”",
    tags: ["东方美学", "水墨", "书法", "飞龙在天"]
  },

  // --- 四、自然生态与地球共生 ---
  {
    id: 17,
    titleCN: "人类孩童与大地之母盖亚",
    titleEN: "Child & Mother Gaia",
    category: "nature",
    categoryLabel: "自然与共生",
    image: "images/17-child-and-gaia.jpg",
    touchSubject: "纯真小手 ⟷ 绿苔藤蔓神手",
    meaning: "开满雏菊与蒲公英的野花草甸上，人类幼童稚嫩无邪地伸出小手。由盘根错节的老树、翠苔与清冽山泉汇聚而成的大地神灵温柔探出指尖，生命的轮回生生不息。",
    quote: "“大地不属于人类，人类属于大地。”",
    tags: ["盖亚假说", "生态", "生命之源", "母爱"]
  },
  {
    id: 18,
    titleCN: "自由潜水员与座头鲸",
    titleEN: "Freediver & The Humpback Whale",
    category: "nature",
    categoryLabel: "自然与共生",
    image: "images/18-freediver-and-whale.jpg",
    touchSubject: "轻潜水者 ⟷ 深海巨兽胸鳍",
    meaning: "蔚蓝透彻的大洋深处，无气瓶的自由潜水员宛如游鱼般悬浮在光柱下。数十吨重却温和如长者的座头鲸缓缓伸展长鳍，两颗跨越亿万年演化鸿沟的心脏在此共鸣。",
    quote: "“在蓝色的深渊里，每一次深邃的凝望都是物种之间的握手言和。”",
    tags: ["海洋", "座头鲸", "自由潜水", "物种交流"]
  },
  {
    id: 19,
    titleCN: "野生动物巡护员与白犀牛",
    titleEN: "Ranger & The Last White Rhino",
    category: "nature",
    categoryLabel: "自然与共生",
    image: "images/19-ranger-and-rhino.jpg",
    touchSubject: "护林人掌心 ⟷ 白犀牛尊贵角尖",
    meaning: "暮色笼罩的东非金黄稀树草原，疲惫却目光深沉的野生动物巡护员坐在金合欢树下。濒危物种的巨兽缓缓俯首，与守护者触碰。守护与被守护，在此刻定格为永恒悲悯。",
    quote: "“如果我们不能保护同行的生灵，我们将如何在孤独的地球上自处？”",
    tags: ["生态保护", "白犀牛", "巡护员", "非洲草原"]
  },
  {
    id: 20,
    titleCN: "植物学家与千年巨杉",
    titleEN: "Botanist & Ancient Giant Sequoia",
    category: "nature",
    categoryLabel: "自然与共生",
    image: "images/20-botanist-and-sequoia.jpg",
    touchSubject: "求索学者 ⟷ 三千年木质神心",
    meaning: "晨雾弥漫的北美原始红杉林中，植物学家手握放大镜仰卧于松针地毯。三千年风霜的红杉树心探出一缕琥珀色的树灵之手，指尖相触，岁月长河的年轮在心底流转。",
    quote: "“在三千年的沉默面前，人类所有的帝国盛衰不过是一瞬清风。”",
    tags: ["古树", "巨杉", "植物学", "自然神性"]
  },

  // --- 五、神话幻境与时空超现实 ---
  {
    id: 21,
    titleCN: "赛博黑客与霓虹电子神明",
    titleEN: "Cyberpunk Netrunner & Neon Deity",
    category: "fantasy",
    categoryLabel: "奇幻与超现实",
    image: "images/21-cyberpunk-and-neon-deity.jpg",
    touchSubject: "雨夜天台黑客 ⟷ 全息数码泰坦",
    meaning: "高楼林立、霓虹倒映在水泊中的赛博朋克雨夜，披着风衣的黑客躺在天台冷铁边缘。天际线间浮现出巍峨神圣的数码全息神祇，伸出激光几何编织的光之手，代码升华。",
    quote: "“城市没有白昼，但我们在高压电弧与霓虹幻梦中遇见了新神。”",
    tags: ["赛博朋克", "霓虹", "全息神", "夜之城"]
  },
  {
    id: 22,
    titleCN: "小王子与独一无二的玫瑰",
    titleEN: "The Little Prince & The Unique Rose",
    category: "fantasy",
    categoryLabel: "奇幻与超现实",
    image: "images/22-little-prince-and-rose.jpg",
    touchSubject: "黄色围巾少年 ⟷ 玻璃罩娇艳玫瑰",
    meaning: "B-612小行星微小的曲面上，金发小王子金黄围巾在深空星河中轻轻飘扬。玻璃罩下的玫瑰探出娇柔花瓣与小王子的指尖相触。正是你为玫瑰花费的时间，才使她如此珍贵。",
    quote: "“你在你的玫瑰花身上耗费的时间，使得你的玫瑰花变得如此重要。”",
    tags: ["小王子", "玫瑰", "B612", "爱与驯服"]
  },
  {
    id: 23,
    titleCN: "青年与未来的自己",
    titleEN: "Time Traveler & The Future Self",
    category: "fantasy",
    categoryLabel: "奇幻与超现实",
    image: "images/23-timetraveler-and-future-self.jpg",
    touchSubject: "青春年少 ⟷ 白发苍髯的八十岁",
    meaning: "时间的时钟齿轮与金色沙漏如星云旋转，中央一道水波涟漪的透明时空镜面。二十岁的年轻人与八十岁饱经沧桑却目光慈祥的自己手指相对，跨越一生的宽容与对话。",
    quote: "“不要害怕未来的风浪，我已经走过了那段岁月，而你正让它熠熠生辉。”",
    tags: ["时空穿梭", "自我对话", "岁月", "量子纠缠"]
  },
  {
    id: 24,
    titleCN: "爱丽丝与柴郡猫的微笑",
    titleEN: "Alice & Cheshire Cat's Vanishing Paw",
    category: "fantasy",
    categoryLabel: "奇幻与超现实",
    image: "images/24-alice-and-cheshire-cat.jpg",
    touchSubject: "围裙少女 ⟷ 渐隐空中的星光猫爪",
    meaning: "在棋盘菌类与悬浮扑克牌构筑的奇境乐园，金发爱丽丝好奇地伸手。若隐若现、唯余标志性神秘月牙微笑的柴郡猫自虚空中探出半透明的爪子，荒诞与哲思在此碰撞。",
    quote: "“只要你走得足够远，你总会到达某个地方的。”",
    tags: ["爱丽丝梦游仙境", "柴郡猫", "童话", "超现实"]
  },
  {
    id: 25,
    titleCN: "炼金术士与贤者之石",
    titleEN: "Alchemist & The Philosopher's Stone",
    category: "fantasy",
    categoryLabel: "奇幻与超现实",
    image: "images/25-alchemist-and-philosophers-stone.jpg",
    touchSubject: "天鹅绒炼金袍 ⟷ 漂浮血红哲人石",
    meaning: "古老中世纪密室充满蒸馏器、星盘与神圣几何羊皮纸。老迈的炼金术士伸出颤抖的手指，点向悬浮空中散发着炽红金光的传奇哲人石，铅石点金的奇迹在此封顶。",
    quote: "“如同在上，如同在下；如同在内，如同在外。万物皆源于同一的奇迹。”",
    tags: ["炼金术", "贤者之石", "神秘学", "大事业"]
  },

  // --- 六、人间烟火与生命温情 ---
  {
    id: 26,
    titleCN: "孩童与白发祖父",
    titleEN: "Child & Weathered Grandfather",
    category: "humanity",
    categoryLabel: "人间与温情",
    image: "images/26-child-and-grandfather.jpg",
    touchSubject: "初生嫩芽 ⟷ 沧桑岁月的青筋",
    meaning: "夕阳斜照的老宅门廊前，蹒跚学步的幼童伸出肥嘟嘟的小手。八十五岁祖父布满厚茧、青筋隆起如黄土高坡沟壑的大手伸出相迎。生命的血脉与家族的记忆在指端静默交接。",
    quote: "“你的起点是我走过的漫漫长路，我的落日是你眼眸里初升的朝阳。”",
    tags: ["亲情", "祖孙", "岁月传承", "生命轮回"]
  },
  {
    id: 27,
    titleCN: "独居者与猫咪肉垫",
    titleEN: "Solo Dweller & Cat's Pink Paw",
    category: "humanity",
    categoryLabel: "人间与温情",
    image: "images/27-solodweller-and-cat.jpg",
    touchSubject: "疲惫下班青年 ⟷ 粉嫩山竹猫爪",
    meaning: "现代城市微凉的黄昏，独居青年脱下工牌躺在客厅地毯上。沙发上伸着懒腰的花猫懒洋洋地伸出一只前爪，软糯粉嫩的肉垫与人类食指轻轻对碰，治愈了一整天的孤寂。",
    quote: "“在这个庞大冷漠的世界里，总有一小团温热的心跳在等你回家。”",
    tags: ["猫咪", "治愈", "独居生活", "陪伴"]
  },
  {
    id: 28,
    titleCN: "咖啡师与清晨第一缕阳光",
    titleEN: "Barista & Morning Sunbeam",
    category: "humanity",
    categoryLabel: "人间与温情",
    image: "images/28-barista-and-morning-sunbeam.jpg",
    touchSubject: "拉花钢杯手 ⟷ 窗棂倾泻的晨光",
    meaning: "街角咖啡馆的第一声蒸汽嘶鸣，专注的咖啡师倾斜奶缸勾勒天鹅拉花。晨曦如圣光穿透落地窗，一缕纯金色的阳光与咖啡师的指尖在蒸腾热气上方相遇。",
    quote: "“每一杯唤醒整座城市的香浓，都是向清晨投递的一封温柔情书。”",
    tags: ["咖啡", "晨光", "日常烟火", "生活美学"]
  },
  {
    id: 29,
    titleCN: "产科医生与新生奇迹",
    titleEN: "Obstetrician & Newborn Miracle",
    category: "humanity",
    categoryLabel: "人间与温情",
    image: "images/29-doctor-and-newborn.jpg",
    touchSubject: "无菌手术手套 ⟷ 婴儿握持反射",
    meaning: "手术室神圣无瑕的光照下，产科医生戴着乳胶无菌手套轻轻探出一指。刚剪断脐带、啼哭声响彻产房的新生儿，本能地用整个稚嫩拳头紧紧握住医生的指腹。",
    quote: "“迎接入世的第一声啼哭，是凡人世界里最接近神迹的时刻。”",
    tags: ["诞生", "医生", "新生儿", "生命的奇迹"]
  },
  {
    id: 30,
    titleCN: "建筑师与未来天空之城",
    titleEN: "Architect & Floating Sky City",
    category: "humanity",
    categoryLabel: "人间与温情",
    image: "images/30-architect-and-sky-city.jpg",
    touchSubject: "图纸与圆规 ⟷ 悬浮太阳能城邦",
    meaning: "高耸云端的摩天脚手架上，青年建筑师手握图纸仰望长空。天穹云海中，一座由悬浮反重力晶体、垂直空中森林构筑的理想国之城探下尖顶，梦想在指尖化作真实宏图。",
    quote: "“凡人类所能梦想之宏伟，终有一日能在云海之巅立起坚固的基石。”",
    tags: ["建筑", "天空之城", "未来都市", "人类梦想"]
  }
];
