import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobal } from '../../providers/global-provider';



const SideBar: React.FC = () => {
  const { logginedUser, getLogginedUser } = useGlobal();
  const navigate = useNavigate();

  useEffect(() => {
    const ele = localStorage.getItem('token');
    if ((ele == null || ele == '') && !window.location.href.includes('/login')) {
      window.location.href = '/login';
    }
  }, []);

  useEffect(() => {
    const style1 = document.getElementById('style-ar-direction');
    const style2 = document.getElementById('bootstrap-ar-direction');
    style1?.setAttribute('href', '');
    style2?.setAttribute('href', '');
  }, []);

  const Exit = () => {
    localStorage.clear();
    window.location.href = '/login';
  };




  useEffect(() => {
    (async () => {
      await getLogginedUser();
    })();
  }, []);

  return (
    <nav id='sidebar' className='SideBarMenu main-scroll'>
      <div className='scroll-bar-wrap'>
        <div className='sidebar-sticky pt-3 scroll-box'>
          <div className='card User_Card'>
            <div className='card-header'>
            <div style={{color:"red"}}>
              <a onClick={Exit} role='menuitem' className='logout'>
              <i className='fas fa-power-off'></i> Signout
              </a>
            </div>
            </div>
            <div onClick={() => navigate('/personal-profile')}>
              <div className='person_image'>
                <img src={'/Assets/img/Members/main-user.png'} alt='UserImage' />
              </div>

              <div className='card-body'>
                <div>
                  <h1>{logginedUser?.fullName}</h1>
                  <h1>{localStorage.getItem("role")}</h1>

                </div>
              </div>
            </div>
          </div>

          <ul className='nav flex-column NavMenuSideBar' id='MenuNav'>
            <li className='nav-item'>
              <Link to={{ pathname: '/profile' }}>
                <i className='fa fa-home'></i>
                {'Profile'}
              </Link>
              <Link to={{ pathname: '/users' }}>
                <i className="fa fa-users"></i>
                {'Users'}
              </Link>
            </li>
          </ul>
        </div>
        <div className='cover-bar'></div>
      </div>
    </nav>
  );
};

export default SideBar;
