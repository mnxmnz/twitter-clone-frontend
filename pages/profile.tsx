import Head from 'next/head';
import AppLayout from '@components/AppLayout';

function Profile() {
  return (
    <>
      <Head>
        <title>Twitter || Profile</title>
      </Head>
      <AppLayout>
        <div>Profile</div>
      </AppLayout>
    </>
  );
}

export default Profile;
