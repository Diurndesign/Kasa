const Banner = ({cover , text}) => {
  return (
    <div className="banner">
      <img src={cover} alt="" />
    {text && <h1>{text}</h1>}
    </div>
  );
};

export default Banner;