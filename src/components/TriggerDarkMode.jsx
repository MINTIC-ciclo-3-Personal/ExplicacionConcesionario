import React from 'react'
import { useDarkMode } from 'context/darkMode'

const TriggerDarkMode = () => {
    const { darkMode, setDarkMode } = useDarkMode();
    return (
        <div>
            <button
                onClick={() => { setDarkMode(!darkMode) }}
            >
                {darkMode ? 'Desactivar' : 'Activar'} modo sexo
            </button>
        </div>
    )
}

export default TriggerDarkMode