import Layout from "../Layout/Layout";

export const ResultsSummary = ({ children }) => {
  return <Layout className>{children}</Layout>;
};

ResultsSummary.Count = function ResultsSummaryCount({ children }) {
  return <span className="alert-description">{children}</span>;
};
ResultsSummary.TotalCount = function ResultsSummaryTotalCount({ children }) {
  return <span className="alert-description">{children}</span>;
};
ResultsSummary.Title = function ResultstSummaryTitle({ children }) {
  return <p className="alert-title">{children}</p>;
};
ResultsSummary.Button = function ResultsSummaryButton({ children }) {
  return <button className>{children}</button>;
};
