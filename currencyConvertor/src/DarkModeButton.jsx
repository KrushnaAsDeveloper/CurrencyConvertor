import React , {useEffect, useState}from 'react'
import {ThemeContextProvider} from "../Context/Theme"
function DarkModeButton() {
    const [themeMode, setThemeMode] = useState("light");
  function lightMode() {
    setThemeMode("light")
  }
  function darkMode() {
    setThemeMode("dark")
  }

  function changeThemeValue(e){
    const checkboxStatus = e.currentTarget.checked;
    if(checkboxStatus){
      darkMode()
    }
    else{
      lightMode()
    }
  }
  useEffect(()=>{
    
    document.querySelector("html").classList.remove("light");
    document.querySelector("html").classList.remove("dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode])
  return (
    <ThemeContextProvider value={{ themeMode, lightMode, darkMode }}>


        <input type="checkbox" checked = {themeMode == "dark"} onChange={changeThemeValue} />
    </ThemeContextProvider>
  )
}

export default DarkModeButton