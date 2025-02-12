
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CreditCard, DollarSign, Calendar, ChevronDown, Download } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const paymentHistory = [
  {
    id: "1",
    date: "2024-03-15",
    amount: "245.50",
    status: "Completed",
    type: "Voice Recording",
    submissions: 12,
  },
  {
    id: "2",
    date: "2024-03-10",
    amount: "189.75",
    status: "Completed",
    type: "Translation",
    submissions: 8,
  },
  {
    id: "3",
    date: "2024-03-05",
    amount: "322.25",
    status: "Completed",
    type: "Voice Recording",
    submissions: 15,
  },
  {
    id: "4",
    date: "2024-03-01",
    amount: "167.00",
    status: "Completed",
    type: "Translation",
    submissions: 7,
  },
];

const Payments = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Payments</h1>
          <p className="text-gray-600 mt-2">
            Manage your earnings and payment methods
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Total Earnings
              </CardTitle>
              <DollarSign className="w-4 h-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$924.50</div>
              <p className="text-xs text-gray-500 mt-1">+12.5% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Pending Payments
              </CardTitle>
              <Calendar className="w-4 h-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$156.25</div>
              <p className="text-xs text-gray-500 mt-1">Will be processed in 2 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Payment Method
              </CardTitle>
              <CreditCard className="w-4 h-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>CC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">•••• 4242</p>
                    <p className="text-xs text-gray-500">Expires 04/25</p>
                  </div>
                </div>
                <button className="text-sm text-primary hover:underline">
                  Change
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Payment History</CardTitle>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-900">
                <span>This Month</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-900">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Submissions</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paymentHistory.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell>{new Date(payment.date).toLocaleDateString()}</TableCell>
                    <TableCell>{payment.type}</TableCell>
                    <TableCell>{payment.submissions}</TableCell>
                    <TableCell>${payment.amount}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {payment.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Payments;
