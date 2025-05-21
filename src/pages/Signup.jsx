import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useSignup } from "@/auth/useSignup";
import SignupForm from "@/forms/signupForm/SignupForm";

export default function Signup() {
  const { mutate: signup } = useSignup();

  const handleSignup = async (data) => {
    signup({
      username: data.username,
      email: data.email,
      password: data.password,
    });
  };
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="max-w-screen-sm">
        <Card className="w-full h-full max-w-[700px] max-h-[900px]">
          <CardContent className="px-[50px]">
            <h6 className="text-3xl text-center font-bold">Signup Portal</h6>
            <SignupForm onSubmit={handleSignup} />
          </CardContent>
          <CardFooter className="flex justify-center">
            <h1 className="text-center">
              Already have an account?{" "}
              <a href="/login" className="underline">
                Login
              </a>
            </h1>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
