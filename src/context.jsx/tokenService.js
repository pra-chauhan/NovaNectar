export const setAccessToken = (token) => {
  if (token) {
    localStorage.setItem("accessToken", token);
  } else {
    localStorage.removeItem("accessToken");
  }
};

export const getAccessToken = () => localStorage.getItem("accessToken");

export const setCurrentRole = (role) => {
  if (role) {
    localStorage.setItem("role", role);
  } else {
    localStorage.removeItem("role");
  }
};

export const getCurrentRole = () => localStorage.getItem("role");
