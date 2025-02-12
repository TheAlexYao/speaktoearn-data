
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CreditCard, DollarSign, Calendar, ChevronDown, Download, Coins, Zap } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const blockchainTransactions = [
  {
    id: "1",
    hash: "0x7829a3f52d2c9483d3d35c3f807206f026702fd3cbb8f125c21b0875881957c1",
    type: "Payment for Voice Recording",
    amount: "5.2",
    to: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    status: "Confirmed",
    block: "18245632",
    time: "2 minutes ago",
  },
  {
    id: "2",
    hash: "0x9e31b4d3c79b4b32ebf4c4c42a412720f843f1b91756e4c19aa39e3619c3e28b",
    type: "Payment for Translation",
    amount: "3.8",
    to: "0x1234dF67890AbCdEF1234567890abcdef12345678",
    status: "Confirmed",
    block: "18245629",
    time: "15 minutes ago",
  },
  {
    id: "3",
    hash: "0x3f4a825d6e0c4c1a99b87e34c1c2f3e4d5e6f708192a3b4c5d6e7f8a9b0c1d2e",
    type: "Batch Payment (5 submissions)",
    amount: "24.5",
    to: "0x9876fedcBA9876543210FEDCba9876543210fedc",
    status: "Confirmed",
    block: "18245621",
    time: "45 minutes ago",
  },
];

const gasStats = {
  averageGasUsed: "75,000",
  averageGasPrice: "0.5 Gwei",
  transactionSpeed: "< 5 seconds",
  averageCost: "~0.0000375 CELO",
};

const paymentStats = {
  totalPayments: "873",
  recipients: "126",
  averagePayment: "6.93",
  largestPayment: "24.5",
  smallestPayment: "3.2",
};

const contractInfo = {
  address: "0x4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3",
  methods: ["payForSubmission()", "batchPayment()", "updateContributorStatus()"],
};

const Payments = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Payments</h1>
          <p className="text-gray-600 mt-2">
            Track your blockchain payments and transaction history
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Total Payments Today
              </CardTitle>
              <DollarSign className="w-4 h-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{paymentStats.totalPayments} cUSD</div>
              <p className="text-xs text-gray-500 mt-1">{paymentStats.recipients} recipients</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Average Payment
              </CardTitle>
              <Coins className="w-4 h-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{paymentStats.averagePayment} cUSD</div>
              <p className="text-xs text-gray-500 mt-1">Range: {paymentStats.smallestPayment} - {paymentStats.largestPayment} cUSD</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Gas Statistics
              </CardTitle>
              <Zap className="w-4 h-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{gasStats.averageGasUsed}</div>
              <p className="text-xs text-gray-500 mt-1">Avg. gas used per tx</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Contract
              </CardTitle>
              <CreditCard className="w-4 h-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-sm font-medium truncate">{contractInfo.address}</div>
              <p className="text-xs text-gray-500 mt-1">{contractInfo.methods.length} methods called</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Transactions</CardTitle>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-900">
                <span>Last 24h</span>
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
                  <TableHead>Hash</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount (cUSD)</TableHead>
                  <TableHead>Recipient</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blockchainTransactions.map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell className="font-mono text-sm">
                      {tx.hash.slice(0, 8)}...{tx.hash.slice(-6)}
                    </TableCell>
                    <TableCell>{tx.type}</TableCell>
                    <TableCell>{tx.amount}</TableCell>
                    <TableCell className="font-mono text-sm">
                      {tx.to.slice(0, 6)}...{tx.to.slice(-4)}
                    </TableCell>
                    <TableCell>{tx.time}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {tx.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contract Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Contract Address</p>
                  <p className="font-mono text-sm mt-1">{contractInfo.address}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Latest Methods Called</p>
                  <div className="space-y-2 mt-2">
                    {contractInfo.methods.map((method, index) => (
                      <div key={index} className="text-sm font-mono bg-gray-50 p-2 rounded">
                        {method}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Network Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Average Gas Used</span>
                  <span className="font-mono">{gasStats.averageGasUsed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Average Gas Price</span>
                  <span className="font-mono">{gasStats.averageGasPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Transaction Speed</span>
                  <span className="font-mono">{gasStats.transactionSpeed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Average Cost/Tx</span>
                  <span className="font-mono">{gasStats.averageCost}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Payments;

