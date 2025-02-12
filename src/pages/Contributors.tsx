
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Globe, Mic, ScrollText, Star, Users } from "lucide-react";

const LanguageCard = ({ language }: { language: any }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{language.name}</CardTitle>
      <Globe className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">Voice Recordings:</span>
          <span className="font-medium">{language.voiceRecordings}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">Translations:</span>
          <span className="font-medium">{language.translations}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">Words Collected:</span>
          <span className="font-medium">{language.wordsCollected.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">Active Contributors:</span>
          <span className="font-medium">{language.activeContributors}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TaskCategoryCard = ({ category }: { category: any }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{category.name}</CardTitle>
      {category.type === "voice" ? (
        <Mic className="h-4 w-4 text-muted-foreground" />
      ) : (
        <ScrollText className="h-4 w-4 text-muted-foreground" />
      )}
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
      <div className="space-y-1">
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">Reward Range:</span>
          <span className="font-medium">{category.reward}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

const ContributorStats = () => (
  <div className="grid gap-4 md:grid-cols-4 mb-8">
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Contributors</CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">847</div>
        <p className="text-xs text-muted-foreground">
          Across 5 languages
        </p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Regular Contributors</CardTitle>
        <Star className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">276</div>
        <p className="text-xs text-muted-foreground">
          51-200 submissions
        </p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Expert Contributors</CardTitle>
        <Star className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">89</div>
        <p className="text-xs text-muted-foreground">
          201-500 submissions
        </p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Master Contributors</CardTitle>
        <Award className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">24</div>
        <p className="text-xs text-muted-foreground">
          500+ submissions
        </p>
      </CardContent>
    </Card>
  </div>
);

const ContributorCard = ({ contributor }: { contributor: any }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardContent className="pt-6">
      <div className="flex items-start space-x-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={contributor.image} />
          <AvatarFallback>{contributor.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h3 className="font-medium leading-none">
            {contributor.name}
            <span className="ml-2 text-sm text-muted-foreground">[{contributor.language}]</span>
          </h3>
          <p className="text-sm text-muted-foreground">
            {contributor.speciality}
          </p>
          <div className="flex items-center space-x-4 text-sm">
            <span>{contributor.submissions} submissions</span>
            <span>{contributor.acceptanceRate} acceptance</span>
          </div>
          <div className="text-sm text-success">
            Earned: {contributor.earned}
          </div>
          <div className="text-xs text-muted-foreground">
            Joined {contributor.joined}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const recentContributors = [
  {
    name: "Sarah M.",
    language: "Swahili",
    submissions: 47,
    acceptanceRate: "94%",
    earned: "124 cUSD",
    speciality: "Voice recordings",
    joined: "3 weeks ago",
    image: ""
  },
  {
    name: "Rahul P.",
    language: "Bengali",
    submissions: 89,
    acceptanceRate: "91%",
    earned: "342 cUSD",
    speciality: "Translations",
    joined: "1 month ago",
    image: ""
  },
  {
    name: "Ade O.",
    language: "Yoruba",
    submissions: 63,
    acceptanceRate: "88%",
    earned: "187 cUSD",
    speciality: "Voice + Translation",
    joined: "2 weeks ago",
    image: ""
  }
];

const languages = [
  {
    name: "Swahili",
    voiceRecordings: 876,
    translations: 642,
    wordsCollected: 24567,
    activeContributors: 89
  },
  {
    name: "Bengali",
    voiceRecordings: 754,
    translations: 892,
    wordsCollected: 31234,
    activeContributors: 76
  },
  {
    name: "Yoruba",
    voiceRecordings: 567,
    translations: 489,
    wordsCollected: 18987,
    activeContributors: 54
  }
];

const taskCategories = [
  {
    name: "Daily Conversations",
    type: "voice",
    description: "Record 2-3 minutes of everyday conversations",
    reward: "5-8 cUSD"
  },
  {
    name: "Medical Terms",
    type: "translation",
    description: "Translate 200-300 words of medical terminology",
    reward: "5-7 cUSD"
  },
  {
    name: "Story Narration",
    type: "voice",
    description: "Record 3-5 minutes of story narration",
    reward: "7-12 cUSD"
  },
  {
    name: "Cultural Stories",
    type: "translation",
    description: "Translate 300-400 words of cultural content",
    reward: "7-10 cUSD"
  }
];

const Contributors = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Contributors</h1>
          <p className="text-gray-600 mt-2">
            Our global community of language contributors
          </p>
        </div>

        <ContributorStats />

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Top Contributors</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentContributors.map((contributor, index) => (
              <ContributorCard key={index} contributor={contributor} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Language Statistics</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {languages.map((language, index) => (
              <LanguageCard key={index} language={language} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Available Tasks</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {taskCategories.map((category, index) => (
              <TaskCategoryCard key={index} category={category} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Contributors;
