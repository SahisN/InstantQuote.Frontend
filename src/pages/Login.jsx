import { Card, CardContent, CardHeader } from "@/components/ui/card";
import LoginForm from "@/forms/loginform/LoginForm";

export default function Login() {
  const handleLogin = async (data) => {
    console.log("Login data:", data);
    // Perform login logic here
  };
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="max-w-screen-sm">
        <Card className="w-full h-full max-w-[700px] max-h-[600px]">
          <CardContent className="px-[50px]">
            <h6 className="text-center font-bold">Login Portal</h6>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
