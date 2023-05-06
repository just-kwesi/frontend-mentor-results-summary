import { SummaryItem } from './index';
import data from '../data/data.json';

const Summary = () => {
  return (
    <div className="summary grid-flow" data-spacing="large">
      <h2 className="section-title">Summary</h2>
      <div className="grid-flow">
        {data.map((item, indx) => (
          <SummaryItem key={item.category} data={item} index={indx} />
        ))}
      </div>
      <button className="button">Continue</button>
    </div>
  );
};

export default Summary;
