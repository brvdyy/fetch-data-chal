import React from 'react'
import styles from './Content.module.css'

const Content = ({ userData, postData, commentData, activePage, fetchError }) => {
    const handleContent = () => {
        switch(activePage) {
            case 'users':
                return (
                    userData.map(user => (
                        <li
                            key={user.id}
                        >
                            {JSON.stringify(user)}
                        </li>
                    ))
                )
            case 'posts':
                return (
                    postData.map(post => (
                        <li
                            key={post.id}
                        >
                            {JSON.stringify(post)}
                        </li>
                    ))
                )
            case 'comments':
                return (
                    commentData.map(comment => (
                        <li
                            key={comment.id}
                        >
                            {JSON.stringify(comment)}
                        </li>
                    ))
                )
            default:
                return fetchError   
        }
    }

  return (
    <div className= {styles.content}>
        <ul>
            { handleContent() }
        </ul>
    </div>
  )
}

export default Content