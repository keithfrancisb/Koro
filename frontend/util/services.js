import wretch from 'wretch';


export const signup = (email, password) => {
  const data = {
    email,
    password
  };
  console.log(data, 'in signup service');
  return wretch('/api/users')
    .json(data)
    .post()
};
