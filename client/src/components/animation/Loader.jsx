import { LoaderCircle } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center py-12">
      <LoaderCircle className="h-10 w-10 animate-spin text-cyan-400" />
    </div>
  );
}