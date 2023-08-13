import Wrapper from "../Assets/wrappers/StatItem";

const StatsItem = ({ color, bcg, count, title, icon }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h1 className="title">{title}</h1>
    </Wrapper>
  );
};

export default StatsItem;
