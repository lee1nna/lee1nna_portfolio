import "./App.css";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import PolaCard from "./components/PolaCard";
import SlideBox from "./components/SlideBox";

const polacardArr = [
  {
    imgUrl: "/개발이 힘든 포차코.jpg",
    title: "프로젝트1",
  },
  {
    imgUrl: "/코딩짱구.jpeg",
    title: "프로젝트2",
  },
  {
    imgUrl: "/dnd_iterview.png",
    title: "프로젝트3",
  },
  {
    imgUrl: "/IMG_8524-3.jpeg",
    title: "프로젝트4",
  },
  {
    imgUrl: "/toontooni.png",
    title: "프로젝트5",
  },
];

function App() {
  return (
    <div className="bg-[#d2b4b5] w-full h-screen sm:text-sm md:text-base lg:text-lg">
      <Header />
      {/* <Wrapper> */}
      <SlideBox polacard={polacardArr} />
      {/* <PolaCard imgUrl="/hc_logo_b.png" title="프로젝트1"></PolaCard>
        <PolaCard></PolaCard>
        <PolaCard></PolaCard>
        <PolaCard></PolaCard> */}
      {/* <PolaCard></PolaCard> */}
      {/* </Wrapper> */}
    </div>
  );
}

export default App;
