import LoginForm from "@/components/modules/auth/login-form";
import { CardContent, CardHeader } from "@/components/ui/card";

const Login = () => {
  return (
    <>
      <CardHeader>
        <h2 className="text-lg font-bold">Admin Dashboard Login</h2>
        <p className="text-sm text-gray-600">
          Please enter your credentials to access the admin dashboard.
        </p>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </>
  );
};

export default Login;
