import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import Button from '@mui/material/Button';
import './App.scss';

    export default function App() {

      return (
            <div className='App'>
                <h1 className="text-3xl font-bold underline">Game Jams Board!</h1>
                <Navbar />
                <Content />
                <Footer />
                <Button variant="contained"
                    onClick={() => {
                      alert('clicked');
                    }}
                  > Hello Julien!</Button>
            </div>
        )
    }
