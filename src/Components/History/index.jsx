function History({ history, findResult }) {
  return (
    <div>
      <h2>History</h2>
      <ul>
        {history.map(i =>  <li onClick={()=> findResult(i)}>{JSON.stringify(i)}</li>)
        }
      </ul>
    </div>

  );
}

export default History;