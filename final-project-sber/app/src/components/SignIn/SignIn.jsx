function SignIn() {
  return (
    <form
      className="d-flex flex-column align-items-center container form-wrapper"
      method="POST"
      action="/auth/signin"
    >
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
      <button className="btn btn-primary">Войти</button>
    </form>
  );
}

export default SignIn;
