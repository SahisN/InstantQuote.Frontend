import {
  Card,
  CardTitle,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import LoginForm from "@/forms/loginform/LoginForm";
import { useLogin } from "@/auth/useLogin";
import { Header } from "@/widget/Header";

export default function Login() {
  const { mutate: login, isPending } = useLogin();

  const handleLogin = async (data) => {
    login({ email: data.email, password: data.password });
  };
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <Card className="h-full max-w-[700px] max-h-[600px]">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">
              Sign in to InstantQuote
            </CardTitle>
            <CardDescription>
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="px-[50px]">
            <LoginForm onSubmit={handleLogin} isLoading={isPending} />
          </CardContent>
          <CardFooter className="flex justify-center">
            <h1 className="text-center">
              Don't have an account?{" "}
              <a href="/signup" className="underline">
                Sign up
              </a>
            </h1>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
