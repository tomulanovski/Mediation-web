import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-[#8ab4d5] font-medium tracking-wider text-sm uppercase mb-4 font-sans">
          Page Not Found
        </p>
        <h1 className="text-5xl lg:text-6xl font-light text-[#1a1a1a] mb-4">
          <span className="font-semibold">404</span>
        </h1>
        <p className="text-[#5a6a7a] text-lg mb-8 font-sans max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="bg-[#1a1a1a] hover:bg-[#333333] text-white px-8 py-6 font-sans">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
