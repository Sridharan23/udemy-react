import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import Sale from "./components/Sale-img"
import Recommended from "./components/Recommended"
import Topics from "./components/Topics"
import Popular from "./components/popular"
import Footer from "./components/Footer"

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <Sale></Sale>
            <Recommended></Recommended>
            <Topics></Topics>
            <Popular></Popular>
            <Footer></Footer>
        </div>
    )


}



export default App