import React, { FC } from "react";
import Image from "next/image";

interface HistoricalEventProps {
  date: string;
  description: string;
}

const HistoricalEvent: FC<HistoricalEventProps> = ({ date, description }) => (
  <p className="mb-4">
    <span className="bullet-point">&#8226;</span> <strong className="text-base md:text-xl">{date}:</strong> {description}
  </p>
);

const History: FC = () => {
  const events: HistoricalEventProps[] = [
    {
      date: "August 1996",
      description: "The New York Times highlights the challenges faced by mothers on public assistance seeking work, catalyzing awareness.",
    },
    {
      date: "April 1998",
      description: "The Welfare Reform Act is passed, transforming the welfare system and complicating women's transition to the workforce.",
    },
    {
      date: "1999",
      description: "Bottomless Closet is founded in response to the critical needs identified, providing a welcoming space for women in need.",
    },
    {
      date: "Present",
      description: "Bottomless Closet has grown from grassroots beginnings, serving over 46,000 women, engaging nearly 200 volunteers, and collaborating with around 200 referral partners. Over 1,000 women attended workshops last year.",
    },
    {
      date: "Future",
      description: "Guided by the founding principles of helping and empowering women, Bottomless Closet remains committed to inspiring and guiding disadvantaged NYC women to enter the workforce and achieve success.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center px-12 md:px-16 xl:px-20 md:py-12 pt-8 pb-6 ">
      <div>
        <h1 className="md:text-2xl text-base font-osans font-bold text-core-red text-start mb-2 md:mb-6">
          Our History
        </h1>
        <div className="flex flex-col md:text-lg text-sm font-osans text-black">
          {events.map((event, index) => (
            <HistoricalEvent key={index} date={event.date} description={event.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;



