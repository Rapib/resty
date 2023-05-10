import './Results.scss';
// import { useState } from 'react';

function Results ({data}){

  // const [load, setLoad] = useState(true);
  return (
    <section>

      <pre data-testid="results">{data ? JSON.stringify(data, undefined, 2) : 'Loading'}</pre>
    </section>
  );
}

export default Results;
