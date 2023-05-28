import React from 'react'
import styles from './NavBar.module.css'

const NavBar = ({ activePage, setActivePage }) => {
    
  return (
    <nav>
        <ul className={styles['nav-list']}>
            <li className={styles['nav-item']}>
                <button 
                    className={styles['nav-button']}
                    style={{
                        backgroundColor: (activePage === 'users') ? 'black' : 'white',
                        color: (activePage === 'users') ? 'white' : 'black'
                    }}
                    onClick={() => setActivePage('users')}
                >
                    Users
                </button>
            </li>
            <li className={styles['nav-item']}>
                <button 
                    className={styles['nav-button']}
                    style={{
                        backgroundColor: (activePage === 'posts') ? 'black' : 'white',
                        color: (activePage === 'posts') ? 'white' : 'black'
                    }}
                    onClick={() => setActivePage('posts')}
                >
                    Posts
                </button>
            </li>
            <li className={styles['nav-item']}>
                <button 
                    className={styles['nav-button']}
                    style={{
                        backgroundColor: (activePage === 'comments') ? 'black' : 'white',
                        color: (activePage === 'comments') ? 'white' : 'black'
                    }}
                    onClick={() => setActivePage('comments')}
                >
                    Comments
                </button>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar