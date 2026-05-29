"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { usePsyStore } from "@/store/store";
import domtoimage from "dom-to-image-more";

export default function Result() {
  const router = useRouter();

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const downloadCardRef = useRef<HTMLDivElement | null>(null);

  const [isHoverSong, setIsHoverSong] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const psyData = usePsyStore((state) => state.psyData);
  const setPsyScore = usePsyStore((state) => state.setScore);

  const results = [
    {
      name: "鄉村風卡帶",
      image: "/images/country.png",
      imageWidth: "w-[420px]",
      description:
        "你是一個重感情的人。比起刺激，你更在意誰陪你走過。你常懷念過去，因為那些時光很珍貴。",
      hashtag: ["#溫柔收藏家", "#舊時光", "#浪漫"],
      song: "Take Me Home, Country Roads",
      audio: "/audio/country.mp3",
      youtube: "https://www.youtube.com/watch?v=1vrEljMfXYo",
    },
    {
      name: "爵士風卡帶",
      image: "/images/jazz.png",
      imageWidth: "w-[420px]",
      description:
        "你是很有故事的人。很多情緒你不一定會說，但會默默記很久。你不常沉溺在過去，只是有些瞬間，你認為值得反覆回味。",
      hashtag: ["#情緒管理員", "#細節怪", "#有故事"],
      song: "Miss Riddle",
      audio: "/audio/jazz.mp3",
      youtube: "https://www.youtube.com/watch?v=sKB-3Rugnic",
    },
    {
      name: "嘻哈風卡帶",
      image: "/images/hip-hop.png",
      imageWidth: "w-[300px]",
      description:
        "你討厭停下腳步，事情脫離掌控的感覺。你總給人很酷的感覺，但其實內心很敏感。也期待真正有人能理解你的情緒。",
      hashtag: ["#節奏掌控者", "#不服輸", "#懂的就懂"],
      song: "Everybody Dies in Their Nightmares",
      audio: "/audio/hiphop.mp3",
      youtube: "https://www.youtube.com/watch?v=7JGDWKJfgxQ&rco=1",
    },
    {
      name: "古典風卡帶",
      image: "/images/classical.png",
      imageWidth: "w-[300px]",
      description:
        "你有細膩而穩定的靈魂。喜歡安靜，也需要屬於自己的空間。比起被外界帶著走，你更習慣用自己的節奏整理情緒。",
      hashtag: ["#優雅觀察者", "#穩定", "#靜靜發光"],
      song: "5 Pieces, Op. 75, “the Trees”: No. 5",
      audio: "/audio/classical.mp3",
      youtube: "https://www.youtube.com/watch?v=B5EhExUcU_M",
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

  function toggleAudio() {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }

  function playAgain() {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    setIsPlaying(false);
    setPsyScore(0);
    router.push("/");
  }

  async function downloadResult() {
    const card = downloadCardRef.current;
    if (!card) return;

    const image = await domtoimage.toPng(card, {
      bgcolor: "#eef7fa",
      width: 430,
      height: card.offsetHeight,
    });

    const link = document.createElement("a");
    link.href = image;
    link.download = `${result.name}.png`;
    link.click();
  }

  return (
    <>
      <div className="w-full h-full overflow-hidden">
        <div className="w-full h-full rounded-[32px] px-6 pt-5 pb-5 flex flex-col items-center">
          <div className="text-[#fff4df] drop-shadow-[4px_2px_0px_#383838] text-[32px] font-black mb-4 shrink-0">
            {result.name}
          </div>

          <div className="w-full h-[190px] flex items-center justify-center mb-4 shrink-0">
            <img
              src={result.image}
              alt={result.name}
              className={`${result.imageWidth} h-auto object-contain`}
            />
          </div>

          <div className="w-full rounded-[24px] bg-white/30 px-5 py-4 mb-3 text-[#2f2a26] text-[17px] leading-relaxed font-bold shrink-0">
            {result.description}
          </div>

          <div className="w-full flex gap-3 mb-3 shrink-0">
            {result.hashtag.map((tag, index) => (
              <div
                key={index}
                className="flex-1 rounded-[20px] bg-white/30 px-3 py-3 text-[#2f2a26] text-[14px] font-black text-center"
              >
                {tag}
              </div>
            ))}
          </div>

          <div className="w-full mb-4 shrink-0">
            <audio
              ref={audioRef}
              src={result.audio}
              onEnded={() => setIsPlaying(false)}
            />

            <div className="w-full grid grid-cols-[48px_1fr] items-center gap-3">
              <button
                onClick={toggleAudio}
                onMouseEnter={() => setIsHoverSong(true)}
                onMouseLeave={() => setIsHoverSong(false)}
                className={`
                  w-[48px]
                  h-[48px]
                  rounded-full
                  bg-white/30
                  text-[#2f2a26]
                  text-[26px]
                  font-black
                  flex
                  items-center
                  justify-center
                  self-center
                  transition-all
                  duration-300
                  hover:bg-white/40
                  hover:scale-110
                  ${!isPlaying && !isHoverSong ? "animate-slow-spin" : ""}
                `}
              >
                {isPlaying ? "❚❚" : isHoverSong ? "▶" : "🎵"}
              </button>

              <a
                href={result.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-[48px] rounded-[20px] bg-white/30 px-5 text-[#2f2a26] text-[15px] font-black flex items-center justify-center text-center truncate hover:bg-white/40 transition"
              >
                {result.song}
              </a>
            </div>
          </div>

          <div className="flex gap-6 shrink-0">
            <button
              onClick={downloadResult}
              className="bg-[#c86b4a] hover:bg-[#b85c3c] text-[#fff8ef] text-[16px] font-black px-5 py-2 rounded-full transition"
            >
              下載結果
            </button>

            <button
              onClick={playAgain}
              className="bg-[#c86b4a] hover:bg-[#b85c3c] text-[#fff8ef] text-[16px] font-black px-5 py-2 rounded-full transition"
            >
              再玩一次
            </button>
          </div>
        </div>
      </div>

      {/* 下載用分享卡 */}
      <div
        style={{
          position: "fixed",
          left: "-9999px",
          top: 0,
        }}
      >
        <div
          ref={downloadCardRef}
          style={{
            width: "430px",
            backgroundColor: "#eef7fa",
            borderRadius: "32px",
            padding: "32px 28px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            border: "none",
            outline: "none",
            boxShadow: "none",
            boxSizing: "border-box",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              color: "#2f2a26",
              fontSize: "32px",
              fontWeight: 900,
              textAlign: "center",
              whiteSpace: "nowrap",
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
          >
            {result.name}
          </div>

          <div
            style={{
              width: "100%",
              height: "190px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
          >
            <img
              src={result.image}
              alt={result.name}
              style={{
                maxWidth: "340px",
                maxHeight: "180px",
                objectFit: "contain",
                border: "none",
                outline: "none",
                boxShadow: "none",
              }}
            />
          </div>

          <div
            style={{
              width: "100%",
              backgroundColor: "#ffffff",
              borderRadius: "24px",
              padding: "20px 24px",
              color: "#2f2a26",
              fontSize: "18px",
              lineHeight: 1.7,
              fontWeight: 700,
              border: "none",
              outline: "none",
              boxShadow: "none",
              boxSizing: "border-box",
            }}
          >
            {result.description}
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              gap: "12px",
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
          >
            {result.hashtag.map((tag, index) => (
              <div
                key={index}
                style={{
                  flex: 1,
                  backgroundColor: "#ffffff",
                  borderRadius: "999px",
                  padding: "12px 8px",
                  color: "#2f2a26",
                  fontSize: "14px",
                  fontWeight: 900,
                  textAlign: "center",
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          <div
            style={{
              width: "100%",
              backgroundColor: "#ffffff",
              borderRadius: "999px",
              padding: "16px 20px",
              color: "#2f2a26",
              fontSize: "16px",
              fontWeight: 900,
              textAlign: "center",
              border: "none",
              outline: "none",
              boxShadow: "none",
              boxSizing: "border-box",
            }}
          >
            推薦歌曲：{result.song}
          </div>
        </div>
      </div>
    </>
  );
}