import { NextResponse } from 'next/server'

async function fetchArticles() {
  const apikey = process.env.NEXT_PUBLIC_API_KEY;
  const category = 'technology';
  const url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=gb&max=8&apikey=' + apikey;

  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function GET(request) {
    const data = await fetchArticles();
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')

    const filteredArticles = data.articles.filter((article) => {
        return article.title.toLowerCase().includes(query.toLowerCase())
    })

    return NextResponse.json(filteredArticles);
}