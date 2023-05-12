import './Results.scss';
import JsonView from 'react18-json-view';

function Results({ ans, result }) {


  return (
    <section>
      <pre data-testid="results"><JsonView src={result} /></pre>
      <pre data-testid="ans">{ans ?
        <>
          <p>History Result:</p>
          <JsonView src={ans} />
        </>
        : null}</pre>
    </section>
  );
}

export default Results;
