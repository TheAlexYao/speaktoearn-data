
import { Card } from "@/components/ui/card";
import { 
  FileCheck,
  BookOpenText,
  Languages,
  Timer,
  User,
  Book,
  Speech,
  FileX,
  Pencil,
  BookOpen,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface TaskType {
  count: number;
  icon: LucideIcon;
  color: string;
}

interface TaskTypes {
  [key: string]: TaskType;
}

export const taskTypes: TaskTypes = {
  "Basic Translation": { count: 247, icon: Languages, color: "green" },
  "Speech Recording": { count: 189, icon: FileCheck, color: "blue" },
  "Orthographic Transcription": { count: 156, icon: BookOpenText, color: "purple" },
  "Phonetic Transcription": { count: 124, icon: Pencil, color: "pink" },
  "Dialect & Accent Annotation": { count: 98, icon: FileX, color: "orange" },
  "Tone & Emotion Annotation": { count: 112, icon: Speech, color: "red" },
  "Cultural & Idiomatic Context": { count: 92, icon: User, color: "yellow" },
  "Code-Switching/Loanword": { count: 76, icon: Book, color: "indigo" },
  "Peer Review & QA": { count: 145, icon: BookOpen, color: "cyan" },
};

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(taskTypes).map(([type, data]) => {
        const IconComponent = data.icon;
        return (
          <Card key={type} className="p-6 glass-card hover:shadow-lg transition-shadow">
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
  );
};

export default StatsCards;
