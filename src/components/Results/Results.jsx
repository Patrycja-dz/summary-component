import Layout from "../Layout/Layout";
import styles from "./Results.module.css";

export const Results = ({ children }) => {
  return <Layout className={styles.resultsSummary}>{children}</Layout>;
};

Results.Score = function ResultsScore({ children }) {
  return <p className={styles.resultsScore}>{children}</p>;
};
Results.Rank = function ResultsRank({ rank, text }) {
  return (
    <div className={styles.resultsRank}>
      <p className={styles.resultsRankNumber}>{rank}</p>
      <p className={styles.resultsRankText}>{text}</p>
    </div>
  );
};
