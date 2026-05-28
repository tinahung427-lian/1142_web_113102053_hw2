"use client";

import { useRouter } from "next/navigation";
import { usePsyStore } from "@/store/store";

export default function Result() {
  const router = useRouter();
  const psyData = usePsyStore((state) => state.psyData);
  const setPsyScore = usePsyStore((state) => state.setScore);

  const results = [
    {
      name: "鄉村風卡帶",
      image: "/images/country.png",
      description:
        "你是一個重感情的人。比起刺激，你更在意誰陪你走過。你常懷念過去，因為那些時光很珍貴。",
      hashtag: ["#溫柔收藏家", "#舊時光", "#慢慢喜歡"],
      song: "Take Me Home, Country Roads",
    },

    {
      name: "爵士風卡帶",
      image: "/images/jazz.png",
      description:
        "你是很有故事的人。很多情緒你不一定會說，但會默默記很久。",
      hashtag: ["#情緒收藏家", "#夜晚散步", "#故事感"],
      song: "Miss Riddle",
    },

    {
      name: "嘻哈風卡帶",
      image: "/images/hip-hop.png",
      description:
        "你討厭停下腳步。很多時候，你不是不難過，而是選擇繼續往前。",
      hashtag: ["#節奏掌控者", "#不服輸", "#走自己的路"],
      song: "Everybody Dies in Their Nightmares",
    },

    {
      name: "古典風卡帶",
      image: "/images/classical.png",
      description:
        "你有細膩而穩定的靈魂。比起被外界帶著走，你更習慣用自己的節奏整理情緒。",
      hashtag: ["#優雅觀察者", "#內在秩序", "#靜靜發光"],
      song: "5 Pieces, Op. 75, “the Trees”: No. 5",
    },
  ];

  let resultIndex = 0;

  if (psyData.score >= 6 && psyData.score <= 10) {
    resultIndex = 0;
  } else if (psyData.score >= 11 && psyData.score <= 15) {
    resultIndex = 1;
  } else if (psyData.score >= 16 && psyData.score <= 20) {
    resultIndex = 2;
  } else if (psyData.score >= 21 && psyData.score <= 24) {
    resultIndex = 3;
  }

  const result = results[resultIndex];

  function playAgain() {
    setPsyScore(0);
    router.push("/");
  }

  function downloadResult() {
    alert("之後可以做下載功能");
  }

  return (
    <div className="w-full h-full overflow-hidden">
      <div
        className="
          w-full
          h-full
          rounded-[32px]
          px-6
          pt-5
          pb-5
          flex
          flex-col
          items-center
        "
      >
        {/* 標題 */}
        <div
          className="
            text-[#fff4df]
            drop-shadow-[4px_2px_0px_#383838]
            text-[32px]
            font-black
            mb-4
            shrink-0
          "
        >
          {result.name}
        </div>

        {/* 卡帶圖片 */}
        <div
          className="
            w-full
            h-[180px]
            flex
            items-center
            justify-center
            mb-4
            shrink-0
          "
        >
          <img
            src={result.image}
            alt={result.name}
            className="
              w-[380px]
              max-w-full
              h-auto
              object-contain
            "
          />
        </div>

        {/* 說明文字 */}
        <div
          className="
            w-full
            rounded-[24px]
            bg-white/30
            px-5
            py-4
            mb-3
            text-[#2f2a26]
            text-[17px]
            leading-relaxed
            font-bold
            shrink-0
          "
        >
          {result.description}
        </div>

        {/* hashtag */}
        <div className="w-full flex gap-3 mb-3 shrink-0">
          {result.hashtag.map((tag, index) => (
            <div
              key={index}
              className="
                flex-1
                rounded-[20px]
                bg-white/30
                px-3
                py-3
                text-[#2f2a26]
                text-[14px]
                font-black
                text-center
              "
            >
              {tag}
            </div>
          ))}
        </div>

        {/* 推薦歌曲 */}
        <div
          className="
            w-full
            rounded-[24px]
            bg-white/30
            px-5
            py-3
            mb-4
            text-[#2f2a26]
            text-[17px]
            font-black
            text-center
            shrink-0
          "
        >
          🎵 {result.song}
        </div>

        {/* 按鈕 */}
        <div className="flex gap-4 shrink-0">
          <button
            onClick={downloadResult}
            className="
              bg-[#c86b4a]
              hover:bg-[#b85c3c]
              text-[#fff8ef]
              text-[20px]
              font-black
              px-6
              py-3
              rounded-full
              transition
            "
          >
            下載結果
          </button>

          <button
            onClick={playAgain}
            className="
              bg-[#c86b4a]
              hover:bg-[#b85c3c]
              text-[#fff8ef]
              text-[20px]
              font-black
              px-6
              py-3
              rounded-full
              transition
            "
          >
            再玩一次
          </button>
        </div>
      </div>
    </div>
  );
}