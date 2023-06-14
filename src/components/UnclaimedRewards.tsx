import React from 'react'


const dummyData = [
    {
        name: 'Babatunde Ola',
        amount: 'N10,000',
        date: '10/12/2022',
        time: '10:15am',
        status: 'Pending'
    },
    {
        name: 'Babatunde Ola',
        amount: 'N10,000',
        date: '10/12/2022',
        time: '10:15am',
        status: 'Pending'
    },
    {
        name: 'Babatunde Ola',
        amount: 'N10,000',
        date: '10/12/2022',
        time: '10:15am',
        status: 'Pending'
    },
    {
        name: 'Babatunde Ola',
        amount: 'N10,000',
        date: '10/12/2022',
        time: '10:15am',
        status: 'Pending'
    },
]

const Claimed = (props: any) => {
    return (
        <div>
        <div className="flex justify-between rounded bg-white font-inter h-[100px] px-[3%] mb-[1%]">
            <div className="mt-[6%] text-[14px] text-[#21334F]">
                <div className="font-[600]">{props.name} - {props.amount}</div>
                <div className="font-[400] text-[#C4C4C4]">{props.date}&nbsp;&nbsp;&nbsp;&nbsp;{props.time}</div>
            </div>
            <p className="mt-[6%] text-center rounded font-[700] text-white bg-[#FBBC05] p-2 h-10 w-20 text-[14px]">
                {props.status}
            </p>
            
        </div>
        <hr className='border-10'/>
        </div>
    )
}

const UnclaimedRewards = () => {
  return (
    <div className='mr-[20%]'>
        {dummyData.map((item: any, index: number) => {
            return <Claimed key={index} date={item.date} time={item.time} name={item.name} amount={item.amount} status={item.status}/>
        })}
    </div>
  )
}

export default UnclaimedRewards;