import "./chooseYourPlan.css";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../App";
import imagePlan from "../../multimedia/iconsCards/Premium.png";

type dataType = {
  title: string;
  benefits: [];
  price: String;
  currency: string;
  type: string;
};

export const ChooseYourPlan = () => {
  const [jsonData, setJsonData] = useState<dataType[]>([]);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    fetch(`${BASE_URL}/api/subscription `)
      .then((response) => response.json())
      .then((data) => setJsonData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <section className=" bg-gradient-to-b from-neutral-50 to-white mt-20">
      <div className="grid justify-items-center my-10">
        <h2 className="text-4xl font-black my-5 mt-20">Choose Your Plan</h2>
        <p id="parrafo" className="p-7 w-full sm:w-2/5 text-center">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>
      <div className="flex flex-wrap justify-center p-4 mt-20 ">
        {jsonData.map((item, index) => (
          <div
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 border-2 rounded-xl my-4 mx-2 drop-shadow-2xl"
            key={index}
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-center items-center">
                  <img src={imagePlan} alt="" />
                </div>
                <h2 className="my-6 text-xl font-black text-center">
                  {item.title}
                </h2>
                <div className="flex flex-col justify-center my-6">
                  {item.benefits.map((item2, benefitIndex) => (
                    <p id="parrafo" className="my-5 ml-10" key={benefitIndex}>
                      ✔️ {item2}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-auto">
                <p className="text-2xl my-6 text-center font-black">
                  {item.currency} {item.price} {item.type}
                </p>
                <div className="flex justify-center my-4">
                  <button
                    onClick={() =>
                      setSelectedButtonIndex(
                        selectedButtonIndex === index ? null : index
                      )
                    }
                    className={`my-6 ${
                      selectedButtonIndex === index
                        ? "bg-red-600 text-white text-base px-8 py-2 border-2 border-red-500 rounded-xl"
                        : "bg-white text-red-600 text-base px-8 py-2 border-2 border-red-500 rounded-xl"
                    }`}
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
