import React from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import { useEffect , useReducer } from 'react';
import History from './Components/History';

function App() {

  const initialState = {
    load: false,
    data: [],
    result: null,
    requestParams: {},
    history: [],
    ans: null,
  }
  
  const reducer = (state, action) => {
    switch(action.type) {
      case 'addData':
        return {...state,
          data: [...state.data, action.payload],
          result: action.payload,
        }
        case 'addReq':
          return {...state,
            requestParams: action.payload,
            history: [...state.history, action.payload],
          }
        case 'histResult':
          return {
            ...state, 
            ans: action.payload,
          }
          case 'load':
            return {
              ...state, 
              load: action.payload,
            }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const histResult = (ans) => {
    dispatch( {
      type: 'histResult',
      payload: ans
    });
  }

  const load = (load) => {
    dispatch( {
      type: 'load',
      payload: load
    });
  }
  const addReq = (requestParams) => {
    load(true);
    dispatch( {
      type: 'addReq',
      payload: requestParams
    });
  }

  const addData = (result) => {
    console.log('hii');
    dispatch( {
      type: 'addData',
      payload: result
    });
  }

  useEffect(() => {
    
    async function getJSON(requestParams) {
      const response = await fetch(requestParams.url);
      const jsonData = await response.json();
      addData(jsonData);
      load(false);

    }
    console.log(state.requestParams);
    getJSON(state.requestParams);


  }, [state.requestParams]);

  function findResult (req){
    let idx = state.history.indexOf(req);
    let result = state.data[idx];
    histResult(result);
    return result;
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
      <Form addReq={addReq} />
      {state.load ? 'Loading...' : <Results result={state.result} ans={state.ans} />}
      <History history={state.history} findResult={findResult} />
      <Footer />
    </React.Fragment>
  );
}


export default App;
