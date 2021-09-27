import AppLayout from '@components/AppLayout';
import { useSelector } from 'react-redux';
import { RootState } from 'reducers/index';
import PostForm from '@components/post/PostForm';
import PostCard from '@components/post/PostCard';

function Home() {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const { mainPosts } = useSelector((state: RootState) => state.post);

  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
}

export default Home;
