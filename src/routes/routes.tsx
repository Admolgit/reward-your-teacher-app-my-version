import {
  BrowserRouter as Router,
  Routes as RouterCover,
  Route,
} from 'react-router-dom'
import AuthState from '../context/AuthState'
import { ToastContainer } from 'react-toastify'

import StudentsDashboard from '../pages/studentsDashboard'
import TeachersDashboard from '../pages/TeachersDashboard'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import TeachersSignup from '../pages/TeachersSignup'
import TeachersProfile from '../pages/TeachersProfile'
import Landing from '../pages/Landing'
import Notifications from '../components/Notifications'
import { TeacherNotification } from '../components/TeacherNotification'
import AllTeachers from '../components/AllTeachers'
import Overview from '../components/Overview'
import TeacherOverview from '../components/TeacherOverview'
import { Messages } from '../components/Messages'
import { AddMoney } from '../components/AddMoney'
import RewardStatus from '../components/RewardStatus'
import DashboardHome from '../pages/DashboardHome'
import { VerifyPayment } from '../components/VerifyPayment'
import 'react-toastify/dist/ReactToastify.css'

export const Routes = () => {
  return (
    <Router>
      <AuthState>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <RouterCover>
          <Route path="/dashboard" element={<DashboardHome />} />

          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/students-dashboard" element={<StudentsDashboard />}>
            <Route
              path="/students-dashboard/all-teachers"
              element={<AllTeachers />}
            />
            <Route index element={<Overview />} />
            <Route
              path="/students-dashboard/rewards-status"
              element={<RewardStatus />}
            />
            <Route
              path="/students-dashboard/notifications"
              element={<Notifications />}
            />
          </Route>
          <Route path="/teacher-dashboard" element={<TeachersDashboard />}>
            <Route
              path="/teacher-dashboard/notifications"
              element={<TeacherNotification />}
            />
            <Route index element={<TeacherOverview />} />
            <Route path="/teacher-dashboard/messages" element={<Messages />} />
            <Route
              path="/teacher-dashboard/profile"
              element={<TeachersProfile />}
            />
          </Route>
          {/* <Route path="/teacher-signin" element={<TeachersLogin />} /> */}
          <Route path="/teacher-signup" element={<TeachersSignup />} />
          <Route path="/fund-wallet" element={<AddMoney />} />
          <Route path="/verify-payment" element={<VerifyPayment />} />
        </RouterCover>
      </AuthState>
    </Router>
  )
}
export default Routes
