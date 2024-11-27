import "./App.css";
import { Summary } from "./components/SummaryItem/SummaryItem";
import data from "../data.json";
function App() {
  const summary = data.map((item) => {
    return (
      <Summary key={item.id}>
        <Summary.Icon>{item.icon}</Summary.Icon>
        <Summary.Title>{item.category}</Summary.Title>
        <>
          <Summary.Count>{item.score}</Summary.Count> /{" "}
          <Summary.TotalCount>{100}</Summary.TotalCount>
        </>
      </Summary>
    );
  });

  return (
    <>
      <Summary.Title>Summary</Summary.Title>
      {summary}
    </>
  );
}

export default App;
