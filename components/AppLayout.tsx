import Link from 'next/link';

type LayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: LayoutProps) {
  return (
    <div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
        <Link href="/signup">
          <a>Signup</a>
        </Link>
      </div>
      {children}
    </div>
  );
}

export default AppLayout;
