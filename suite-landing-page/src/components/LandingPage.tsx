import '../css/LandingPage.css'
import Logo from '../assets/images/logo.svg'

function LandingPage()
{
    return(
        <div className="landing-page">
            <div className='navbar'>
                <img src={Logo}></img>
                <div className='navbar-button'>
                    Request Beta Access
                </div>
            </div>
        </div>
    );
}

export default LandingPage;