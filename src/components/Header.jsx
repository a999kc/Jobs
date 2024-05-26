import React,{useState} from "react";
import CompanyModal from "./CompanyModal";

export default function Header(){
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
      };

    return (
        <>
            <header className='header'>
                
                    <div className='header-left'>
                        <img src={require('./logomain.png')} alt="logo"/>
        
                    </div>
                    <div className='header-right'>
                        <a href="#">
                            <img src={require('./lk.png')} alt="Иконка профиля"/>
                        </a>
                    </div>
            
            </header>
            {showModal && <CompanyModal />}
        </>
    )
}