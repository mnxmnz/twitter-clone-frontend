import AppLayout from '@components/AppLayout';
import PostMainForm from '@components/post/MainForm';
import PostContentCard from '@components/post/ContentCard';
import { useSelector } from 'react-redux';
import { RootState } from 'reducers/index';

function Home() {
  const { isSignin } = useSelector((state: RootState) => state.user);
  const { mainPosts } = useSelector((state: RootState) => state.post);

  return (
    <AppLayout>
      {isSignin && <PostMainForm />}
      {mainPosts.map(post => (
        <PostContentCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
}

export default Home;
