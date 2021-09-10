import { useState } from 'react';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

type LayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: LayoutProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="0">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/signup">
            <a>Signup</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://github.com/mnxmnz" target="_blank" rel="noreferrer noopener">
            Made by MinJi
          </a>
        </Col>
      </Row>
    </div>
  );
}

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

export default AppLayout;
