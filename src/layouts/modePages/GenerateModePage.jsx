import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GenerateQuestion from '../../components/GenerateQuestion'
import QuestionsPage from '../QuestionsPage'

const GenerateModePage = () => {
  return (
    <div>
          <Routes>
      <Route path="/" element={<GenerateQuestion />} />
        {/* <Route path="/" element={<QuestionsPage/>} /> */}
        <Route path="/questions" element={<QuestionsPage/>} />
        {/* <Route path="/print*" element={<Dashboard/>} /> */}
      </Routes>
        {/* <button></button> */}
    </div>
  )
}

export default GenerateModePage