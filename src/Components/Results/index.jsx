import './Results.scss';
// Conditionally renders “Loading” or the data depending on the status of the request.
// Renders the data as “pretty” JSON.
function Results (props){
  
  return (
    <section>
      <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    </section>
  );
}

export default Results;
