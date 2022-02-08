import React from 'react';
import './Home.scss';
import cup from './../../images/cropped-rt-logo-2.jpeg';
import SocialLink from '../SocialLink/SocialLink';
import insta from '../../images/insta.png';
import mail from '../../images/mail.png';

const Home : React.FC = props => {
    return (
        <div className={`home`}>
            <div className='home-content flex-row'>
                <img src={cup} className={`cup-image`} alt={'cup image'} />
                <div className='right'>
                    <h1 className={`flex-row`}>
                        Le vin. Les copains.
                    </h1>
                    
                    <p>Les Royal Tannins, c’est quoi ? <br></br>
                        Les RT, ce sont les copains. <br></br>
                        Les copains qui aiment partager, rire, vivre ensemble. <br></br>
                        Les RT, c’est boire du vin, bien manger, se faire plaisir.</p>


                    <p><br></br>Events &amp; Merch à venir… Stay tuned!</p>
                    
                </div>
            </div>
            <div className={`social flex-row`}>
                <SocialLink url={'https://www.instagram.com/royaltannins/'} icon={insta}/>
                <SocialLink url={'mailto:contact@royaltannins.com'} icon={mail}/>
            </div>
        </div>
    );
}

export default Home;