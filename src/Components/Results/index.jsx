import './Results.scss';
import JsonView from 'react18-json-view';

function Results ({data}){


  return (
    <section>
      <pre data-testid="results"><JsonView src={data} /></pre>
      {/* <pre data-testid="results">{data ? JSON.stringify(data, undefined, 2) : null}</pre> */}
    </section>
  );
}

export default Results;
