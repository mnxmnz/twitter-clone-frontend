## About The Repository

#### [[리뉴얼] React로 NodeBird SNS 만들기](https://www.inflearn.com/course/%EB%85%B8%EB%93%9C%EB%B2%84%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%A6%AC%EB%89%B4%EC%96%BC) 강의 실습 코드 정리 레포입니다.

#### 강의를 통해 새로 배운 점을 [docs 폴더 Markdown 파일](https://github.com/mnxmnz/Twitter-Clone-Frontend/blob/main/docs/content.md)에 정리했습니다.

<br />

## Folder Structure

```
📦components
 ┣ 📂post
 ┃ ┣ 📜PostCard.tsx
 ┃ ┗ 📜PostForm.tsx
 ┣ 📂profile
 ┃ ┣ 📜FollowList.tsx
 ┃ ┗ 📜NicknameEditForm.tsx
 ┣ 📜AppLayout.tsx
 ┣ 📜SigninForm.tsx
 ┗ 📜UserProfile.tsx
📦hooks
 ┗ 📜useInput.ts
📦pages
 ┣ 📜index.tsx
 ┣ 📜profile.tsx
 ┣ 📜signup.tsx
 ┣ 📜_app.tsx
 ┗ 📜_document.tsx
📦public
 ┗ 📂fonts
 ┃ ┗ 📜NotoSansKR-Light.otf
📦reducers
 ┣ 📜index.ts
 ┣ 📜post.ts
 ┗ 📜user.ts
📦store
 ┗ 📜configureStore.ts
📦styles
 ┗ 📜global-style.ts
📜.eslintrc
📜.gitignore
📜.stylelintrc
📜next-env.d.ts
📜next.config.js
📜package.json
📜README.md
📜tsconfig.json
📜yarn.lock
```

<br />

## Built With

| React | Next.js |
| :---: | :-----: |

```json
"dependencies": {
  "@ant-design/icons": "^4.6.4",
  "antd": "^4.16.13",
  "next": "^11.1.2",
  "react": "^17.0.2",
  "react-dom": "^17.0.2",
  "styled-components": "^5.3.1"
},
"devDependencies": {
  "@types/node": "^16.7.10",
  "@types/react": "^17.0.19",
  "@types/react-redux": "^7.1.18",
  "@types/styled-components": "^5.1.14",
  "@typescript-eslint/eslint-plugin": "^4.30.0",
  "@typescript-eslint/parser": "^4.30.0",
  "eslint": "^7.32.0",
  "eslint-plugin-import": "^2.24.2",
  "eslint-plugin-react": "^7.25.1",
  "eslint-plugin-react-hooks": "^4.2.0",
  "fork-ts-checker-webpack-plugin": "^6.3.3",
  "next-redux-wrapper": "^6.0.2",
  "react-redux": "^7.2.5",
  "redux": "^4.1.1",
  "redux-devtools-extension": "^2.13.9",
  "styled-reset": "^4.3.4",
  "stylelint": "^13.13.1",
  "stylelint-config-concentric-order": "^4.0.1",
  "typescript": "^4.4.2"
},
```

<br />

## Getting Started

#### Prerequisites

```
npm install --global yarn
```

#### Installation

1. Clone the Repo

```
git clone https://github.com/mnxmnz/Twitter-Clone-Frontend.git
```

```
cd Twitter-Clone-Frontend
```

2. Install Project Packages

```
yarn
```

3. Run the Project (Dev Mode)

```
yarn dev

http://localhost:3000/
```
