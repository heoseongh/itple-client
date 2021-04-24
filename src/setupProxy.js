/**
 * @description 리액트와 django 서버 사이에 있는 미들웨어입니다. 리액트에서 django 서버로 요청을 보내면 3000 -> 8000 포트로 변환되어 django 서버로 요청이 전달됩니다. 미들웨어 없이 다이렉트로 서버로 요청을 보내면 CROS 정책에 위반이 되어서 서버에서 리소스를 받아올 수 없습니다. CROS의 자세한 설명은 아래 링크에서 확인해보세요!
 * @CROS정책 https://evan-moon.github.io/2020/05/21/about-cors/
 * @npm npm install http-proxy-middleware
 * @yarn yarn add http-proxy-middleware
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/contests',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
  );
};