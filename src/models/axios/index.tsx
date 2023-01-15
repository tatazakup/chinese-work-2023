export default class AxiosModel {
  method: any;
  url: any;
  param: any;
  query: any;
  data: any;
  checkRefreshToken: any;
  typeBody: any;

  constructor(data: any) {
    this.method = data.method ? data.method : null;
    this.url = data.url ? data.url : null;
    this.param = data?.param;
    this.query = data?.query;
    this.data = data?.data;
    this.checkRefreshToken = data.checkRefreshToken
      ? data.checkRefreshToken
      : false;
    this.typeBody = data.typeBody ? data.typeBody : 2;
  }

  changeParam(data = "") {
    this.param = data;
  }
}
