import InputField from "@/components/input-field";
import { Button } from "@/components/ui/button";

const LoginForm = () => {
  return (
    <form>
      <InputField label="Email" type="text" placeholder="Email" />
      <InputField label="Password" type="password" placeholder="Password" />
      <div className="flex items-center justify-between">
        <Button>Login</Button>
        <a
          href="/forgot-password"
          className="text-sm text-primary hover:underline"
        >
          Forgot Password?
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
