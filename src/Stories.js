import React  from 'react'
import { useGlobalContext } from './context'

const Stories = () => {

    const {hits, isLoading } = useGlobalContext();
   



   


    if (isLoading) {
        return <>
            <h1>
                Loading...........
            </h1>
        </>
    }

    return (
        <>
            <h2>My tech new post  </h2>
            {hits.map((curPost) => {
                const { title, author, objectID, url, num_comments} = curPost;

                return (
                 <>
                  <div className='card'>
                   <h2>{title}</h2>
                   <p>
                    By {author} | <span>{num_comments}</span> comments
                   </p>
                   <div className='card-button'>
                    <a href={url} target="_blank">
                        Read More
                    </a>
                    <a href='#'>Remove</a>
                   </div>
                  </div>

                 </>

              )
            })}
        </>
    )
}

export default Stories
