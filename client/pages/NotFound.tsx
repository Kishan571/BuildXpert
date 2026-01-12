import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          The construction site you're looking for doesn't exist. Let's get you
          back on track.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition"
        >
          <Home size={20} />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
