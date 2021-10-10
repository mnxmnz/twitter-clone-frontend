import Link from 'next/link';
import UserProfile from './UserProfile';
import SigninForm from './SigninForm';
import styled from 'styled-components';
import { Menu, Input, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from 'reducers/index';
import { LayoutProps } from 'typings';

function AppLayout({ children }: LayoutProps) {
  const { isSignin } = useSelector((state: RootState) => state.user);

  return (
    <>
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
          {isSignin ? <UserProfile /> : <SigninForm />}
        </Col>
        <ChildrenWrapper xs={24} md={18}>
          {children}
        </ChildrenWrapper>
      </Row>
    </>
  );
}

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const ChildrenWrapper = styled(Col)`
  padding: 20px;
`;

export default AppLayout;
