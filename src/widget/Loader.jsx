import { RefreshCcw } from "lucide-react";
export default function Loader({ loadingMessage }) {
  return (
    <div>
      <div className="flex justify-center items-center py-[70px]">
        <RefreshCcw size={100} className="animate-spin text-gray-500" />
      </div>
      <h1 className="text-2xl font-bold">{loadingMessage}</h1>
    </div>
  );
}
