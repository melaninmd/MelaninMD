import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HistoryItem from '../HistoryItem/HistoryItem';
import './HistoryPage.css'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const dispatch = useDispatch();
  const history = useSelector(store => store.historyReducer);
  const user = useSelector(store => store.user);
	const [open, setOpen] = useState(false);


  useEffect(()=>{
    dispatch({type: 'FETCH_HISTORY'})
  }, [])

  return (
    <div className="container">
      <h2 className='user-one'>{user.username}'s history</h2>
      {history ?(
        history.data?.map((item, i)=>  <HistoryItem key={i} item={item}/> )
        

      ): (
        <Backdrop

        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={!history}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      )}
      
    </div>
  );
}

export default InfoPage;




