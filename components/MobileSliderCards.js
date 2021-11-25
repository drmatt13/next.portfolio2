import { useEffect } from "react";

const MobileSliderCards = ({ cards, style }) => {
  useEffect(() => {
    console.log(cards);
  }, []);

  return (
    <div className="flex justify-center">
      <style jsx>{`
        .${style}:hover {
          transform: scale(0.9);
        }
      `}</style>
      <div
        className={`${cards[0]} ${style} cursor-pointer rounded-2xl shadow-2xl`}
        style={{
          position: "absolute",
          transform: "translateX(100%) scale(.75)",
        }}
      ></div>
      <div
        className={`${cards[1]} ${style} cursor-pointer rounded-2xl shadow-2xl`}
        style={
          {
            // position: "absolute",
            // left: "50%",
            // transform: "translateX(-50%)",
          }
        }
      ></div>
      <div
        className={`${cards[2]} ${style} cursor-pointer rounded-2xl shadow-2xl`}
        style={{
          position: "absolute",
          // left: "-10%",
          transform: "translateX(-100%) scale(.75)",
        }}
      ></div>
    </div>
  );
};

export default MobileSliderCards;
