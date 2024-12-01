import { ResultsSummary } from "./../ResultsSummary/ResultsSummary";
import { Summary } from "./../SummaryItem/SummaryItem";
const SummaryList = ({ data }) => {
  return data.map((item) => {
    return (
      <Summary key={item.id}>
        <Summary.Item status={item.category}>
          <Summary.Icon>{item.icon}</Summary.Icon>
          <ResultsSummary.Title>{item.category}</ResultsSummary.Title>
          <>
            <ResultsSummary.Count>{item.score}</ResultsSummary.Count> /{" "}
            <ResultsSummary.TotalCount>{100}</ResultsSummary.TotalCount>
          </>
        </Summary.Item>
      </Summary>
    );
  });
};

export default SummaryList;
