import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub,FaFacebook,FaWhatsapp,FaTwitch,FaTwitter,FaInstagram } from "react-icons/fa6";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosel from '../BrandCarosel/BrandCarosel';
import { AuthContex } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {

    const {providerLogin} = useContext(AuthContex);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>

            <div className='mt-3'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook/> Facebook </ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp/> Whatsapp </ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter/> Twitter </ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch/> Twitch </ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaInstagram/> Instagram </ListGroup.Item>
                </ListGroup>
            </div>
            <BrandCarosel></BrandCarosel>
        </div>
    );
};

export default RightSideNav;