import { useDarkMode } from 'context/darkMode'
import React from 'react'

const Admin = () => {
  const {darkMode}=useDarkMode();
  return (
    <div className={`flex h-full w-full ${darkMode ? "bg-gray-900":"bg-gray-50"}`}>
        Admin
    </div>
  )
}

export default Admin