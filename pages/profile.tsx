import Head from 'next/head';
import AppLayout from '@components/AppLayout';
import NicknameEditForm from '@components/profile/NicknameEditForm';
import FollowList from '@components/profile/FollowList';

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
        <FollowList header="FollowerList" data={followerList} />
        <FollowList header="FollowingList" data={followingList} />
      </AppLayout>
    </>
  );
}

export default Profile;
