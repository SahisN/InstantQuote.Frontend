import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useSignup } from "@/auth/useSignup";
import SignupForm from "@/forms/signupForm/SignupForm";
import { Header } from "@/widget/Header";

export default function Signup() {
  const { mutate: signup, isPending } = useSignup();

  const handleSignup = async (data) => {
    signup({
      username: data.username,
      email: data.email,
      password: data.password,
    });
  };
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <Card className="h-full max-w-[700px] max-h-[850px]">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">
              Create an account
            </CardTitle>
            <CardDescription>
              Enter your information to get started with InstantQuote
            </CardDescription>
          </CardHeader>
          <CardContent className="px-[50px]">
            <SignupForm onSubmit={handleSignup} isLoading={isPending} />
          </CardContent>
          <CardFooter className="flex justify-center">
            <h1 className="text-center">
              Already have an account?{" "}
              <a href="/signup" className="underline">
                Sign in
              </a>
            </h1>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
