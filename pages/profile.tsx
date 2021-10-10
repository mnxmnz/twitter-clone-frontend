import Head from 'next/head';
import AppLayout from '@components/AppLayout';
import NicknameEditForm from '@components/profile/NicknameEditForm';
import SocialList from '@components/profile/SocialList';

function Profile() {
  const followerList = [{ nickname: 'MinJi' }, { nickname: '사용자-01' }, { nickname: '사용자-02' }];
  const followingList = [{ nickname: 'MinJi' }, { nickname: '사용자-01' }, { nickname: '사용자-02' }];

  return (
    <>
      <Head>
        <title>Twitter || Profile</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <SocialList header="FollowerList" data={followerList} />
        <SocialList header="FollowingList" data={followingList} />
      </AppLayout>
    </>
  );
}

export default Profile;
