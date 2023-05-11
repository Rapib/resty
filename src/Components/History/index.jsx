// Iterates the history array in state and shows the previous API calls.
// When one is clicked on, show the results in the results component.
// Note: the results component renders whatever is in state.

function History({ history, addReq }) {
  console.log('history 6', history);
  return (
    <div>
      <h2>History</h2>
      <ul>
        {history.map(i =>  <li onClick={()=> addReq(i)}>{JSON.stringify(i)}</li>)


        }
      </ul>
    </div>

  );
}

export default History;