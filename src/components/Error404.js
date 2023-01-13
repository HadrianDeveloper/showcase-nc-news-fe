import { useNavigate } from 'react-router-dom';
import s from '../css/Error404.module.css';

export default function Error404() {

    const navigate = useNavigate();

    return (
        <section>
            <p>Page not found!</p>
            <button onClick={() => navigate(-1)}>
            <img  
                src='https://img.icons8.com/ios-glyphs/512/circled-left-2.png' 
                alt='go back to previous page'
                className={s.backButton}  
            />
            </button>
            
           
        </section>
    )
};