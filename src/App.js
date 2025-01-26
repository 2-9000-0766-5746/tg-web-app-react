import './App.css';
import { useEffect } from "react";
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
            <div className="course-list">
                <div className="course-card">
                    <h3>
                        <a href="https://skillbox.ru/course/fashion-designer/?utm_source=advcake&utm_medium=cpa&utm_campaign=affiliate&utm_content=affiliate&utm_term=1c729d9103fcd00d0cee867b7444a09e&advcake_params=1c729d9103fcd00d0cee867b7444a09e&erid=2VfnxxcSezk&advcake_method=1&m=1"
                           target="_blank"
                           rel="noopener noreferrer" >
                            Дизайнер одежды | Skillbox
                        </a>
                    </h3>
                    <p>Для кого: обучение с нуля, для дизайнеров с минимальным опытом.</p>
                    <p>Длительность: 3 месяца.</p>
                    <p>Стоимость: 12 × 8 637 ₽/мес.</p>
                    <p>Формат обучения: онлайн: видеоролики, практические задания, помощь и обратная связь от кураторов.</p>
                    <p>Документ после окончания обучения: сертификат.</p>
                </div>
                <div className="course-card">
                    <h3>
                        <a href="https://talentsy.ru/professiya-fashion-dizayner/?utm_source=advcake&utm_medium=cpa&utm_campaign=affiliate&utm_content=kpvcom&advcake_params=f374ea2a36732791e1a8a92cdbeb562a&utm_term=f374ea2a36732791e1a8a92cdbeb562a&erid=LdtCKEyiP&advcake_method=2&m=2"
                           target="_blank"
                           rel="noopener noreferrer">
                            Профессия fashion-дизайнер одежды от Talentsy
                        </a>
                    </h3>
                    <p>Для кого: курс для всех желающих.</p>
                    <p>Длительность и количество уроков: 12 месяцев, 350+ занятий.</p>
                    <p>Стоимость: от 7 500 ₽/мес., первый платеж через 2 месяца.</p>
                    <p>Формат: видеоуроки в HD, практические семинары в мини-группах, воркшопы, мастер-классы.</p>
                    <p>Документ об окончании: диплом о профпереподготовке, международный диплом и сертификат.</p>
                </div>
                <div className="course-card">
                    <h3>
                        <a href="https://niidpo.ru/seminar/dizajn-i-modelirovanie-odezhdy?utm_source=advcake&utm_medium=cpa&utm_campaign=referral&utm_content=kpvcom&advcake_params=90069270f7424e71c2e11995c519822c&utm_term=90069270f7424e71c2e11995c519822c&erid=LdtCKdVD1&advcake_method=4&m=4"
                           target="_blank"
                           rel="noopener noreferrer">
                            Дизайн и моделирование одежды от НИИДПО
                        </a>
                    </h3>
                    <p>Целевая аудитория: новички, действующие специалисты.</p>
                    <p>Длительность: 12 месяцев, возможно ускоренное дистанционное обучение — 8 мес.</p>
                    <p>Цена: от 5 120 ₽/мес. или 61 400 ₽.</p>
                    <p>Формат: видеолекции, лонгриды, ежемесячные прямые эфиры, практика с проверкой, тестирование.</p>
                    <p>Документ по окончании курса: диплом о профессиональной переподготовке, сертификат компетенций.</p>
                </div>
                <div className="course-card">
                    <h3>
                        <a href="https://pentaschool.ru/program/dizajn-modelirovanie-odezhdy-kurs?utm_source=advcake&utm_medium=cpa&utm_campaign=affiliate&utm_content=kpvcom&advcake_params=1d29dac487fd6ab66550dffd0eff892e&utm_term=1d29dac487fd6ab66550dffd0eff892e&erid=LdtCKSW7C&advcake_method=1&m=1"
                           target="_blank"
                           rel="noopener noreferrer">
                            Профессиональный курс Дизайнер одежды | Pentaschool
                        </a>
                    </h3>
                    <p>Для кого: курс подойдёт для тех, кто хочет создать свой бренд с нуля или повысить квалификацию.</p>
                    <p>Продолжительность: 10 месяцев.</p>
                    <p>Стоимость: от 5 117 ₽/мес. без первого взноса.</p>
                    <p>Как проходит обучение: теория, задания с проверкой от практикующих дизайнеров одежды, онлайн-вебинары.</p>
                    <p>Документ после прохождения обучения: диплом о профпереподготовке.</p>
                </div>
                <div className="course-card">
                    <h3>Бесплатные курсы по дизайну одежды</h3>
                    <ul className="free-courses-list">
                        <li>Fashion-дизайнер | Talensy – видеоуроки с фидбеком и сертификатом.</li>
                        <li>Дизайнер одежды | AltShu University – 144 часа видеоматериалов.</li>
                        <li>Моделирование предметов гардероба | Академия IT.</li>
                        <li>От эскиза до продвижения бренда | PuzzleBrain – 10 уроков.</li>
                        <li>Проектирование одежды | Stepik – от преподавателя с РГУ им. А.Н. Косыгина.</li>
                    </ul>
                </div>
                <div className="course-card">
                    <h3>Видеоуроки на YouTube:</h3>
                    <ul className="youtube-channels-list">
                        <li>Fashion Workshop – 120 обучающих видео на основе опыта британских и американских практиков.</li>
                        <li>Я женщина – видеокурсы по моделированию различных предметов гардероба.</li>
                        <li>Академия шитья Татьяны Маркеловой – уроки по дизайну и пошиву одежды.</li>
                        <li>Методики конструирования одежды.</li>
                        <li>Школа кройки и шитья – 27 уроков и мастер-классов.</li>
                        <li>Модные практики – серия уроков по конструированию.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;