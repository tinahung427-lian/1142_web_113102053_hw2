import { create } from 'zustand'

let questionData = [
    {
      title: "Q1:麵包師傅要你「靜置 30 分鐘」，你會怎麼做？",
      options:[
        {
          text: "選項一",
          value: 1
        },
        {
          text: "選項二",
          value: 2
        },
        {
          text: "選項三",
          value: 3
        },
      ]
    },
    {
      title: "Q2:當你被放進烤箱時，溫度突然升高，你的反應是？",
      options:[
        {
          text: "選項一",
          value: 1
        },
        {
          text: "選項二",
          value: 2
        },
        {
          text: "選項三",
          value: 3
        },
      ]
    },
    {
      title: "Q3:如果你被顧客挑選時被放回去了，你會？",
      options:[
        {
          text: "選項一",
          value: 1
        },
        {
          text: "選項二",
          value: 2
        },
        {
          text: "選項三",
          value: 3
        },
      ]
    },
    
   ];

const usepsyDataStore = create( 
    (set) => ({
        questionIndex: 0,
        totalValue: 0,
        questions: questionData,
    })
);

export { usepsyDataStore }