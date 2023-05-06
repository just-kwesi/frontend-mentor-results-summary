const SummaryItem = ({ data, index }) => {
  return (
    <div className="summary-item" data-item-type={`accent-${index + 1}`}>
      <div className="flex-group">
        <img src={data.icon} alt={data.category} />
        <h3 className="summary-item-title">{data.category}</h3>
      </div>
      <p className="summary-score">
        <span>{data.score}</span> / 100
      </p>
    </div>
  );
};

export default SummaryItem;
