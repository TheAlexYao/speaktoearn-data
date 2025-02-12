
import { Download, RefreshCw } from "lucide-react";

export const TopBanner = () => {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="bg-card-background backdrop-blur-lg border-b border-gray-200 p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm text-gray-600">System Live</span>
          </div>
          <div className="text-sm text-gray-600">
            Last Updated: {currentTime}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <RefreshCw className="w-4 h-4" />
            <span>Refresh</span>
          </button>
          <div className="text-sm px-3 py-1 bg-gray-100 rounded-full">
            Celo Alfajores
          </div>
        </div>
      </div>
    </div>
  );
};
