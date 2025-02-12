
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Star, Users } from "lucide-react";

const ContributorStats = () => (
  <div className="grid gap-4 md:grid-cols-3 mb-8">
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Contributors</CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">847</div>
        <p className="text-xs text-muted-foreground">
          Active across 5 languages
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
    image: ""
  },
  {
    name: "Rahul P.",
    language: "Bengali",
    submissions: 89,
    acceptanceRate: "91%",
    earned: "342 cUSD",
    speciality: "Translations",
    image: ""
  },
  {
    name: "Ade O.",
    language: "Yoruba",
    submissions: 63,
    acceptanceRate: "88%",
    earned: "187 cUSD",
    speciality: "Voice + Translation",
    image: ""
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
      </div>
    </DashboardLayout>
  );
};

export default Contributors;
