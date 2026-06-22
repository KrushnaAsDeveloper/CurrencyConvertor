import React , {useEffect, useState}from 'react'
import { ThemeContextProvider } from '../Context/Theme';
function DarkModeButton() {
    const [themeMode, setThemeMode] = useState("light");
  
  useEffect(()=>{
    
    document.querySelector("html").classList.remove("light");
    document.querySelector("html").classList.remove("dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode])
  const lightMode = () =>{
      setThemeMode("light")
    }
    const darkMode = () =>{
      setThemeMode("dark")
    }
  
    const changeThemeValue = (e) =>{
      const checkedStatus = e.currentTarget.checked;
      if(checkedStatus){
        darkMode()
      }
      else{
        lightMode()
      }
    }
  return (
    <ThemeContextProvider value={{ themeMode, lightMode, darkMode }}>


        <input type="checkbox" checked = {themeMode == "dark"} onChange={changeThemeValue} />
    </ThemeContextProvider>
  )
}

export default DarkModeButton