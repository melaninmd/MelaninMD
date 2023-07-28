import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HistoryItem from '../HistoryItem/HistoryItem';
import './HistoryPage.css'
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const dispatch = useDispatch();
  const history = useSelector(store => store.historyReducer);

  useEffect(()=>{
    dispatch({type: 'FETCH_HISTORY'})
  }, [])

  return (
    <div className="container">
      <p>User History Page</p>
      {history ?(
        history.data?.map((item, i)=>  <HistoryItem key={i} item={item}/> )
        

      ): (
        <p>No history to display</p>
      )}
      
    </div>
  );
}

export default InfoPage;




