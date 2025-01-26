
import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;
function App() {
    useEffect( () => {
    tg.ready();
    }, [])
    const onClose = ()=>{
        tg.close()
    }
  return (
    <div className="App">
        1. Дизайнер одежды | Skillbox
        Для кого: обучение с нуля, для дизайнеров с минимальным опытом.
        Длительность: 3 месяца.
        Стоимость: 12 × 8 637 ₽/мес.
        Формат обучения: онлайн: видеоролики, практические задания, помощь и обратная связь от кураторов.
        Документ после окончания обучения: сертификат.

        2. Профессия fashion-дизайнер одежды от Talentsy
        Для кого: курс для всех желающих.
        Длительность и количество уроков: 12 месяцев, 350+ занятий.
        Стоимость: от 7 500 ₽/мес., первый платеж через 2 месяца.
        Формат: видеоуроки в HD, практические семинары в мини-группах, воркшопы, мастер-классы.
        Документ об окончании: диплом о профпереподготовке, международный диплом и сертификат.

        3. Дизайн и моделирование одежды от НИИДПО
        Целевая аудитория: новички, действующие специалисты.
        Длительность: 12 месяцев, возможно ускоренное дистанционное обучение — 8 мес.
        Цена: от 5 120 ₽/мес. или 61 400 ₽.
        Формат: видеолекции, лонгриды, ежемесячные прямые эфиры, практика с проверкой, тестирование.
        Документ по окончании курса: диплом о профессиональной переподготовке, сертификат компетенций.
        <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
