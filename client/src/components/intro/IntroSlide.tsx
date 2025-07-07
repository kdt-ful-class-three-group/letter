import { IntroSlideProps } from "./intro.types";

export const IntroSlide = ({ title, description }: IntroSlideProps) => (
  <>
    <h1 className="text-2xl font-bold mb-4">{title}</h1>
    <p className="text-lg text-gray-600 mb-8">{description}</p>
  </>
);