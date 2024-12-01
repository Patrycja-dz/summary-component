import "./App.css";
import data from "../data.json";
import Layout from "./components/Layout/Layout";
import { ResultsSummary } from "./components/ResultsSummary/ResultsSummary";
import { Results } from "./components/Results/Results";
import SummaryList from "./components/SummaryList/SummaryList";
function App() {
  return (
    <Results>
      <Layout className={"gridFlow"} data-scpacing="large">
        <ResultsSummary.Title>Your Results</ResultsSummary.Title>
        <Results.Score>
          <span>76</span> of 100
        </Results.Score>
        <Results.Rank
          rank={"Great"}
          text={
            "Your performance exceed 65% of the people conducting the test here!"
          }
        />
      </Layout>
      <Layout data-spacing="large">
        <ResultsSummary.Title>Summary</ResultsSummary.Title>
        <SummaryList data={data} />
        <ResultsSummary.Button>Continue</ResultsSummary.Button>
      </Layout>
    </Results>
  );
}

export default App;
