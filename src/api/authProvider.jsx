const baseUrl = import.meta.env.VITE_BASE_URL;

export const authProvider = {
  // called when the user attempts to log in
  login: async ({ username, password }) => {
    let loginData = {
      userName: username,
      password
    }
    const request = new Request(`${baseUrl}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'include'
    });
    return fetch(request).then(response => {
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
      .then(({ data }) => {
        if (data.roles.includes('admin')) {
          sessionStorage.setItem('username', data.userName);
          sessionStorage.setItem('userId', data._id);
        } else {
          return true
        }
      });
  },
  // called when the user clicks on the logout button
  logout: () => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("userId");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("userId");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return sessionStorage.getItem("username") && sessionStorage.getItem("userId")
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};