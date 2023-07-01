import Image from 'next/image'
import Link from 'next/link'

const Card = ({ articles }) => {
  return (
    <div className="card">
        { articles.map((article) => (
        <div key={article.id} className='card-container border'>
            <h4 className='border-b'>{article.title}</h4>
            <p className='border-b'>{article.description}</p>
            <div className="card-footer">
                <h4>{article.source.name}</h4>
                <Link href={article.url} className='btn-article'>Link</Link>
            </div>
        </div>
        )) }
    </div>
  )
}

export default Card