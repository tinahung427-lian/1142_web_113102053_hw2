// src/store.js
import { create } from 'zustand'

const questionData = [
    {
      title: "你走進一間沒有招牌的雜貨店，你會拿起哪種卡帶？",
      options:[
        {
          text: "帶著刮痕的透明外殼",
          value: 1
        },
        {
          text: "半透明的琥珀色外殼，在燈光下折射出光澤",
          value: 2
        },
        {
          text: "鮮豔的紅綠撞色外殼",
          value: 3 
        },
        {
          text: "霧面的純白外殼",
          value: 4
        }
      ]
    },
    {
      title: "你按下播放鍵，聽到的是什麼聲音？",
      options:[
        {
          text: "風吹過稻田、遠處有狗吠與家人做飯的喧鬧聲。",
          value: 1
        },
        {
          text: "雨水滴落酒館窗戶，伴隨著冰塊撞擊玻璃杯的清脆聲。",
          value: 2
        },
        {
          text: "午夜街頭，呼嘯而過的摩托車引擎聲與滑板摩擦地面的聲音。",
          value: 3 
        },
        {
          text: "時鐘滴答聲，以及紙張被緩慢翻動的沙沙聲。",
          value: 4
        }
      ]
    },
    {
      title: "如果倒帶鍵可以帶你回到過去，你會選擇回到哪個時刻？",
      options:[
        {
          text: "回到某個與好友聊天、無憂無慮的午後。",
          value: 1
        },
        {
          text: "回到某次遺憾，正式的道別",
          value: 2
        },
        {
          text: "直接按快轉跳過，只想去未來",
          value: 3 
        },
        {
          text: "回到某次爭吵的時刻，試圖解決誤會。",
          value: 4
        }
      ]
    },
    {
      title: "播放器「喀拉」一聲，卡帶好像卡住了，你會怎麼做？",
      options:[
        {
          text: "完蛋了！手忙腳亂地亂按按鍵，希望它自己彈出來",
          value: 1
        },
        {
          text: "抬眼看看周遭，放空一下，放鬆心情",
          value: 2
        },
        {
          text: "感到非常煩躁，用力把卡帶扯出來",
          value: 3 
        },
        {
          text: "尋找工具，想辦法解決問題",
          value: 4
        }
      ]
    },
    {
      title: "你拆開卡帶外殼，發現裡面有一張紙條，你覺得上面寫什麼？",
      options:[
        {
          text: "「記得早點回家。」",
          value: 1
        },
        {
          text: "「如果能重來一次，我想好好說再見。」",
          value: 2
        },
        {
          text: "「別停下來，繼續往前吧！」",
          value: 3 
        },
        {
          text: "「總有一天，你會享受現在的孤獨。」",
          value: 4
        }
      ]
    },
    {
      title: "離開雜貨店後，你想把這卷卡帶送給誰？",
      options:[
        {
          text: "送給曾經陪自己度過很多日子的朋友",
          value: 1
        },
        {
          text: "送給某個已經很久沒聯絡，但偶爾還會想起的人",
          value: 2
        },
        {
          text: "自己留著，在某些失眠的夜晚反覆播放",
          value: 3 
        },
        {
          text: "送給那個總是安靜聽你說話的老師",
          value: 4
        }
      ]
    },
];


// 建立 store hook
const usePsyStore = create((set) => ({
    // states and actions
    psyData:{
        score: 0,
        quizData: questionData
    },
    setScore: (score) => set( (state) => ( { psyData: { ...state.psyData, score: score}} )  )

}))


export { usePsyStore }