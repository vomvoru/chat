# Chat
채팅 App

# 실행 방법
**순서에 주의해주세요**

1. chat-common 패키지 install, build.
```shell
  # ./packages/common 경로에서 실행
  npm install
  npm run build
```

2. chat-client, chat-server 패키지 install, build.
```shell
  # ./packages/client , ./packages/server 경로들에서 실행
  npm install
  npm run build
```

3. chat-server 패키지 실행
```shell
  # ./packages/server 경로에서 실행
  npm start
```


# 기능
- [x] 사용자는 첫 진입 시, ID를 입력하여 접속할 수 있다.
- [x] 채팅방 리스트에서 채팅방을 선택하여 들어갈 수 있다.
- [ ] 채팅방에 다른 사용자를 초대할 수 있다.
- [x] 사용자는 채팅방에서 텍스트를 입력할 수 있다.
- [x] 사용자는 채팅방에서 이미지를 입력할 수 있다.

# Spec
- Monorepo (use symbolic link)
  - https://docs.npmjs.com/files/package.json#local-paths
- Webpack
- eslint
- Typescript

## Spec (Client)
- SPA
- React

## Spec (Server)
- WebSocket (use socket.io)

# 파일 구조

**chat-client package**
Client 담당 패키지
- constants : 상수값들 관리
- types: 타입 정의
- Components : 공통 컴포넌트들 (현재 공통 사항 없음)
- App: 최상위 컴포넌트
  - Providers: Context Provider 컴포넌트들
  - Routes: Route 역할 컴포넌트들
    - Pages: Page Rendering 역할 컴포넌트들
      - Components: 역할별로 나눠진 컴포넌트들
        - Hooks: 역할별 로직
          - api: api 유틸리티 함수 (hooks에 의해 추상화)
          - context: Context API

**chat-server package**
Server 담당 패키지
index.ts 1개의 단일파일

**chat-common package**
Client, Server 공통 코드, 타입 관리 패키지
- constants : 공통 상수값들
- types: 공통 타입들 정의

