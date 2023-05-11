import './Form.scss';
import { useState } from 'react';

function Form({ handleApiCall, addReq }) {


  const [url, setUrl] = useState(null);
  const [method, setMethod] = useState('get');
  const [json, setJson] = useState(null);

  let handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    const formData = {
      method: method,
      url: url,
      json: JSON.stringify(json),
    };
    // handleApiCall(formData);
    addReq(formData);
  }

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === 'url') {
      setUrl(value);
    }
    if (name === 'methods') {
      setMethod(value);
    }
  }
  const handleJson = (e) => {
    setJson(e.target.value);
  }


  return (
    <>

      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input data-testid="url-input" name="url" type='text' placeholder="URL goes here" onChange={handleInput} />
          <button type="submit">GO!</button>
        </label>
        <select data-testid="HTMLmethods" name="methods" onChange={handleInput}>
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="put">PUT</option>
          <option value="delete">DELETE</option>
        </select>
        {(method === 'put' || method === 'post') 
        && 
        <textarea id="jsonBox" name="jsonBox" rows="10" cols="50" placeholder='type in a JSON object' onChange={handleJson}>
        </textarea>
        }

      </form>
    </>
  );
}


export default Form;
