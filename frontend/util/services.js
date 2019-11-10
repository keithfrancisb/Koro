import wretch from 'wretch';

export const signup = (email, password) => {
  const data = {
    email,
    password
  };

  return wretch('/api/users')
    .json(data)
    .post();
};

export const login = (email, password) => {
  const data = {
    email,
    password
  };

  return wretch('/api/users')
    .query(data)
    .get();
};

export const getQuestions = () => {
  
  return wretch('/api/questions')
    .get();
};

export const postQuestion = (userId,question) => {
  const data = { 
    userId,
    question
  };

  return wretch('/api/questions')
    .json(data)
    .post();
}