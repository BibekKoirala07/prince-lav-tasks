const FeatureCard = ({
  imgSrc,
  altText,
}: {
  imgSrc: string;
  altText: string;
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img src={imgSrc} alt={altText} className="w-full h-auto" />
    </div>
  );
};

const Features = () => {
  return (
    <div className="p-4 mx-2 my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FeatureCard
          imgSrc="/work culture.png"
          altText="People collaborating at a table"
        />
        {/* <FeatureCard
          imgSrc="/api/placeholder/400/300"
          altText="People building something together"
        /> */}
        <h2 className="text-3xl flex flex-col justify-evenly lg:text-4xl mb-5">
          Features <br /> <span className="text-orange-400">Ought</span> <br />{" "}
          to Partake
        </h2>
        <FeatureCard
          imgSrc="/1542298796.jpg"
          altText="Person climbing stairs"
        />
        <FeatureCard imgSrc="/earth.png" altText="Hand holding something" />
      </div>
    </div>
  );
};

export default Features;
