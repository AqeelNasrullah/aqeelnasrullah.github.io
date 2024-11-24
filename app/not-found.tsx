import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 text-white">
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-center max-w-md mb-6">
        Oops! The page you are looking for does not exist. Please check the URL
        or return to the homepage.
      </p>
      <Link href="/" className="text-lg text-theme-blue-300 underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
