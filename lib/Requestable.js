class ResponseError extends Error {
    constructor(message, path, response) {
      super(message);
      this.path = path;
      this.request = response.config;
      this.response = (response || {}).response || response;
      this.status = response.status;
   }
}

class Requestable {
    constructor(auth, apiBase, AcceptHeader) {
      this.__apiBase = apiBase || 'http://archiveofourown.org';
      this.__auth = {
         username: auth.username,
         password: auth.password,
      };

      this.__AcceptHeader = AcceptHeader || 'v3';
   }

   __getRequestHeaders(raw, AcceptHeader) {
      let headers = {
         'Content-Type': 'application/json;charset=UTF-8',
         'Accept': 'application/vnd.github.' + (AcceptHeader || this.__AcceptHeader),
      };

      if (raw) {
         headers.Accept += '.raw';
      }
      headers.Accept += '+json';

      if (this.__authorizationHeader) {
         headers.Authorization = this.__authorizationHeader;
      }

      return headers;
   }
}