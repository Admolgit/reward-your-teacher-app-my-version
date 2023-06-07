import React from 'react';
import { Outlet } from 'react-router-dom';
import PageHeader from '../components/pageHeader';
import TeacherSideNav from '../components/TeacherSideNav';

function TeachersDashboard() {
    return (
        <div>
            <PageHeader/>
            <div className='flex'> 
            <TeacherSideNav/>
            <Outlet />
            </div>
        </div>
    );
}

export default TeachersDashboard;