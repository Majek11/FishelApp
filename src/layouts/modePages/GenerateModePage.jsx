import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GenerateQuestion from '../../components/GenerateQuestion'

const GenerateModePage = () => {
  return (
    <div>
          <Routes>
      <Route path="/" element={<GenerateQuestion />} />
        <Route path="/answer-online*" element={<Dashboard/>} />
        <Route path="/print*" element={<Dashboard/>} />
      </Routes>
        {/* <button></button> */}
    </div>
  )
}

export default GenerateModePage