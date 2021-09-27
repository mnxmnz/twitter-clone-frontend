import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import UserProfile from './UserProfile';
import SigninForm from './SigninForm';
import { useSelector } from 'react-redux';
import { RootState } from 'reducers/index';

type LayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: LayoutProps) {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);

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
          {isLoggedIn ? <UserProfile /> : <SigninForm />}
        </Col>
        <ChildrenWrapper xs={24} md={18}>
          {children}
        </ChildrenWrapper>
      </Row>
    </div>
  );
}

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const ChildrenWrapper = styled(Col)`
  padding: 20px;
`;

export default AppLayout;
