function SignUp() {
  return (
    <form className="d-flex flex-column align-items-center container form-wrapper" name="signupform" method="POST" action="/auth/signup">
      <input className="mb-3 form-control" name="nickname" placeholder="nickname" type="text" />
      <input className="mb-3 form-control" name="email" placeholder="email" type="email" />
      <input className="mb-3 form-control" name="password" placeholder="password" type="password" />

      <button class="btn btn-primary">Sign Up</button>
    </form>
  );
}

export default SignUp;
