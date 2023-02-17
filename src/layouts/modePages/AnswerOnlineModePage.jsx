import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GenerateQuestion from ''

const AnswerOnlineModePage = () => {
  return (
    <div>
          <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/dashboard*" element={<Dashboard/>} />
      </Routes>
        <button></button>
    </div>
  )
}

export default AnswerOnlineModePage