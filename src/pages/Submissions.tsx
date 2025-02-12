
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import StatsCards from "@/components/submissions/StatsCards";
import SubmissionsTable from "@/components/submissions/SubmissionsTable";

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
        <StatsCards />

        {/* Submissions Table */}
        <SubmissionsTable />
      </div>
    </DashboardLayout>
  );
};

export default Submissions;
