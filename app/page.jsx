'use client'
import { useState, useEffect } from 'react'
import Card from './components/Card'
import LoadingPage from './loading'

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      // Set options
      const apikey = process.env.NEXT_PUBLIC_API_KEY;
      const category = 'technology';
      const url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=gb&max=8&apikey=' + apikey;

      // Fetch data 
      const res = await fetch(url)
      // Show the loading animation
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Save it in JSON form
      const data = await res.json();
      setArticles(data.articles);
      setLoading(false);
    }
    fetchArticles();
  },[])

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <Card articles={articles}/>
    </>
  )
}

export default HomePage
