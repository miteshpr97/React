import React from 'react'
import { Avatar,Container, Stack } from '@mui/material'

const ProfileDetail = ( {detail} ) => {
  console.log(detail);
  return (
   <Container sx={{ maxWidth: 520 }}>
    <Stack direction="row" mt={4}>
      <Avatar
      alt="Remy sharp"
      src={detail?.picture}
      sx={{width:"16rem", height:"16rem"}}
      />
    </Stack>
    <h1>Profile Details</h1>
   </Container>
  )
}

export default ProfileDetail