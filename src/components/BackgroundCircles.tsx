import { BACKGROUND_CIRCLES } from "../constants";

interface BackgroundCirclesProps {
  scrollY: number;
}

export const BackgroundCircles = ({ scrollY }: BackgroundCirclesProps) => {
  return (
    <>
      {BACKGROUND_CIRCLES.map((circle, index) => (
        <div
          key={index}
          className={circle.className}
          style={{
            transform: `translateY(${scrollY * circle.transformY}px) translateX(${
              scrollY * circle.transformX
            }px)`,
          }}
        />
      ))}
    </>
  );
};

