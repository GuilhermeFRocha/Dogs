export const API_URL = 'https://dogsai.origamis.dev/json';

export function TOKEN_POST() {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()

    }
  }
}

export function USER_GET(token) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'Get',
      headers: {
        Authorized: 'Bearer ' + token,
      }
    }
  }
}