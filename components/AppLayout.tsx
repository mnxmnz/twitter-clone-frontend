type LayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: LayoutProps) {
  return (
    <div>
      <div>Menu</div>
      {children}
    </div>
  );
}

export default AppLayout;
