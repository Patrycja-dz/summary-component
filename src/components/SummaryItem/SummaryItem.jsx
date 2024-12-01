import Layout from "../Layout/Layout";
import "./../../App.css";
import styles from "./SummaryItem.module.css";

export const Summary = ({ children }) => {
  return <Layout className>{children}</Layout>;
};
Summary.Item = function SummaryItem({ status, children }) {
  const statusClass = status.toLowerCase();
  return <div className={styles[statusClass]}>{children}</div>;
};

Summary.Title = function SummaryTitle({ children }) {
  return <span className="alert-title">{children}</span>;
};

Summary.Count = function SummaryCount({ children }) {
  return <span className="alert-description">{children}</span>;
};
Summary.TotalCount = function SummaryTotalCount({ children }) {
  return <span className="alert-description">{children}</span>;
};
Summary.Icon = function SummaryIcon({ children }) {
  return <img src={children} className="alert-icon" alt="Icon" />;
};
