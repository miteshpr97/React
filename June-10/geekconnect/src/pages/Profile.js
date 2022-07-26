import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileDetail from './ProfileDetail';
import PostList from '../components/PostList';

import { dummyapi } from "../util";
import { Container } from '@mui/system';
import { Typography } from '@mui/material';


const Profile = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const[detail, setDetail] = useState({});


  // console.log(id);

  useEffect(() => {
    (async () => {
      const response = await dummyapi.get(`/user/${id}`);
      const data = response.data.data;
      setDetail(data);
    })();

    (async () => {
      const response = await dummyapi.get(`/user/${id}/post`);
      const data = response.data.data;
      setPosts(data);
      setPageNumber(1);


    })();
  }, [id]);
  const loadMore = async () => {
    const response = await dummyapi.get(`/user/${id}/post?page=${pageNumber}`);
    const postrArr = response?.data?.data ?? [];
    setPosts(oldPosts => [...oldPosts, ...postrArr]);
    setPageNumber(page => page + 1);
  }
  // console.log(process.env.REACT_APP_API_KEY);

  return (
    <>
      <Container>
        <ProfileDetail detail={detail} />
        <hr />
        <Typography varient="h6" align="center" mt={4}> All Post</Typography>
        <PostList posts={posts} loadMore={loadMore} />
      </Container>
    </>
  )
}

export default Profile