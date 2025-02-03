import './App.css';
import { useEffect } from "react";
import image1 from './img/image1.jpg';
import image2 from './img/image2.jpg';
const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tg.ready();
    }, []);

    const onClose = () => {
        tg.close();
    };

    return (
        <div className="App">
            <button onClick={onClose}>Закрыть</button>
            <h1 className="main-title">Сборник курсов по стилизации одежды от Vestiary</h1>
            <div className="course-container">
                <div className="course-list">
                    <div className="course-card">
                        {/* ... (содержимое карточек курсов остается без изменений) ... */}
                    </div>
                    {/* ... (остальные карточки курсов) ... */}
                </div>
                <div className="image-container">
                    <img src={image1} alt="Первое изображение" />
                    <img src={image2} alt="Второе изображение" />
                </div>
            </div>
        </div>
    );
}

export default App;