import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { useToasts } from 'react-toast-notifications';
import SendRewardProfile from './SendRewardProfile';
import SendReward from './SendReward';

// types for list of teachers
interface ListOfTeachersProps {
  fullName: string;
  email: string;
  school: string;
  position: string;
  startYear: string;
  endYear: string;
  schoolType: [string]
  id?: string;
}

const ListOfTeachers = () => {
  const [listOfTeachers, setListOfTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showSendReward, setShowSendReward] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [id, setId] = useState('');
  const { addToast } = useToasts();
  // *******You need the lines below to show profile stuffs***********
  //Now check your commit again and see if you need to change something

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [profile, setProfile] = useState({});
  // const url = `${process.env.REACT_APP_BASE_URL}`
  const getTeacherList = useCallback(async () => {
    try {
      const teachers = await axios.get(
        `${
          process.env.REACT_APP_BASE_URL
        }/teachers/teachers?page=${1}perPage=${10}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        },
      );
      if (teachers.data) {
        setIsLoading(false);
        setListOfTeachers(teachers.data);
      }
    } catch (err: any) {
      addToast(
        err?.response?.data?.message || err?.message || 'error fetching data',
        { appearance: 'error' },
      );
    }
  }, [addToast]);

  useEffect(() => {
    getTeacherList();
  }, [getTeacherList]);

  console.log(listOfTeachers, "LIST")

  // when no data is loaded, show loading
  if (isLoading) {
    return <div className="text-[18px] justify-items-center">Loading...</div>;
  }

  // write a function that paginate number teachers to show per page
  const paginate = (pageNumber: number) => {
    const startIndex = (pageNumber - 1) * 10;
    const endIndex = pageNumber * 10;
    return listOfTeachers.length > 0
      ? listOfTeachers.slice(startIndex, endIndex)
      : [];
  };

  // implement the pagination function
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const paginatedTeachers = paginate(currentPage);
  // Define Pagination
  const Pagination: any = () => {
    const pageNumbers: number[] = [];
    for (let i = 1; i <= Math.ceil(listOfTeachers.length / 5); i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((number) => (
      <li
        key={number}
        className="page-item list-none ml-[20px] relative bottom-[10%] text-[#03435F] mt-[3rem] text-[18px] cursor-pointer"
      >
        <button
          className="page-link fixed bottom-2 active:bg-green-600 pl-[5px] pr-[5px]"
          onClick={() => handlePageChange(number)}
        >
          {number}
        </button>
      </li>
    ));
  };

  const handleClick = (id: string) => {
    setShowModal(true);
    setId(id);
    getProfile(id.toString());
  };
  // useEffect(() => {
  //   handleClick(id)
  // }, [showModal, id]);

  const handleClose = () => {
    setShowModal(false);
  };

  const getProfile: any = async (id: string) => {
    try {
      const teacherProfile = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/teachers/teacher-profile?teacherId=${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        },
      );

      if (teacherProfile.data) {
        setIsLoadingProfile(false);
        console.log(teacherProfile.data, 'In List');
        setProfile(teacherProfile.data.teacher);
      }
    } catch (err: any) {
      addToast(
        err?.response?.data?.message || err?.message || 'error fetching data',
        { appearance: 'error' },
      );
    }
  };

  console.log(profile, 'PROFILE');

  return (
    <div>
      <table className="text-[#03435F]">
        <thead>
          <tr className="w-[900px] grid grid-cols-4 gap-[7%] bg-gray-100 p-[1%] text-[16px] text-[#03435F] font-[400] font-inter">
            <th className="text-start">Name</th>
            <th className="text-start">School</th>
            <th className="text-start">Position</th>
            <th className="text-start">Period of teaching</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            paginatedTeachers.length > 0 &&
            paginatedTeachers.map(
              (paginatedTeacher: ListOfTeachersProps, idx) => {
                return (
                  <tr
                    onClick={() =>
                      handleClick(
                        paginatedTeacher.id ? paginatedTeacher.id : '',
                      )
                    }
                    className="grid grid-cols-4 gap-[7%] cursor-pointer p-[1%] text-[14px] text-[#03435F] font-[400] font-inter"
                    key={idx}
                  >
                    <td>{paginatedTeacher.fullName}</td>
                    <td>{paginatedTeacher.school}</td>
                    <td>{paginatedTeacher.schoolType}</td>
                    <td>
                      {paginatedTeacher.startYear} - {paginatedTeacher.endYear}
                    </td>
                  </tr>
                );
              },
            )}
        </tbody>
      </table>

      <div className="flex justify-center">
        <Pagination />
      </div>
      {showModal && (
        <SendRewardProfile
          profile={profile}
          close={handleClose}
          showSendReward={setShowSendReward}
        />
      )}
      {showSendReward && <SendReward close={setShowSendReward} />}
    </div>
  );
};

export default ListOfTeachers;
