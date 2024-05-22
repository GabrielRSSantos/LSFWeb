import './home.css';
import Header from '../../components/Header';

export default function Home() {
    localStorage.setItem('isLogged', "TokenDeExemplo");

    return (
        <div>
            <p>TAE</p>
        </div>
    )
}