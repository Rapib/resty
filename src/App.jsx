import React from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import { useState, useEffect , useReducer } from 'react';
import History from './Components/History';

// Use a reducer to store and manage all application state: loading, results, history.
// Add to history array in state after every api call
// method, url, results (json).

function App() {

  const initialState = {
    count: 0,
    load: false,
    data: null,
    requestParams: {},
    history: []
  }
  
  const reducer = (state, action) => {
    switch(action.type) {
      // case 'addHistory':
      //   return {
      //     count: state.count + 1,
      //     history: [...state.history, action.payload],

      //   }
      case "removeHistory":
        return {
          count: state.count - 1,
          history: state.history.filter(history => (history !== action.payload)),
        }
        case 'addReq':
          return {
            requestParams: action.payload,
            history: [...state.history, action.payload],
          }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  // const addHistory = (history) => {
  //   console.log('hit add history');
  //   dispatch( {
  //     type: 'addHistory',
  //     payload: history
  //   });

  // }

  const addReq = (requestParams) => {
    // addHistory(requestParams);
    dispatch( {
      type: 'addReq',
      payload: requestParams
    });
  }



  const [data, setData] = useState(null);
  // const [requestParams, setRequestParams] = useState({});
  const [load, setLoad] = useState(false);
  useEffect(() => {
    
    async function getJSON(requestParams) {
      const response = await fetch(requestParams.url);
      const jsonData = await response.json();
      setData(jsonData);
      setLoad(false);
    }
    getJSON(state.requestParams);
    // callApi(requestParams);

  }, [state.requestParams]);

  let callApi = async (requestParams) => {
    setLoad(true);
    // addHistory(requestParams);
    // setRequestParams(requestParams);
  }

  return (
    <React.Fragment>
      <Header />
      {state.requestParams && 
        <>
          <div>Request Method: {state.requestParams.method}</div>
          <div>URL: {state.requestParams.url}</div>
          <div>JSON: {state.requestParams.json}</div>
        </>}
      <Form handleApiCall={callApi} addReq={addReq} />
      {load ? 'Loading...' : <Results data={data} />}
      <History history={state.history} addReq={addReq} />
      <Footer />
    </React.Fragment>
  );
}


export default App;
