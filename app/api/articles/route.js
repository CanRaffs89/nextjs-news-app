import { NextResponse } from 'next/server'

export async function fetchArticles() {
  const apikey = process.env.NEXT_PUBLIC_API_KEY;
  const category = 'technology';
  const url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=gb&max=8&apikey=' + apikey;

  const response = await fetch(url, { next: { revalidate: 60 }, cache: 'no-store' });
  const data = await response.json();
  return data;
}

export async function GET(request) {
    const articles = await fetchArticles();
    return NextResponse.json(articles);
}