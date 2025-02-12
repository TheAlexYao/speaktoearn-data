
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  FileCheck,
  FileX,
  Languages,
  Timer,
  User,
  Check,
  X,
  Clock,
  Filter,
} from "lucide-react";

// Mock data for submissions
const submissions = [
  {
    id: 1,
    contributor: "Sarah M.",
    language: "Swahili",
    duration: "2:34",
    status: "verified",
    submitted: "2h ago",
    quality: "95%",
  },
  {
    id: 2,
    contributor: "Ahmed K.",
    language: "Kurdish",
    duration: "1:45",
    status: "pending",
    submitted: "3h ago",
    quality: "pending",
  },
  {
    id: 3,
    contributor: "Maria G.",
    language: "Bengali",
    duration: "3:21",
    status: "rejected",
    submitted: "5h ago",
    quality: "65%",
  },
  // Add more submissions...
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "verified":
      return "text-green-500";
    case "pending":
      return "text-yellow-500";
    case "rejected":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "verified":
      return Check;
    case "pending":
      return Clock;
    case "rejected":
      return X;
    default:
      return Clock;
  }
};

const Submissions = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Submissions</h1>
          <p className="text-gray-600 mt-2">
            Manage and review voice submissions from contributors
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 glass-card">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 rounded-full">
                <FileCheck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Verified Today</p>
                <h3 className="text-2xl font-bold">247</h3>
              </div>
            </div>
          </Card>

          <Card className="p-6 glass-card">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-yellow-100 rounded-full">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending Review</p>
                <h3 className="text-2xl font-bold">58</h3>
              </div>
            </div>
          </Card>

          <Card className="p-6 glass-card">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Languages className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Languages Today</p>
                <h3 className="text-2xl font-bold">12</h3>
              </div>
            </div>
          </Card>

          <Card className="p-6 glass-card">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <Timer className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Hours Recorded</p>
                <h3 className="text-2xl font-bold">18.5</h3>
              </div>
            </div>
          </Card>
        </div>

        {/* Submissions Table */}
        <Card className="glass-card">
          <div className="p-6 flex justify-between items-center border-b">
            <h2 className="text-xl font-semibold">Recent Submissions</h2>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contributor</TableHead>
                <TableHead>Language</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Quality Score</TableHead>
                <TableHead>Submitted</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((submission) => {
                const StatusIcon = getStatusIcon(submission.status);
                return (
                  <TableRow key={submission.id} className="hover:bg-gray-50">
                    <TableCell className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span>{submission.contributor}</span>
                    </TableCell>
                    <TableCell>{submission.language}</TableCell>
                    <TableCell>{submission.duration}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <StatusIcon className={`w-4 h-4 ${getStatusColor(submission.status)}`} />
                        <span className={`capitalize ${getStatusColor(submission.status)}`}>
                          {submission.status}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={submission.status === "pending" ? "text-gray-400" : ""}>
                        {submission.quality}
                      </span>
                    </TableCell>
                    <TableCell>{submission.submitted}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Submissions;
