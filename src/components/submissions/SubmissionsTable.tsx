
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Filter, User, Check, X, Clock } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Submission {
  id: number;
  contributor: string;
  taskType: string;
  language: string;
  duration: string;
  status: "verified" | "pending" | "rejected";
  submitted: string;
  quality: string;
  verificationMethod: string;
}

const submissions: Submission[] = [
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
    taskType: "Basic Translation",
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
    taskType: "Cultural & Idiomatic Context",
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
    taskType: "Dialect & Accent Annotation",
    language: "Min Chinese",
    duration: "2:50",
    status: "pending",
    submitted: "30m ago",
    quality: "pending",
    verificationMethod: "Expert Panel",
  },
];

const getStatusColor = (status: string): string => {
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

const getStatusIcon = (status: string): LucideIcon => {
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

const SubmissionsTable = () => {
  return (
    <div className="rounded-lg border bg-card">
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
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default SubmissionsTable;
