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
      </Menu>
      <Row>
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </Col>
        <ChildrenWrapper xs={24} md={18}>
          {children}
        </ChildrenWrapper>
      </Row>
      <Footer>
        <Col xs={24} md={24}>
          <a href="https://github.com/mnxmnz" target="_blank" rel="noreferrer noopener">
            Made by MinJi
          </a>
        </Col>
      </Footer>
    </div>
  );
}

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const ChildrenWrapper = styled(Col)`
  padding: 20px;
`;

const Footer = styled(Row)`
  position: fixed;
  bottom: 0;
  padding: 2px;
  border-top: 1px solid #d9d9d9;
  background-color: white;
  min-width: 100%;
  max-width: 100%;
  text-align: center;
  color: white;
  font-weight: bold;
`;

export default AppLayout;
