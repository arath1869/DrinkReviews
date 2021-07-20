import './Home.css'
import LoginFormModal from '../LoginFormModal/index'
import DemoLogin from '../DemoLogin'

const Home = () => {
    return (
        <div className='home-div'>
            <div className="logdemo">
                <LoginFormModal />
                <DemoLogin />
            </div>
            <img className="home-background" src= "https://i.ibb.co/6gwK37r/Screen-Shot-2021-07-19-at-4-09-31-PM.png" alt="fontpage"/>
            <div>
              What's Your Drink?
            </div>
        </div>
    )
}
export default Home