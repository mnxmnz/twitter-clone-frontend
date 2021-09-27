import { useMemo, useCallback } from 'react';
import { Button, Card, List } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import styled from 'styled-components';

type ProfileProps = {
  header: string;
  data: { nickname: string }[];
};

function FollowList({ header, data }: ProfileProps) {
  const grid = useMemo(() => ({ gutter: 4, xs: 2, md: 3 }), []);

  const listHeader = useMemo(() => <div>{header}</div>, []);

  const loadMore = useMemo(
    () => (
      <LoadWrapper>
        <Button>More</Button>
      </LoadWrapper>
    ),
    [],
  );

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
      grid={grid}
      size="small"
      header={listHeader}
      loadMore={loadMore}
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
  margin: 10px 0;
  text-align: center;
`;

export default FollowList;
