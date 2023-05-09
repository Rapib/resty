import React from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import { useState } from 'react';

function App (){
  // const [notes, setNotes] = useState([]);
  // const createNote = (title, text) => {
  //   if (!title || !text) {
  //     console.error('Bad Note');
  //   } else {
  //     setNotes([...notes, new Note(title, text)]);
  //   }
  // }

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  let callApi = (requestParams) => {
    // mock output
    const data = {
      count: 2,
      results: [
        {name: 'fake thing 1a', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2d', url: 'http://fakethings.com/2'},
      ],
    };
    setData(data);
    setRequestParams(requestParams);
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}


export default App;
