import { useEffect,  useState } from "react";
import GetNews from "./GetNews";
import "../App.css";
import NewsContext from "./Context/NewsContext";
import React, { useContext } from 'react';
import Navbar from './Navbar';
import { useNavigate, Link } from "react-router-dom";
import NewsDefault from './default_news.png';
import { nanoid } from "nanoid";
import jsondata from './format.json'
export default function Page(props) {
  const { setresults, settotal } = useContext(NewsContext);
  const [items, setItems] = useState([]);
  const nevigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('email') === null) {
      nevigate('/');
    }
  }, []);

  useEffect(() => {
    GetNews(props.type).then((res) => {
      setresults(res.results);
      settotal(res.totalResults);
                   
      const newItems = res.results.map((res, index) => {
        const uniqueKey = nanoid(); 
  
        return (
     
          <div key={uniqueKey} className="relative flex w-80 mt-10 flex-col rounded-xl bg-black bg-clip-border text-white shadow-lg shadow-black z-50">
            <img 
              alt="news image" 
              src={res.image_url ? res.image_url : NewsDefault}
              className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600" 
            />
            <div  className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {JSON.stringify(res.title).substring(0, 50) + "..."}
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {JSON.stringify(res.description).substring(0, 100) + " ...."}
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link
                to={res.source_url}
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Read More
              </Link>
            </div>
          </div>
       
        );
      });
  
      setItems(newItems);
    });
  }, [props.type]);
  

  return (
    <>
      <Navbar />
      <div className="bg-slate-700 p-5 h-full flex flex-wrap gap-10 justify-center items-center">
        {items}
      </div>
    </>
  );
}
