import axios from "axios";

/**
 * @class
 * @description 실제로 django 서버에게 요청(request)을 날리고 응답(reseponse)으로 JSON 파일을 받아오는 API 클래스입니다.
 * @function fetchAll 
 * @description #9번줄에 지정해놓은 URL을 통해서 axio.get(URL) 요청을 보냅니다. 요청에 성공하면 .then 이후의 코드들이 실행됩니다. 여기서 res는 response의 약자입니다.
 * 리액트에서 axios로 장고 서버에 요청을 보내면 서버는 헤더에 json 데이터를 실어서 리액트로 응답(response)을 보냅니다. 그러면 저희는 그 응답(response)에 있는 데이터를 꺼내서 처리하면 됩니다. 꺼내는 방법은 다음과 같습니다. 
 * @code .then(respnose => response.data)
 * @description 이렇게 하면 response의 헤더에 있던 JSON 파일을 꺼낼 수 있습니다. 즉, 아래의 코드에서 res.data == JSON data 입니다.
 * @function fetch(@param contest_id)
 * @description 특정 공모전의 정보를 요청하는 메서드입니다. 공모전 아이디(contest_id)를 파라미터로 받아서 path를 (URL + contest_id) 형태로 만들어 서버로 요청하면 해당 공모전의 데이터만 요청하게 됩니다. 만들어진 URL은 다음과 같습니다.
 * @url /api/contests/10 
 * @description 10번째 공모전 데이터 요청
*/
class ContestApi {
  URL = "/api/contests/";

  // 공모전 전체 조회
  fetchAll() {
    return axios.get(this.URL).then((res) => res.data);
  }

  // 공모전 단건 조회
  fetch(contest_id) {
    return axios.get(this.URL + contest_id).then((res) => res.data);
  }
}

export default ContestApi;
