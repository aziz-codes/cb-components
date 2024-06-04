import React from "react";
import {
  Calendar,
  DollarSign,
  User,
  ExternalLink,
  Tag,
  Link2,
} from "lucide-react";

const TaskCard: React.FC = () => {
  // Dummy data for GitHub repository URL
  const githubRepoUrl = "https://github.com/example/repo";

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg border border-gray-300">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xs text-gray-800 uppercase font-semibold bg-blue-200 px-2 py-1 rounded">
            Open
          </div>
          <div className="flex items-center text-xs text-gray-700">
            <Calendar className="mr-1 w-4 h-4" />
            <span>Posted on: 2024-06-04</span>
          </div>
        </div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Design a Table
        </h2>
        <p className="text-sm text-gray-800 mb-4">
          Need help designing a table for my new project. Any help would be
          appreciated!
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="flex items-center text-xs font-semibold text-gray-600 bg-gray-200 px-2 py-1 rounded-full">
            <Tag className="mr-1 w-4 h-4" />
            JavaScript
          </span>
          <span className="flex items-center text-xs font-semibold text-gray-600 bg-gray-200 px-2 py-1 rounded-full">
            <Tag className="mr-1 w-4 h-4" />
            C++
          </span>
          <span className="flex items-center text-xs font-semibold text-gray-600 bg-gray-200 px-2 py-1 rounded-full">
            <Tag className="mr-1 w-4 h-4" />
            Python
          </span>
        </div>

        <div className="flex justify-between items-center text-xs text-gray-800 mb-4">
          <div className="flex items-center">
            <Calendar className="mr-1 w-4 h-4" />
            <span className="font-semibold text-blue-800">
              Deadline: 2024-06-10
            </span>
          </div>
          <div className="flex items-center">
            <DollarSign className="mr-1 w-4 h-4 text-yellow-500" />
            <span className="font-semibold text-yellow-500">$50 Reward</span>
          </div>
        </div>
        <div className="flex items-center text-xs text-gray-700 mb-4">
          <User className="mr-1 w-4 h-4" />
          <span>Created by: John Doe</span>
        </div>

        {/* GitHub repository URL section */}
        {githubRepoUrl && (
          <div className="flex items-center text-xs text-gray-700 mb-4">
            <Link2 className="mr-1 w-4 h-4" />
            <a
              href={githubRepoUrl}
              className="text-indigo-600 hover:text-indigo-800"
            >
              GitHub Repository
            </a>
          </div>
        )}

        {/* View more section */}
        <div className="flex items-center text-indigo-600 hover:text-indigo-800 mt-2">
          <a href="#" className="flex items-center font-semibold">
            <span className="mr-1">View More</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
