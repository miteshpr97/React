import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import PostList from '../components/PostList';
import { dummyapi } from '../util';
import HomeBasicCard from '../components/HomeBasicCard';


const Home = () => {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);


  const loadMore = async () => {
    const response = await dummyapi.get(`/post?page=${pageNumber}`);
    const postrArr = response?.data?.data ?? [];
    setPosts(oldPosts => [...oldPosts, ...postrArr]);
    setPageNumber(page => page + 1);
  }
  // console.log(process.env.REACT_APP_API_KEY);

  useEffect(() => {
   (async () => {
    const response = await dummyapi.get(`/post`);
    const data = response.data.data;
    setPosts(data);
    setPageNumber(1);
   })();  
  }, []);



  return (
    <>
      <Container fixed>
        <HomeBasicCard />
        <PostList posts={posts} loadMore={loadMore} />
      </Container>


    </>
  )
}

export default Home