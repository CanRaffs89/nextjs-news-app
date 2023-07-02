'use client'
import { useState, useEffect } from 'react'
import Card from './components/Card'

const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      // Set options
      const apikey = process.env.NEXT_PUBLIC_API_KEY;
      const category = 'technology';
      const url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=gb&max=8&apikey=' + apikey;

      // Fetch data 
      const res = await fetch(url)
      // Save it in JSON form
      const data = await res.json();
      setArticles(data.articles);
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
