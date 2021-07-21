import './Home.css'
import CreateDrinksForm from '../CreateDrinks/CreateDrinksForm'
import RecentDrinks from '../RecentDrinks'


const Home = () => {
    return (
        <div>
        <div className='home-div'>
            
            <div className="searchBar">
            <input className="input-search-field" type="text"></input>
            </div>
            <img className="home-background" src= "https://i.ibb.co/6gwK37r/Screen-Shot-2021-07-19-at-4-09-31-PM.png" alt="fontpage"/>
            <div>
                <CreateDrinksForm />
            </div>
            <div>
                <RecentDrinks />
            </div>
        </div>
        </div>
    )
}
export default Home