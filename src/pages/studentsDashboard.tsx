import React from 'react';
import { Outlet } from 'react-router-dom';
import PageHeader from '../components/pageHeader';
import SideNav from '../components/SideNav';
function StudentsDashboard() {
    console.log(localStorage.getItem('token'),'at student dashboard component');
    return (
        <div>
            <PageHeader headertext="Rewards Status" />
            <div className='flex'> 
            <SideNav />
            <Outlet />
            </div>
        </div>
    );
}

export default StudentsDashboard;