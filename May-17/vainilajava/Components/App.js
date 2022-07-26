function App() {
    // return " Navigation() + Content()"   // if you used "" than whatever you write print
    return `
    ${Navigation()} 
    ${Content()}
    <footer>
    <h5>this is a footer </h5>
    ${Button()} 
    </footer>
    `;
  
}