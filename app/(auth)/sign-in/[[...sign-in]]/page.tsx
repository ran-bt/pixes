import {
  SignInButton,
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
const SignInPage = () => {
  return (
    <div>
      <p>sign in page</p>
      <SignIn />
    </div>
  );
};

export default SignInPage;
