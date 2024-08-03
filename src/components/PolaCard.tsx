type PolaCardProp = {
  imgUrl?: string;
  title?: string;
};

const PolaCard = ({ imgUrl, title }: PolaCardProp) => {
  return (
    <article className="bg-[#fff] flex flex-col rounded-sm p-6 w-auto h-full">
      <img
        className="h-[80%] border-[#bdb8ad] border-2 rounded-sm object-cover"
        src={imgUrl}
        alt="project_img"
      />
      <span className="h-[20%]">{title}</span>
    </article>
  );
};

export default PolaCard;
