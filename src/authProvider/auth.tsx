const isAuthenticated = () => {
  if(typeof window === 'undefined') {
    return false;
  }
  if(localStorage.getItem('token')) {
    return JSON.parse(localStorage.getItem('token') as any);
  }
  return false;
}

export default isAuthenticated;