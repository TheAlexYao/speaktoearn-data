
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
    taskType: "Speech Recording",
    language: "Swahili",
    duration: "2:34",
    status: "verified",
    submitted: "2h ago",
    quality: "95%",
    verificationMethod: "Peer Review",
  },
  {
    id: 2,
    contributor: "Ahmed K.",
    taskType: "Translation",
    language: "Kurdish",
    duration: "1:45",
    status: "pending",
    submitted: "3h ago",
    quality: "pending",
    verificationMethod: "Back Translation",
  },
  {
    id: 3,
    contributor: "Maria G.",
    taskType: "Phonetic Transcription",
    language: "Bengali",
    duration: "3:21",
    status: "rejected",
    submitted: "5h ago",
    quality: "65%",
    verificationMethod: "Expert Review",
  },
  {
    id: 4,
    contributor: "John D.",
    taskType: "Cultural Annotation",
    language: "Yoruba",
    duration: "4:15",
    status: "verified",
    submitted: "1h ago",
    quality: "98%",
    verificationMethod: "Community Consensus",
  },
  {
    id: 5,
    contributor: "Li W.",
    taskType: "Dialect Tagging",
    language: "Min Chinese",
    duration: "2:50",
    status: "pending",
    submitted: "30m ago",
    quality: "pending",
    verificationMethod: "Expert Panel",
  },
];

const taskTypes = {
  "Translation": { count: 247, icon: Languages, color: "green" },
  "Speech Recording": { count: 189, icon: FileCheck, color: "blue" },
  "Transcription": { count: 156, icon: Timer, color: "purple" },
  "Cultural Annotation": { count: 92, icon: User, color: "yellow" },
};

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
            Track and manage language data contributions across different task types
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(taskTypes).map(([type, data]) => {
            const IconComponent = data.icon;
            return (
              <Card key={type} className="p-6 glass-card hover-lift">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 bg-${data.color}-100 rounded-full`}>
                    <IconComponent className={`w-6 h-6 text-${data.color}-600`} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{type}</p>
                    <h3 className="text-2xl font-bold">{data.count}</h3>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Submissions Table */}
        <Card className="glass-card">
          <div className="p-6 flex justify-between items-center border-b">
            <h2 className="text-xl font-semibold">Recent Submissions</h2>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <Filter className="w-4 h-4" />
              <span>Filter by Task Type</span>
            </button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contributor</TableHead>
                <TableHead>Task Type</TableHead>
                <TableHead>Language</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Quality Score</TableHead>
                <TableHead>Verification Method</TableHead>
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
                    <TableCell>{submission.taskType}</TableCell>
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
                    <TableCell>{submission.verificationMethod}</TableCell>
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
