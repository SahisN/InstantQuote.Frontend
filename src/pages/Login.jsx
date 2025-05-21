import { Card, CardContent, CardFooter } from "@/components/ui/card";
import LoginForm from "@/forms/loginform/LoginForm";
import { useLogin } from "@/auth/useLogin";

export default function Login() {
  const { mutate: login } = useLogin();

  const handleLogin = async (data) => {
    login({ email: data.email, password: data.password });
  };
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="max-w-screen-sm">
        <Card className="w-full h-full max-w-[700px] max-h-[600px]">
          <CardContent className="px-[50px]">
            <h6 className="text-3xl text-center font-bold">Login Portal</h6>
            <LoginForm onSubmit={handleLogin} />
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
      </div>
    </div>
  );
}
