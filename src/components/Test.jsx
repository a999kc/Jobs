import { Link } from 'react-router-dom';
import './Test.css'
import React from "react";


const professions = {
  'Мобильная разработка':0,
  'Администрирование и сети':0,
  'Дизайн и UX/UI': 0,
  'Аналитика и оптимизация': 0,
  'Тестирование и качество': 0,
  'Frontend-Разработка': 0,
  'Backend-Разработка': 0,
}


const questions = [
  {
    title: "Выберите утверждение, которое вам ближе",
    variants: ['Работать над созданием приложений с виртуальной или дополненной реальностью',
      'Делать красивые и аккуратные сайты из дизайн-макетов',
      'Делать важную, но малозаметную работу: оптимизировать, настраивать и обеспечивать надёжность сайта',
      'Искать ошибки и придумывать способы, как лучше их исправить'],
  },
  {
    title: "Выберите утверждение, которое вам ближе",
    variants: ['Создавать плавные переходы и интересные анимации в мобильном приложении',
      'Придумывать новые и нетривиальные способы поиска ошибок',
      'Программировать сайты так, чтобы на любых устройствах они отображались корректно',
      'Разносторонне продумывать логику и внутреннюю структуру будущей программы'],
  },
  {
    title: "Выберите утверждение, которое вам ближе",
    variants: ['Делать мобильное приложение удобным и понятным для пользователя',
      'Уметь делать всю работу целиком — от идеи и до последней строчки кода',
      'Быть специалистом, от внимания которого не ускользнёт ни один сдвинутый пиксель',
      'Делать сайты удобными и понятными для пользователей',
    ]
  },
  {
    title: "Выберите утверждение, которое вам ближе",
    variants: ['Придумывать программы, которые автоматически ищут ошибки',
      'Активно использовать в программировании микрофон, камеру, геолокацию и другие функции мобильного телефона',
      'Делать сайты удобными для людей с ограниченными возможностями',
      'Уметь одинаково хорошо настраивать операционные системы и разрабатывать сайты',
    ]
  },
  {
    title: "Выберите утверждение, которое вам ближе",
    variants: ['Работать над программированием новых фишек мобильного приложения',
      'Создавать интересные эффекты и анимации на сайте',
      'Педантично, шаг за шагом, проверять правильность работы каждой детали',
      'Разбираться во всех областях программирования, пусть даже и поверхностно',
    ]
  },
  {
    title: "Выберите утверждение, которое вам ближе",
    variants: ['Программировать различные детали сайта — кнопки, прогресс-бары и другие',
      'Анализировать разнородные данные и собирать их в единое целое',
      'Внедрять в мобильное приложение аналитику поведения пользователя',
      'Находить даже минимальные расхождения между тем, как должна работать программа, и тем, как она работает сейчас',
    ]
  },
  {
    title: "Выберите утверждение, которое вам ближе",
    variants: ['Понимать бизнес-логику и применять ее в создании сайтов',
    'Разбираться в программировании не только гаджетов, но и устройств умного дома, научных аппаратов',
    'Сразу видеть результат своей работы',
    'Прописывать четкие и понятные рекомендации для исправления ошибок другим специалистам',
    ]
  },
  {
    title: "Выберите утверждение, которое вам ближе",
    variants: ['Оптимизировать сценарии сайта для ускорения загрузки страниц',
    'Готов работать в IT после нескольких месяцев обучения',
    'Разрабатывать несложные игры для мобильных устройств',
    'Работать в режиме многозадачности',
    ]
  },
  {
    title: "Выберите утверждение, которое вам ближе",
    variants: ['Брать на себя ответственность за функционирование всего сайта',
    'Настраивать работу слайдеров, кнопок, онлайн-форм и другого функционала сайта',
    'Пользоваться мобильными приложениями и изучать их больше, чем сайты',
    'Старательно проверять все элементы на сайте/ в приложении, заполнять все формы и нажимать на все кнопки',
    ]
  },
  {
    title: "Выберите утверждение, которое вам ближе",
    variants: ['Уметь абстрагироваться от технического сценария и понять поведение пользователя',
    'Оживлять статичные страницы',
    'Осваивать и изучать новые технологии из разных сфер программирования',
    'Скрупулезно оптимизировать приложения для меньшего потребления заряда батареи',
    ]
  },
  {
    title: "Выберите утверждение, которое вам ближе",
    variants: ['Четко следовать гайдлайнам (стандартам) различных элементов',
    'Комфортнее работать одному',
    'Анализировать большой объем однотипной информации',
    'Оформлять внешний вид сайта и создавать его структуру',
    ]
  },
 

]

