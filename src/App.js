import { React, useState, useEffect } from 'react';
import styles from './App.module.css';
import NavBar from './NavBar';
import Content from './Content';

function App() {
  const [ userData, setUserData ] = useState([])
  const [ postData, setPostData] = useState([])
  const [ commentData, setCommentData] = useState([])
  const [ activePage, setActivePage ] = useState('users');
  const [ fetchError, setFetchError ] = useState();

  const USERS_API = 'https://jsonplaceholder.typicode.com/users';
  const POSTS_API = 'https://jsonplaceholder.typicode.com/posts';
  const COMMENTS_API = 'https://jsonplaceholder.typicode.com/comments';
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ usersFetched, postsFetched, commentsFetched ] = await Promise.all([
          fetch(USERS_API),
          fetch(POSTS_API),
          fetch(COMMENTS_API)
        ]);

        if (!usersFetched.ok || !postsFetched.ok || !commentsFetched.ok) {
          throw Error('Did not recieve expected data...')
        }

        const users = await usersFetched.json();
        const posts = await postsFetched.json();
        const comments = await commentsFetched.json();
        
        setUserData(users);
        setPostData(posts);
        setCommentData(comments);
        
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <NavBar 
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <Content 
        userData={userData}
        postData={postData}
        commentData={commentData}
        activePage={activePage}
        fetchError={fetchError}
      />
    </div>
  );
}

export default App;
