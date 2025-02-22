import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
        <div className='gpt3__blog-container'>
          <div className='gpt3__blog-container_groupA'>
            <Article imgUrl={blog01} date="Sept 26, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          </div>
          <div className='gpt3__blog-container_groupB'>
            <Article imgUrl={blog02} date="Sept 26, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            <Article imgUrl={blog03} date="Sept 26, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            <Article imgUrl={blog04} date="Sept 26, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            <Article imgUrl={blog05} date="Sept 26, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />


          </div>

        </div>
      </div>
    </div>
  )
}

export default Blog