import Logo from "@/components/logo";
import { Card, CardFooter } from "@/components/ui/card";

interface IAuthLayout {
  children: React.ReactNode;
}

const AuthLayout: React.FC<IAuthLayout> = ({ children }) => {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="h-[100vh] flex items-center justify-center flex-col">
          <div className="mb-4">
            <Logo />
          </div>
          <Card className="max-w-[375px] w-full">
            {children}
            <CardFooter>
              <p className="w-full text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} My Portfolio. All rights
                reserved.
              </p>
            </CardFooter>
          </Card>
        </div>
      </body>
    </html>
  );
};

export default AuthLayout;
