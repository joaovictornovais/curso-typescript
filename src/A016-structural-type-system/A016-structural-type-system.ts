type VerifyUserFn = (user: User, sentValue: User) => boolean; /* eslint-disable-line */
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const dbUser = { username: 'joao', password: '123456' };
const sentUser = { username: 'joao', password: '123456' };
const loggedIn = verifyUser(dbUser, sentUser);

console.log(loggedIn);
