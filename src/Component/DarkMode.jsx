import React, { useEffect, useState } from 'react'
import "../App.css"
const DarkMode = () => {
    //useState store theme light:Dark mood in localstorage
    const [theme,setTheme]=useState(()=>{
        const savedkey=localStorage.getItem("theme");
        return savedkey?savedkey:"light";
    })

    useEffect(()=>{
        localStorage.setItem("theme",theme);
        document.body.className=theme;
    },[theme])

    const toggleButton=()=>{
        setTheme(prevTheme=>(prevTheme==="light"?"dark":"light"));
    }
  return (
    <>
        <button onClick={toggleButton}>Toggle_Theme</button>
    </>
  )
}

export default DarkMode