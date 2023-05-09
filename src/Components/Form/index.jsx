import './Form.scss';
import { useState } from 'react';
/* 

On submit:
Send the Form entries back to the <App /> using the method sent down in props.
Form will run the API request.
Toggle the “loading” status before and after the request.} */
function Form({ handleApiCall }) {
  const [url, setUrl] = useState(null);
  const [method, setMethod] = useState(null);
  const [json, setJson] = useState(null);
  let handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    const formData = {
      method: method,
      url: url,
      json: JSON.stringify(json),
    };
    handleApiCall(formData);
  }

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    // let {name, value} =  event.target;
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
        <select id="HTMLmethods" name="methods" onChange={handleInput}>
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
