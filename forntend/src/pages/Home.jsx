import React, { useEffect, useState } from "react";
import Backgound from "../components/Backgound.jsx";
import Hero from "../components/Hero.jsx";

const Home = () => {
  let heroData = [
    { text1: "30% OFF", text2: "ON ALL PREMIUM MEAT" },
    { text1: "Discover the Best of Bold Fashison", text2: "Limited Time Only" },
    { text1: "Explore Our New Collection", text2: "Trendy Styles Await" },
    { text1: "Upgrade Your Wardrobe", text2: "Exclusive Deals Inside" },
  ];

  let [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prevCount) => (prevCount === 3 ? 0 : prevCount + 1));
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="overflow-x-hidden relative top-17.5">
      <div className="w-screen lg:h-screen md:h-[50vh] sm:h-[30vh] bg-linear-to-l from-[#141414] to-[#0c2025]">
        <Backgound heroCount={heroCount} />
        <Hero
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          heroData={heroData[heroCount]}
        />
      </div>
    </div>
  );
};

export default Home;
