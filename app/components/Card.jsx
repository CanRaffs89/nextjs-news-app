import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className='card-container border'>
        {/* <div className="card-image-container border-b">
            <Image 
                src="/../public/bmx.jpg"
                width={750}
                height={500}
                alt='BMX rider'
            />
        </div> */}
        <h4 className='border-b'>Article Title</h4>
        <p className='border-b'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus consequuntur earum consequatur asperiores atque, ut corrupti fugit repellendus exercitationem temporibus soluta quos facilis obcaecati? In est nemo unde consequatur voluptate!</p>
        <div className="card-footer">
            <h4>Author | news.com</h4>
            <Link href='/' className='btn btn-article'>Link</Link>
        </div>
    </div>
  )
}

export default Card