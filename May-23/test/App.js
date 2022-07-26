const App =() =>{
   const [isDark, setDark]= React.useState(false);

   const toggleTheme =() => {
       if(isDark) { // current it is dark mode
           setDark(false)  // make it is light mode
       }else {    // otherwise . currently dark
           setDark(true) // make it is dark mode
       }
    

   }
    
    return (
        <div>
            <button onClick ={toggleTheme}> There Switch</button>
            <Container darkMode ={isDark} />
        </div>
    )
}