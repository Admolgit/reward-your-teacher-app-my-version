import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { TbAdjustmentsHorizontal } from 'react-icons/tb'
// import { data } from "../adata/data";
import ListOfTeachers from '../components/listOfTeachers'

function AllTeachers(props: any) {
  const data = props.data
  console.log(props, "TEACHER")
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hidden, setHidden] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [from, setFrom] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [to, setTo] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [position, setPosition] = useState('')
  const [search, setSearch] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [displayedData, setDisplayedData] = useState(data)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const filterSearch = () => {
    let displayedDat = data
      .filter(
        (x: { schools: { from: number }[] }) =>
          x.schools[0].from >= +from ||
          x.schools[1].from >= +from ||
          x.schools[2].from >= +from,
      )
      .filter(
        (x: { schools: { to: number }[] }) =>
          x.schools[0].to <= +to ||
          x.schools[1].to <= +to ||
          x.schools[2].to <= +to,
      )
    if (search === '') {
      setDisplayedData((data: any) => displayedDat)
    } else {
      setDisplayedData((data: any) =>
        displayedDat.filter((x: { Name: string }) => x.Name.match(search)),
      )
    }
  }
  return (
    <div className="ml-[17%] mr-[10%] w-[70%] pl-[8rem] relative z-0">
      <h1 className="font-[600] text-[32px] leading-[39px] mb-[3rem] font-inter text-[#03435f] mt-[40px]">
        My DashBoard
      </h1>
      <div className="flex gap-0 mb-[3rem] items-center">
        <input
          className="w-[80%] px-[16px] border-solid py-[16px] border-[1px] relative placeholder:pl-[1rem] border-[#d9d9d9]  h-[40px]"
          placeholder="search"
          onChange={(e) => setSearch((search) => e.target.value)}
          value={search}
          type="search"
        />
        <AiOutlineSearch className="text-[1.5rem] text-slate-400 -ml-[3rem] z-10" />
        <button
          onClick={() => setHidden((hidden) => (hidden === '' ? 'hidden' : ''))}
          className="flex rounded items-center justify-between ml-[8rem] border-[1px] border-[#d9d9d9] h-[40px]  text-[#03435f] text-16px] font-inter leading-[19px] font-[400] p-[1rem] w-[7rem] pt-3"
        >
          {' '}
          Filter{' '}
          <TbAdjustmentsHorizontal className="text-[1.5rem] rotate-180 text-[#03435F]" />
        </button>
      </div>
      <ListOfTeachers />
    </div>
  )
}

export default AllTeachers
