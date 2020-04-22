module.exports = {
  validate,
};

function validate(user) {
  return user.username && user.password ? true : false;
}
