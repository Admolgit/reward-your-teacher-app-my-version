import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiPost } from '../utils/apiHelpers'
import TeacherSignupFormOne, {
  FormOneType,
} from '../components/TeacherSignupFormOne'
import TeacherSignupFormTwo, {
  FormTwoType,
} from '../components/TeacherSignupFormTwo'
import 'antd/dist/antd.css';
import { useToasts } from 'react-toast-notifications';

function TeachersSignup() {
  const [step, setStep] = useState<'one' | 'two'>('one')
  const [data, setData] = useState<FormOneType | FormTwoType | null>(null)
  const navigate = useNavigate()
  const { addToast } = useToasts()

  const handleContinue = (formOneData: FormOneType): void => {
    setData((data) => ({ ...data, ...formOneData }))
    setStep('two')
  }

  const handleSubmit = async (formTwoData: FormTwoType) => {
    try {
      setData({ ...data, ...formTwoData })
      const [
        startYearString,
        endYearString,
      ] = formTwoData.yearsOfTeaching.split('-')

      const reqData = {
        ...data,
        startYear: Number(startYearString),
        endYear: Number(endYearString),
      }

      const response = await apiPost('/auth/register-teacher', reqData, {})
      
      if (response.data) {
        addToast('Teacher Signed up Successfully', { appearance: 'success' })
        navigate('/signin?type=teacher')
      } else {
        addToast(response.error?.data?.message, { appearance: 'error' })
        navigate('/teacher-signup')
      }
    } catch (err:any) {
      addToast(err?.response?.data?.message || err?.message || 'no response', {
        appearance: 'error',
      })
    }
  }

  if (step === 'one') {
    return <TeacherSignupFormOne onContinue={handleContinue} />
  } else {
    return <TeacherSignupFormTwo onSubmit={handleSubmit} />
  }
}
export default TeachersSignup
