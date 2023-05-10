import React from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [load, setLoad] = useState(false);
  useEffect(() => {
    
    async function getJSON(requestParams) {
      const response = await fetch(requestParams.url);
      const jsonData = await response.json();
      setData(jsonData);
      setLoad(false);
    }
    getJSON(requestParams);
    callApi(requestParams);
  }, [requestParams]);

  let callApi = async (requestParams) => {
    setLoad(true);
    setRequestParams(requestParams);
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <div>JSON: {requestParams.json}</div>
      <Form handleApiCall={callApi} />
      {load ? 'Loading...' : <Results data={data} />}
      <Footer />
    </React.Fragment>
  );
}


export default App;
