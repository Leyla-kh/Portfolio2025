import GlowCard from "../components/GlowCard.jsx";
import { abilities } from "../constants/index.js";

const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg mb-32">
      <div className="mx-auto grid-3-cols">
        {abilities.map((card, index) => (
          <div
            className="card-border rounded-xl  flex flex-col gap-4"
            key={card.title}
          >
            <GlowCard card={card} index={index}>
              <div className="size-14 flex items-center justify-center rounded-full">
                <img src={card.imgPath} alt={card.title} />
              </div>
              <h3 className="text-white text-2xl font-semibold mt-2">
                {card.title}
              </h3>
              <p className="text-white-50 text-lg">{card.desc}</p>
            </GlowCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
