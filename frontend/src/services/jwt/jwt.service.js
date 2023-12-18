const ID_TOKEN_KEY = "token";

class JwtService {
  getToken() {
    console.log(localStorage.getItem(ID_TOKEN_KEY));
    return localStorage.getItem(ID_TOKEN_KEY);
  }

  saveToken(token) {
    localStorage.setItem(ID_TOKEN_KEY, token);
  }

  destroyToken() {
    localStorage.removeItem(ID_TOKEN_KEY);
  }
}

export default new JwtService();
