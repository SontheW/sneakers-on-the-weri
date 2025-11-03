'use client'
import {useEffect, useState} from 'react'
export default function ThemeToggle(){
  const [theme,setTheme]=useState('dark')
  useEffect(()=>{
    const saved = localStorage.getItem('stheweri_theme') || 'dark'
    setTheme(saved)
    if(saved==='light') document.documentElement.setAttribute('data-theme','light')
    else document.documentElement.removeAttribute('data-theme')
  },[])
  function toggle(){
    const now = theme==='dark' ? 'light' : 'dark'
    setTheme(now)
    if(now==='light') document.documentElement.setAttribute('data-theme','light')
    else document.documentElement.removeAttribute('data-theme')
    localStorage.setItem('stheweri_theme', now)
  }
  return (<button className="theme-toggle" onClick={toggle}>{theme==='dark'?'☀️':'🌙'}</button>)
}
