## 강의 내용을 더 세부적으로 알아가고 싶어서 작성한 Markdown 파일

**content**

- [1. HTML](https://github.com/mnxmnz/Twitter-Clone-Frontend/blob/main/docs/content.md#html)
- [2. CSS](https://github.com/mnxmnz/Twitter-Clone-Frontend/blob/main/docs/content.md#css)
- [3. React](https://github.com/mnxmnz/Twitter-Clone-Frontend/blob/main/docs/content.md#react)
- [4. Next](https://github.com/mnxmnz/Twitter-Clone-Frontend/blob/main/docs/content.md#next)
- [5. Dev](https://github.com/mnxmnz/Twitter-Clone-Frontend/blob/main/docs/content.md#dev)

<br />

### HTML

<hr />

#### a (noreferrer noopener)

```tsx
<a href="https://github.com/mnxmnz" target="_blank" rel="noreferrer noopener">
  Made by MinJi
</a>
```

📄 [MDN - HTML](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a)

📄 [Blog - [SEO] target="\_blank" 좀 더 알고 사용하자(noopener, norefferrer, nofollow 차이점에 대해서)](https://webruden.tistory.com/262)

<br />
<br />

### CSS

<hr />

#### vertical-align

![vertical-align](https://bitsofco.de/content/images/2015/12/Group-1.png)

```tsx
<Input.Search enterButton style={{ verticalAlign: 'middle' }} />
```

📄 [MDN - CSS](https://developer.mozilla.org/ko/docs/Web/CSS/vertical-align)

📄 [W3Schools - CSS](https://www.w3schools.com/cssref/pr_pos_vertical-align.asp)

<br />
<br />

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

#### Re-rendering

- 객체는 새로 생성될 때마다 다른 것으로 인식 `{} === {} // false`

- 새로운 객체(style)를 추가하면 Virtual DOM에서 객체가 달라진 것으로 인식하고 해당 div 전체 리렌더링

- div style 태그 대신 styled component 사용하기

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

📄 [Blog - [번역] React를 본격적으로 하기 전 알면 좋은 6가지](https://jaeyeophan.github.io/2018/01/02/React-tips-for-beginners/)

📄 [Blog - React 렌더링 이해 및 최적화 (With Hook)](https://medium.com/vingle-tech-blog/react-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f255d6569849)

📄 [Blog - React 의 성능을 조금 이라도 올려보자 (Performance Optimize)](https://pks2974.medium.com/react-%EC%9D%98-%EC%84%B1%EB%8A%A5%EC%9D%84-%EC%A1%B0%EA%B8%88-%EC%9D%B4%EB%9D%BC%EB%8F%84-%EC%98%AC%EB%A0%A4%EB%B3%B4%EC%9E%90-performance-optimize-f1a51b8c406c)

<br />
<br />

### Next

<hr />

#### Link tag

```tsx
<Link href="/">
  <a>Home</a>
</Link>
```

📄 [Next docs - next/link](https://nextjs.org/docs/api-reference/next/link)

📄 [Blog - [번역] next/link 공식 문서](https://crong-dev.tistory.com/50)

📄 [Blog - Next.js Link 태그안에 a tag를 안넣어도 왜 잘 작동될까?](https://uchanlee.dev/nextjs/Why-using-a-tag-in-nextjs-Link/)

📄 [Stack Overflow - Next.JS "Link" vs "router.push()" vs "a" tag](https://stackoverflow.com/questions/65086108/next-js-link-vs-router-push-vs-a-tag)

<br />
<br />

### Dev

<hr />

#### Gutter

![Gutter](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjklenrQEIc2uz5DfXlLXE5hQ4n2_EBddIA&usqp=CAU)

![Gutter](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqY4ZHkGhmXhY0ONelqJJKoxVEqjzqflxJdw&usqp=CAU)

- Gutter 용어 의미 알고 있기

```tsx
<Row gutter={8}> ... </Row>
```

📄 [MDN - Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Gutters)
