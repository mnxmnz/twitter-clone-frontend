import { useCallback } from 'react';
import { Button, Card, List } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import styled from 'styled-components';

type ProfileProps = {
  header: string;
  data: { nickname: string }[];
};

function FollowList({ header, data }: ProfileProps) {
  const ItemComponent = useCallback(item => {
    return (
      <ListItemWrapper>
        <Card actions={[<StopOutlined key="stop" />]}>
          <Card.Meta description={item.nickname} />
        </Card>
      </ListItemWrapper>
    );
  }, []);

  return (
    <ListWrapper
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <LoadWrapper>
          <Button>More</Button>
        </LoadWrapper>
      }
      bordered
      dataSource={data}
      renderItem={ItemComponent}
    />
  );
}

const ListWrapper = styled(List)`
  margin-top: 10px;
  padding: 10px;
`;

const ListItemWrapper = styled(List.Item)`
  margin-top: 20px;
`;

const LoadWrapper = styled.div`
  text-align: center;
  margin: 10px 0;
`;

export default FollowList;
