'use client'
import { useState, useEffect } from 'react'
import Card from './components/Card'

const HomePage = () => {
  console.log(process.env.NEXT_PUBLIC_API_KEY)
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const apikey = process.env.NEXT_PUBLIC_API_KEY;
      const category = 'technology';
      const url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=gb&max=10&apikey=' + apikey;

      const res = await fetch(url)
      const data = await res.json();
      setArticles(data.articles);
      console.log(data.articles);
    }
    fetchArticles();
  },[])

  return (
    <>
      <Card articles={articles}/>
    </>
  )
}

export default HomePage
