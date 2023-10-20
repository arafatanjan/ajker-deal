import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import data from './Data';
import "./Question.css";

/** Custom Hook */
import { useFetchQestion } from '../Quiz/Hooks/FetchQuestion';
// import {updateResultAction} from '../../redux/reducers/resultReducer'
import { updateResult } from './Hooks/setResult'

const Question = ({ onChecked }) => {
    const [checked, setChecked] = useState(undefined)
    const [{ isLoading, apiData, serverError}] = useFetchQestion();
    // const questions = data[0];
     const question = useSelector(state => state.question.queue[state.question.trace])
     const  trace  = useSelector(state => state.question.trace);
     const result = useSelector(state => state.result.result);
      const dispatch = useDispatch()
    useEffect (()=> {
        //   console.log( {trace, checked});
          //console.log(apiData)npm start

        //  console.log(serverError)
        // dispatch(updateResultAction({ trace, checked}))
         dispatch(updateResult({ trace, checked}))
    },[checked])

    function onSelect(i) {
        //  console.log(i);
         onChecked(i); 
         setChecked(i);
        
    }
    if(isLoading) return <h3>isLoading</h3>
    if(serverError) return <h3>{serverError || "Unknown Error"}</h3>

    return (
        <div>
          
            <h2 >{question?.question}</h2>
            <ul key={question?.id}>
                {
            question?.options.map((q, i) => (
            <li key={i}>
                        <input 
                            type="radio"
                            value={false}
                            name="options"
                            id={`q${i}-option`}
                            onChange={() => onSelect(i)}
                        />
                        <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                        {/* <div className='check checked'></div> */}
                         <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div> 
                        </li>
            )
            )
}
                        </ul>
        </div>
    );
};

export default Question;