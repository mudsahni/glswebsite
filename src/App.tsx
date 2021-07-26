import React from 'react';
import logo from './logo.svg';
import { Image } from 'semantic-ui-react'
import './App.css';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { footerContent } from './content/footer';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Products } from './pages/Products';

function App() {

  const [runLogoAnimation, setRunLogoAnimation] = React.useState<boolean>(true)

  const checkIfLogoAnimationNeedsToRun = () => {
    if (localStorage.getItem('lastEntry') !== null) {
      const currentDateTime = new Date().toISOString()
      const storedDateTime: string = localStorage.getItem('lastEntry') || ""
      const difference = Math.abs((Date.parse(currentDateTime) - Date.parse(storedDateTime)) / (1000 * 60 * 60))
      if (difference < 60) {
        setRunLogoAnimation(false)
        localStorage.setItem('lastEntry', new Date().toISOString())
        return false
      } else {
        setRunLogoAnimation(true)
        localStorage.setItem('lastEntry', new Date().toISOString())
        return true
      }
    } else {
      localStorage.setItem('lastEntry', new Date().toISOString())
      return true
    }
  }

  React.useEffect(() => {
    checkIfLogoAnimationNeedsToRun()
  }, [])

  React.useEffect(() => {

    const logo: NodeListOf<SVGPathElement> = document.querySelectorAll("#logo path")
    for (let i = 0; i < logo.length; i++) {
      console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
    }

  })
  return (
    <Router>

      <main>
        <Nav />
        <Switch>
          <Route path="/" exact={true} component={() => <Home runLogoAnimation={true} />} />
          <Route path="/products" exact={true} component={() => <Products />} />

          {/* <Home runLogoAnimation={true} /> */}
        </Switch>
        <Footer footerContent={footerContent} />

      </main >
    </Router>
  );
}

export default App;
