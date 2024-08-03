import { useRef, useState } from "react";
import PolaCard from "./PolaCard";

type SlideBoxProp = {
  polacard: { imgUrl: string; title: string }[];
};

const SlideBox = ({ polacard }: SlideBoxProp) => {
  const [currentPola, setCurrentPola] = useState(0);
  const [prevPola, setPrevPola] = useState(
    currentPola === 0 ? polacard.length - 1 : currentPola - 1
  );
  const [nextPola, setNextPola] = useState<number | null>(
    currentPola === polacard.length - 1 ? 0 : currentPola + 1
  );

  const nextBtnHandler = (currentPola: number) => {
    if (currentPola + 1 === polacard.length - 1) {
      setPrevPola(currentPola);
      setCurrentPola(currentPola + 1);
      setNextPola(0);
    } else if (currentPola === polacard.length - 1) {
      setPrevPola(currentPola);
      setCurrentPola(0);
      setNextPola(1);
    } else {
      setPrevPola(currentPola);
      setCurrentPola(currentPola + 1);
      setNextPola(currentPola + 2);
    }
  };

  const prevBtnHandler = (currentPola: number) => {
    if (currentPola === 0) {
      setPrevPola(polacard.length - 2);
      setCurrentPola(polacard.length - 1);
      setNextPola(0);
    } else if (currentPola === 1) {
      setPrevPola(polacard.length - 1);
      setCurrentPola(currentPola - 1);
      setNextPola(currentPola);
    } else {
      setPrevPola(currentPola - 2);
      setCurrentPola(currentPola - 1);
      setNextPola(currentPola);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100%-6rem)] p-8">
      <div className="flex w-full h-full justify-between items-center">
        {/* 이전 프로젝트 */}
        <div className="w-[25%] h-[300px]">
          {prevPola !== null ? (
            <PolaCard
              imgUrl={polacard[prevPola].imgUrl}
              title={polacard[prevPola].title}
            />
          ) : (
            <PolaCard />
          )}
        </div>
        {/* 중앙 프로젝트 */}
        <div className="w-[45%] h-[500px]">
          {currentPola !== null ? (
            <PolaCard
              imgUrl={polacard[currentPola].imgUrl}
              title={polacard[currentPola].title}
            />
          ) : (
            <></>
          )}
        </div>

        {/* 다음 프로젝트 */}
        <div className="w-[25%] h-[300px]">
          {nextPola !== null ? (
            <PolaCard
              imgUrl={polacard[nextPola].imgUrl}
              title={polacard[nextPola].title}
            />
          ) : (
            <></>
          )}
        </div>
      </div>

      <div>
        <button onClick={() => prevBtnHandler(currentPola)}>이전</button>
        <button onClick={() => nextBtnHandler(currentPola)}>다음</button>
      </div>
    </div>
  );
};

export default SlideBox;
