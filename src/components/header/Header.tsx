import React from 'react';
import { Box, Button, Container, Link, Stack } from '@mui/material';

export const Header: React.FC = () => {
  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        height={96}
      >
        <Link href="/">
          <img src="/images/Logo.png" alt="logo" height={48} />
        </Link>
        <Box>
          <Link mr={6}>Live Tours</Link>
          <Link mr={6}>About Us</Link>
          <Button variant="outlined" sx={{ width: 75 }}>
            EN
          </Button>
          <Button sx={{ width: 75 }}>UA</Button>
        </Box>
      </Stack>
    </Container>
  );
};
