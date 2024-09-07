import React, { useState } from 'react';
import NewsContext from './NewsContext';

const MyProvider = ({ children }) => {
 

  const [newsinfo, setnewsinfo] = useState({});
  const [total, settotal] = useState(10);
  const [results, setresults] = useState([]);
  const [items, setitems] = useState([]);


  return (
    <NewsContext.Provider value={{newsinfo,
        setnewsinfo,
        total,
        settotal,
        results,
        setresults,
        items,
        setitems,}}>
      {children}
    </NewsContext.Provider>
  );
};

export default MyProvider;