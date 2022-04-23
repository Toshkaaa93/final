function SignUp() {
  return (
    <form
      className="d-flex flex-column align-items-center container form-wrapper"
      name="signupform"
      method="POST"
      action="/auth/signup"
    >
      <input
        className="mb-3 form-control"
        name="nickname"
        placeholder="логин"
        type="text"
      />
      <input
        className="mb-3 form-control"
        name="email"
        placeholder="почта"
        type="email"
      />
      <input
        className="mb-3 form-control"
        name="password"
        placeholder="пароль"
        type="password"
      />

      <button class="btn btn-primary">Зарегистрироваться</button>
    </form>
  );
}

export default SignUp;
