export const Summary = ({ status, children }) => {
  return <div className={status}>{children}</div>;
};

Summary.Item = function AlertTitle({ children }) {
  return <div className={status}>{children}</div>;
};

Summary.Title = function AlertTitle({ children }) {
  return <span className="alert-title">{children}</span>;
};

Summary.Count = function AlertCount({ children }) {
  return <span className="alert-description">{children}</span>;
};
Summary.TotalCount = function AlertTotalCount({ children }) {
  return <span className="alert-description">{children}</span>;
};
Summary.Icon = function AlertIcon({ children }) {
  return <img src={children} className="alert-icon" alt="Icon" />;
};