function Result({correct}) {
  let maxProfession = null;
  let maxScore = -1;

  // Находим профессию с максимальным числом очков
  for (const profession in professions) {
    if (professions[profession] > maxScore) {
      maxScore = professions[profession];
      maxProfession = profession;
    }
  }
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      {/* {Object.entries(professions).map(([profession, value]) => (
        <div key={profession}>
          <span>Вот ваш результат: {profession}: {value}</span>
          <br />
        </div>
      ))} */}
      <p className="result_text">Вам подходит: {maxProfession}</p>
      
      <Link to="/main">
        <button>Выйти на главную</button>
      </Link>
    </div>
  );
}

function Game({question,onClickVariant,step}) {

  const percent = Math.round(step/questions.length * 100)

  console.log(percent)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h1 className="question_title">{question.title}</h1>
      <ul>
        {question.variants.map((variant,index) => 
        <li onClick={()=>onClickVariant(index)} key={variant} >
          {variant}
        </li>)}
        
      </ul>
    </>
  );
}

export default function App() {

  const [step,setStep] = React.useState(0)
  const [correct,setCorrect] = React.useState(0)
  const question = questions[step]

  const onClickVariant = (index) => {
    console.log(step,index )
    setStep(step+1)

    const selectedVariant = question.variants[index].toLowerCase(); // Преобразуем ответ в нижний регистр для удобства сравнения
    // Увеличиваем счетчик для выбранной профессии в объекте professions
  
    if (/сайт|сайты|кнопки|кнопка|страница|страницы|красив|внешний|вид/.test(selectedVariant)) {
      professions['Frontend-Разработка']+= 1;
      professions['Дизайн и UX/UI']+= 0.5;
    } else if (/сайт|сайты|красив|внешний|вид|дизайн|макет|структур/.test(selectedVariant)) {
      professions['Дизайн и UX/UI']+= 1;
      professions['Frontend-Разработка']+= 0.5;
    } else if (/тест|проверять|отлаживать|оптимизировать|настраивать|ошибок|ошибки/.test(selectedVariant)) {
      professions['Тестирование и качество']+= 1;
    } else if (/объемы|объем|данные|анализ|анализировать|многозадачности|ошибки/.test(selectedVariant)) {
      professions['Аналитика и оптимизация']+= 1;
      professions['Администрирование и сети']+= 0.5;
    } else if (/приложение|приложения|мобильный|мобильными|детали|работу|многозадачности/.test(selectedVariant)) {
      professions['Мобильная разработка']+= 1;
    } else if (/приложение|приложения|мобильный|мобильными|детали|работу|многозадачности/.test(selectedVariant)) {
      professions['Мобильная разработка']+= 1;
    } else if (/поведение|пользователя|функционирование|Анализировать|поверхностно|работу|оптимизировать/.test(selectedVariant)) {
      professions['Администрирование и сети']+= 1;
    }
    // кейсы для остальных профессий по аналогии
    if(index === question.correct) {
      setCorrect(correct+1)
    }
  }

  
  

  console.log(question)
  return (
    <div className="Test_body">
      <div className="Test">
        {step !== questions.length ? 
        <Game step ={step} question={question} onClickVariant={onClickVariant}/> 
        :  
        <Result correct={correct} />}
        
        {/* */}
      </div>
    </div>
  );
}



  
  