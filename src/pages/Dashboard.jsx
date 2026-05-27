import DashboardLayout from '../layouts/DashboardLayout'
import StatsCard from '../components/dashboard/StatsCard'

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold mb-5">
          Dashboard Analytics
        </h1>

        <div className="grid grid-cols-4 gap-5">
          <StatsCard title="Users" value="1,250" />
          <StatsCard title="Revenue" value="$52K" />
          <StatsCard title="Orders" value="320" />
          <StatsCard title="Products" value="85" />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard