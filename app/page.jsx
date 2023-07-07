'use client'
import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import Card from './components/Card'
import LoadingPage from './loading'

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      // Get news articles from API endpoint
      const response = await fetch('/api/articles');
      // Wait a bit for the loading animation
      await new Promise((resolve) => setTimeout(resolve, 500));
      // Save the data as JSON
      const data = await response.json();
      // Take just the array of articles from the data
      setArticles(data.articles);
      // Stop showing the loading animation when timer runs out
      setLoading(false);
    }
    getArticles();
  }, []);

  // This shows the loading animation
  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <SearchBar getSearchResults={(results) => setArticles(results)}/>
      <Card articles={articles}/>
    </>
  )
}

export default HomePage
