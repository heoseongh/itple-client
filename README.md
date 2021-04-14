# Multicampus CloudMSA 5조 Client
CloudMSA 5조 클라이언트 레포지터리 입니다.
## 사용된 기술
- [ ] React
- [ ] Mobx
- [ ] html,css,javascript
- [ ] Material-ui
## 클라이언트 구동 방법
### yarn 설치 확인
```bash
$ yarn --version
```
없다면
1. 검색해서 node.js 설치
2. `npm -v`
3. `npm install -global yarn`
### git clone
```bash
$ git clone https://github.com/heoseongh/itple-client.git
```
### yarn install
```bash
$ yarn install
```
### yarn start
```bash
$ yarn start
```
## 작업 정책
1. `main` 브랜치에서 작업하지 않는다.
2. 개발은 `dev` 브랜치에서 한다.
3. 특정 기능이나 서비스 개발은 `dev` 브랜치로부터 새로 브랜치를 생성하여 작업한다.
- 예) `contestpage`, `mypage`
4. 개발이 완료되면 dev 브랜치를 main 브랜치로 통합한다.
### dev 브랜치로 이동
```bash
$ git checkout dev
```
#### 이동 되었는지 확인 (`*`이 dev에 위치하면 된다.)
```bash
$ git branch
* dev
  main
```
### 각 기능별 브랜치 생성
```bash
$ git checktou -b contestpage
```
#### 생성 되었는지 확인 (`*`이 contestpage에 위치하면 된다.)
```bash
$ git branch
* contestpage
  dev
  main
```
### 기능 구현 완료시 dev 브랜치로 merge
```bash
$ git checkout dev
$ git merge contestpage
```
### 최종 수정 후 main 브랜치로 merge
```bash
$ git checkout main
$ git merge dev
```
