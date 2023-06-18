import { useState, useEffect, useCallback } from 'react';
import { useToasts } from 'react-toast-notifications';
import SendRewardProfile from './SendRewardProfile';
import SendReward from './SendReward';
import { listAllTeachers, listProfile } from '../customApi/teacherApi';
import isAuthenticated from '../authProvider/auth';
import Pagination from '../Pagination/Pagination';
import { Paginate } from '../Pagination/Paginate';

// types for list of teachers
interface ListOfTeachersProps {
  fullName: string;
  email: string;
  school: string;
  position: string;
  startYear: string;
  endYear: string;
  schoolType: [string];
  id?: string;
}

const ListOfTeachers = () => {
  const [listOfTeachers, setListOfTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showSendReward, setShowSendReward] = useState(false);

  const [count] = useState(8);

  let dataCount = listOfTeachers.length;

  const Datas = Paginate(listOfTeachers, currentPage, count);

  const handleChange = (page: number) => {
    setCurrentPage(page);
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [id, setId] = useState('');
  const { addToast } = useToasts();
  const { token } = isAuthenticated();
  // *******You need the lines below to show profile stuffs***********
  //Now check your commit again and see if you need to change something

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [profile, setProfile] = useState({});
  const tok = token.accessToken;

  const getTeacherList = useCallback(async () => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/teachers/teachers`;

      const teachers = await listAllTeachers(url, tok);

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

  const handleClick = (id: string) => {
    setShowModal(true);
    setId(id);
    getProfile(id.toString());
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const getProfile: any = async (id: string) => {
    try {
      const tok = token.accessToken;
      const url = `${process.env.REACT_APP_BASE_URL}/teachers/teacher-profile?teacherId=${id}`;

      const teacherProfile = await listProfile(url, tok);

      if (teacherProfile.data) {
        setIsLoadingProfile(false);
        setProfile(teacherProfile.data.teacher);
      }
    } catch (err: any) {
      addToast(
        err?.response?.data?.message || err?.message || 'error fetching data',
        { appearance: 'error' },
      );
    }
  };

  console.log(Datas)

  return (
    <>
      <div>
        <table className="text-[#03435F]">
          <thead>
            <tr className="w-[1000px] grid grid-cols-5 gap-[7%] bg-gray-100 p-[1%] text-[16px] text-[#03435F] font-[400] font-inter">
              <th className="text-start">Name</th>
              <th className="text-start">School</th>
              <th className="text-start">Position</th>
              <th className="text-start">School Type</th>
              <th className="text-start">Period of teaching</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              Datas.length > 0 &&
              Datas.map((paginatedTeacher: ListOfTeachersProps) => {
                return (
                  <tr
                    onClick={() =>
                      handleClick(
                        paginatedTeacher.id ? paginatedTeacher.id : '',
                      )
                    }
                    className="grid grid-cols-5 gap-[7%] cursor-pointer p-[1%] text-[14px] text-[#03435F] font-[400] font-inter"
                    key={paginatedTeacher.id}
                  >
                    <td>{paginatedTeacher.fullName}</td>
                    <td>{paginatedTeacher.school}</td>
                    <td>{paginatedTeacher.position}</td>
                    <td>{paginatedTeacher.schoolType}</td>
                    <td>
                      {paginatedTeacher.startYear} - {paginatedTeacher.endYear}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {showModal && (
          <SendRewardProfile
            profile={profile}
            close={handleClose}
            showSendReward={setShowSendReward}
          />
        )}
        {showSendReward && <SendReward close={setShowSendReward} />}
      </div>
      <div className="z-10">
        <Pagination
          itemsCount={dataCount}
          pageSize={count}
          currentPage={currentPage}
          onPageChange={handleChange}
        />
      </div>
    </>
  );
};

export default ListOfTeachers;
