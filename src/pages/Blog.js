import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../components/_dashboard/blog';
//
import POSTS from '../_mocks_/blog';

// ----------------------------------------------------------------------



// ----------------------------------------------------------------------

export default function Blog() {
  return (
    <Page title="ProfeCion">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Encuestas para la evaluación de Profesores
          </Typography>
          
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={POSTS} />
         </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
  
}
