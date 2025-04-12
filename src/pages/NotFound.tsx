
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 mb-4">
          <AlertTriangle className="h-8 w-8 text-yellow-600" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">页面未找到</h1>
        <p className="text-xl text-gray-600 mb-6">
          抱歉，您请求的页面不存在或已被移除。
        </p>
        <Button asChild className="w-full">
          <a href="/">返回首页</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
