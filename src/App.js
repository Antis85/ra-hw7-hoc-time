import React, { useState, useEffect } from 'react';
import VideoList from './components/VideoList';

export default function App() {
  const [list, setList] = useState([
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-12-02 05:24:33',
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-12-16 00:10:00',
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-12-15 22:48:00',
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-12-15 10:48:00',
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-12-11 19:48:00',
    },
  ]);

  useEffect(() => {
    setList((prev) => [...prev]);
    return () => {};
  }, [list]);

  return <VideoList list={list} />;
}
