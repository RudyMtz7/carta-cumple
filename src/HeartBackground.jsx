import { useEffect, useState } from "react";

export default function HeartBackground() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const rNum = Math.floor(Math.random() * 40) + 1;
      const rSize = Math.floor(Math.random() * 65) + 10;
      const rLeft = Math.floor(Math.random() * 100) + 1;
      const rBg = Math.floor(Math.random() * 25) + 100;
      const rTime = Math.floor(Math.random() * 5) + 5;

      const id = Date.now() + Math.random();

      const newHearts = [
        {
          id,
          size: rSize,
          left: rLeft,
          bg: `rgba(255, ${rBg - 25}, ${rBg}, 0.7)`,
          duration: rTime,
        },
        {
          id: id + 1,
          size: rSize - 10,
          left: rLeft + rNum,
          bg: `rgba(255, ${rBg - 25}, ${rBg + 25}, 0.7)`,
          duration: rTime + 5,
        },
      ];

      setHearts((prev) => [...prev, ...newHearts]);

      setTimeout(() => {
        setHearts((prev) =>
          prev.filter(
            (heart) => !newHearts.some((newHeart) => newHeart.id === heart.id)
          )
        );
      }, (rTime + 5) * 1000);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg_heart">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            left: `${heart.left}%`,
            background: heart.bg,
            animationDuration: `${heart.duration}s`,
          }}
        />
      ))}
    </div>
  );
}