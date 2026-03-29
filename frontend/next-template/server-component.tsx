import LoginForm from "@/app/login/loginForm";

export const metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function Login() {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center">
      <LoginForm />
    </section>
  );
}
