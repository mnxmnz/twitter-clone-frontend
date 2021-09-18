### React

<hr />

#### children (TypeScript)

- TypeScript 환경에서 React children을 사용할 때 children은 `ReactNode` 타입

```tsx
type LayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: LayoutProps) { ... }
```

📄 [TypeScript docs - JSX](https://www.typescriptlang.org/ko/docs/handbook/jsx.html)

📄 [React docs - Children in JSX](https://ko.reactjs.org/docs/jsx-in-depth.html#children-in-jsx)

📄 [React docs - Children API](https://ko.reactjs.org/docs/react-api.html#reactchildren)

<br />

#### useCallback

- 컴포넌트에 props로 넘겨주는 함수는 `useCallback` 사용하기

```tsx
const onChangeId = useCallback(e => {
  setId(e.target.value);
}, []);

<Input name="user-id" value={id} onChange={onChangeId} required />;
```

📄 [React docs - Hooks API](https://ko.reactjs.org/docs/hooks-reference.html#usecallback)

📄 [Blog - React.memo, useCallback 사용으로 렌더링 최적화 하기(feat.React-Native,Redux)](https://velog.io/@shin6403/React.memo-useCallback-사용으로-렌더링-최적화-하기feat.React-NativeRedux)

<br />

#### Re-rendering (style)

- 객체는 새로 생성될 때마다 다른 것으로 인식 `{} === {} // false`

- 새로운 객체(style)를 추가하면 Virtual DOM에서 객체가 달라진 것으로 인식하고 해당 div 전체 리렌더링

- div style 객체 추가 대신 styled component 사용하기

<br />

**style 객체 추가 예시**

```tsx
<div style={{ marginTop: '10px' }}>
  <Button type="primary" htmlType="submit" loading={false}>
    Login
  </Button>
  <Link href="/signup">
    <a>Signup</a>
  </Link>
</div>
```

<br />

**styled component 예시**

```tsx
<ButtonWrapper>
  <Button type="primary" htmlType="submit" loading={false}>
    Login
  </Button>
  <Link href="/signup">
    <a>Signup</a>
  </Link>
</ButtonWrapper>;

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;
```

<br />

**styled component antd 적용 예시**

```tsx
const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;
```

<br />

- styled component 대신 useMemo를 사용할 수 있음

**useMemo 예시**

```tsx
const style = useMemo(() => ({ marginTop: 10 }), []);

<div style={style}>
  <Button type="primary" htmlType="submit" loading={false}>
    Login
  </Button>
  <Link href="/signup">
    <a>Signup</a>
  </Link>
</div>;
```

<br />

📄 [React docs - Hooks API](https://ko.reactjs.org/docs/hooks-reference.html#usememo)

📄 [Blog - [번역] React를 본격적으로 하기 전 알면 좋은 6가지](https://jaeyeophan.github.io/2018/01/02/React-tips-for-beginners/)

📄 [Blog - React 렌더링 이해 및 최적화 (With Hook)](https://medium.com/vingle-tech-blog/react-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f255d6569849)

📄 [Blog - React 의 성능을 조금 이라도 올려보자 (Performance Optimize)](https://pks2974.medium.com/react-%EC%9D%98-%EC%84%B1%EB%8A%A5%EC%9D%84-%EC%A1%B0%EA%B8%88-%EC%9D%B4%EB%9D%BC%EB%8F%84-%EC%98%AC%EB%A0%A4%EB%B3%B4%EC%9E%90-performance-optimize-f1a51b8c406c)

<br />

#### JSX with Array (key)

```tsx
<Card
  actions={[
    <div key="twit">Twit<br />0</div>,
    <div key="followers">followers<br />0</div>,
    <div key="following">following<br />0</div>,
  ]}
>
```

📄 [React docs - 리스트와 Key](https://ko.reactjs.org/docs/lists-and-keys.html)

📄 [Blog - (React) Array를 포함한 JSX, 그리고 key의 개념](https://velog.io/@ranisol/React-Array를-포함한-JSX-그리고-key의-개념)

<br />

#### map index key (anti pattern)

- `index` 값을 `key` 로 사용하지 않기

```tsx
{
  mainPosts.map((post, index) => <PostCard key={index} post={post} />);
}
```

📄 [Blog - React 에서 배열컴포넌트 사용시 key 에 배열의 index는 가급적 사용하지 말자.!!](https://blog.woolta.com/categories/1/posts/210)

📄 [Blog - key의 필요성, force rendering, index key 안티 패턴 제거](https://darrengwon.tistory.com/1258)

📄 [Blog - [React] 반복되는 컴포넌트를 효율적으로 보여주기 - map 함수](https://chanhuiseok.github.io/posts/react-8/)

📄 [Blog - [React] 배열의 index를 key로 쓰면 안되는 이유](https://medium.com/sjk5766/react-%EB%B0%B0%EC%97%B4%EC%9D%98-index%EB%A5%BC-key%EB%A1%9C-%EC%93%B0%EB%A9%B4-%EC%95%88%EB%90%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-3ce48b3a18fb)
