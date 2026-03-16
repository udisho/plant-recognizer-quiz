// ===== Questions Database =====
const allQuestions = [
    {
        id: 1,
        name: 'גדילן',
        image: 'images/gadilan.jpg',
        options: ['גדילן', 'חרדל', 'כובע הנזיר', 'חלמית (חובזה)'],
        correctIndex: 0,
        explanation: 'הגדילן הוא צמח קוצני עם פרחים סגולים. העלים הצעירים נאכלים לאחר הסרת הקוצים ובישול.',
        link: 'https://he.wikipedia.org/wiki/%D7%92%D7%93%D7%99%D7%9C%D7%9F_%D7%9E%D7%A6%D7%95%D7%99',
    },
    {
        id: 2,
        name: 'חרדל',
        image: 'images/hardal.jpg',
        options: ['תורמוס', 'חרדל', 'גדילן', 'סרפד'],
        correctIndex: 1,
        explanation: 'החרדל הוא צמח בר נפוץ בישראל עם פרחים צהובים. העלים והזרעים שימשו כתבלין כבר מימי קדם.',
        link: 'https://he.wikipedia.org/wiki/%D7%97%D7%A8%D7%93%D7%9C',
    },
    {
        id: 3,
        name: 'שום משולש',
        image: 'images/shum.jpg',
        options: ['שום משולש', 'סרפד', 'אספרג החורש', 'חלמית (חובזה)'],
        correctIndex: 0,
        explanation: 'השום המשולש מזוהה בקלות בזכות הגבעול המשולש שלו. כל חלקי הצמח אכילים עם טעם שום עדין.',
        link: 'https://he.wikipedia.org/wiki/%D7%A9%D7%95%D7%9D_%D7%9E%D7%A9%D7%95%D7%9C%D7%A9',
    },
    {
        id: 4,
        name: 'שקד',
        image: 'images/shaked.jpg',
        options: ['תאנה', 'שקד', 'אורן', 'תורמוס'],
        correctIndex: 1,
        explanation: 'השקד הוא מהעצים הראשונים שפורחים בישראל, כבר בינואר. הפרחים הוורודים-לבנים שלו מבשרים את בוא האביב.',
        link: 'https://he.wikipedia.org/wiki/%D7%A9%D7%A7%D7%93_%D7%9E%D7%A6%D7%95%D7%99',
    },
    {
        id: 5,
        name: 'תאנה',
        image: 'images/teena.jpg',
        options: ['שקד', 'חרדל', 'תאנה', 'גדילן'],
        correctIndex: 2,
        explanation: 'התאנה היא אחד משבעת המינים שנשתבחה בהם ארץ ישראל. הפרי מתוק וטעים ישירות מהעץ.',
        link: 'https://he.wikipedia.org/wiki/%D7%AA%D7%90%D7%A0%D7%94_%D7%A0%D7%A4%D7%95%D7%A6%D7%94',
    },
    {
        id: 6,
        name: 'אספרג החורש',
        image: 'images/asparagus.jpg',
        options: ['סרפד', 'שום משולש', 'אספרג החורש', 'כובע הנזיר'],
        correctIndex: 2,
        explanation: 'אספרג החורש גדל בר בחורשים בישראל. הנבטים הצעירים נאכלים בדיוק כמו אספרגוס מתורבת.',
        link: 'https://he.wikipedia.org/wiki/%D7%90%D7%A1%D7%A4%D7%A8%D7%92_%D7%94%D7%97%D7%95%D7%A8%D7%A9',
    },
    {
        id: 7,
        name: 'צנובר (אורן)',
        image: 'images/pine.jpg',
        options: ['שקד', 'תאנה', 'צנובר (אורן)', 'אספרג החורש'],
        correctIndex: 2,
        explanation: 'אורן הצנובר מפיק את גרגירי הצנובר הטעימים. בישראל ניתן למצוא אותו ביערות נטועים ברחבי הארץ, כולל הרי ירושלים.',
        link: 'https://he.wikipedia.org/wiki/%D7%90%D7%95%D7%A8%D7%9F_%D7%94%D7%A6%D7%A0%D7%95%D7%91%D7%A8',
    },
    {
        id: 8,
        name: 'חלמית (חובזה)',
        image: 'images/hovza.jpg',
        options: ['חלמית (חובזה)', 'גדילן', 'תורמוס', 'חרדל'],
        correctIndex: 0,
        explanation: 'החלמית (חובזה) היא מהצמחים הנפוצים ביותר לליקוט בישראל. העלים נאכלים חיים או מבושלים ויש להם טעם עדין.',
        link: 'https://he.wikipedia.org/wiki/%D7%97%D7%95%D7%91%D7%96%D7%94',
    },
    {
        id: 9,
        name: 'סרפד',
        image: 'images/sarpad.jpg',
        options: ['שום משולש', 'חלמית (חובזה)', 'סרפד', 'אספרג החורש'],
        correctIndex: 2,
        explanation: 'הסרפד צורב במגע אבל לאחר בישול הוא אכיל וטעים מאוד! עשיר בברזל וויטמינים.',
        link: 'https://he.wikipedia.org/wiki/%D7%A1%D7%A8%D7%A4%D7%93',
    },
    {
        id: 10,
        name: 'כובע הנזיר',
        image: 'images/kova.jpg',
        options: ['תורמוס', 'סרפד', 'חרדל', 'כובע הנזיר'],
        correctIndex: 3,
        explanation: 'כובע הנזיר (לופית מצויה) נקרא כך בזכות צורת העטיף שלו שמזכירה כובע נזיר. ניתן לאכול אותו חי או מבושל.',
        link: 'https://he.wikipedia.org/wiki/%D7%9C%D7%95%D7%A4%D7%99%D7%AA_%D7%9E%D7%A6%D7%95%D7%99%D7%94',
    },
    {
        id: 11,
        name: 'תורמוס',
        image: 'images/turmus.jpg',
        options: ['חרדל', 'גדילן', 'שקד', 'תורמוס'],
        correctIndex: 3,
        explanation: 'התורמוס הארצישראלי פורח בכחול-סגול ונפוץ מאוד בחורף. הפרח מוגן בחוק. הזרעים נאכלים רק בזנים מסוימים של תורמוס ולאחר שרייה ממושכת במים.',
        link: 'https://he.wikipedia.org/wiki/%D7%AA%D7%95%D7%A8%D7%9E%D7%95%D7%A1_%D7%94%D7%A9%D7%A2%D7%99%D7%A8',
    },
    {
        id: 12,
        name: 'קורנית',
        image: 'images/kurnit.jpg',
        options: ['קורנית', 'אזוב', 'כליל החורש', 'רפכתן'],
        correctIndex: 0,
        explanation: 'הקורנית היא צמח תבלין ריחני הגדל בחורש הים-תיכוני. משמשת לחליטות תה ותבלון מאז ימי קדם.',
        link: 'https://he.wikipedia.org/wiki/%D7%A7%D7%95%D7%A8%D7%A0%D7%99%D7%AA_%D7%9E%D7%A6%D7%95%D7%99%D7%94',
    },
    {
        id: 13,
        name: 'אזוב',
        image: 'images/ezov.jpg',
        options: ['קורנית', 'טיון דביק', 'אזוב', 'לשון הפר'],
        correctIndex: 2,
        explanation: 'האזוב המצוי הוא צמח תבלין מרכזי במטבח הערבי והישראלי. גדל בהרים ובמדרונות סלעיים.',
        link: 'https://he.wikipedia.org/wiki/%D7%90%D7%96%D7%95%D7%91_%D7%9E%D7%A6%D7%95%D7%99',
    },
    {
        id: 14,
        name: 'כליל החורש',
        image: 'images/klil_hachoresh.jpg',
        options: ['אשחר', 'כליל החורש', 'צלף', 'גדילן'],
        correctIndex: 1,
        explanation: 'כליל החורש הוא שיח קוצני עם פרחים צהובים בולטים, אופייני לחורש הים-תיכוני בישראל.',
        link: 'https://he.wikipedia.org/wiki/%D7%9B%D7%9C%D7%99%D7%9C_%D7%94%D7%97%D7%95%D7%A8%D7%A9',
    },
    {
        id: 15,
        name: 'צלף',
        image: 'images/zalaf.jpg',
        options: ['עולש', 'דובדבן שרוע', 'צלף', 'חלמית (חובזה)'],
        correctIndex: 2,
        explanation: 'הצלף הקוצני גדל על סלעים וחומות עתיקות. ניתן לכבוש את ניצני הפרחים ואת הפירות שלו.',
        link: 'https://he.wikipedia.org/wiki/%D7%A6%D7%9C%D7%A3_%D7%A7%D7%95%D7%A6%D7%A0%D7%99',
    },
    {
        id: 16,
        name: 'טיון דביק',
        image: 'images/tiyon.jpg',
        options: ['טיון דביק', 'קורנית', 'עולש', 'סרפד'],
        correctIndex: 0,
        explanation: 'הטיון הדביק הוא צמח רב-שנתי בעל ריח חזק ועלים דביקים. משמש ברפואה עממית לטיפול במגוון בעיות.',
        link: 'https://he.wikipedia.org/wiki/%D7%AA%D7%99%D7%95%D7%9F_%D7%93%D7%91%D7%99%D7%A7',
    },
    {
        id: 17,
        name: 'רפכתן',
        image: 'images/rafachtan.jpg',
        options: ['לשון הפר', 'שום משולש', 'רפכתן', 'אזוב'],
        correctIndex: 2,
        explanation: 'הרפכתן הוא צמח בצלי עם תפרחת גבוהה של פרחים לבנים. נפוץ מאוד בשדות ובמדרונות בחורף.',
        link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A8%D7%99%D7%AA',
    },
    {
        id: 18,
        name: 'לשון הפר',
        image: 'images/lashon_hapar.jpg',
        options: ['חרדל', 'לשון הפר', 'תורמוס', 'כליל החורש'],
        correctIndex: 1,
        explanation: 'לשון הפר הוא צמח עם פרחים כחולים-סגולים ועלים מחוספסים. העלים הצעירים נאכלים ומשמשים ברפואה עממית.',
        link: 'https://he.wikipedia.org/wiki/%D7%9C%D7%A9%D7%95%D7%9F_%D7%A4%D7%A8',
    },
    {
        id: 19,
        name: 'עולש',
        image: 'images/olesh.jpg',
        options: ['עולש', 'גדילן', 'רפכתן', 'צלף'],
        correctIndex: 0,
        explanation: 'העולש הוא צמח בר נפוץ עם פרחים כחולים. העלים נאכלים חיים בסלט או מבושלים.',
        link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%95%D7%9C%D7%A9_%D7%A0%D7%A4%D7%95%D7%A5',
    },
    {
        id: 20,
        name: 'דובדבן שרוע',
        image: 'images/duvdevan.jpg',
        options: ['שקד', 'אשחר', 'דובדבן שרוע', 'תאנה'],
        correctIndex: 2,
        explanation: 'הדובדבן השרוע הוא שיח נמוך הגדל בהרים. פורח בוורוד ומניב פירות קטנים אדומים הדומים לדובדבנים.',
        link: 'https://he.wikipedia.org/wiki/%D7%93%D7%95%D7%91%D7%93%D7%91%D7%9F_%D7%A9%D7%A8%D7%95%D7%A2',
    },
    {
        id: 21,
        name: 'אשחר',
        image: 'images/eshchar.jpg',
        options: ['כליל החורש', 'טיון דביק', 'קורנית', 'אשחר'],
        correctIndex: 3,
        explanation: 'האשחר הוא שיח ירוק-עד בחורש הים-תיכוני. הפירות השחורים שלו נאכלים על ידי ציפורים רבות.',
        link: 'https://he.wikipedia.org/wiki/%D7%90%D7%A9%D7%97%D7%A8_%D7%90%D7%A8%D7%A6%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99',
    },
];

// ===== Game State =====
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let correctCount = 0;
let answered = false;
let quizStartTime = 0;
let quizElapsedSeconds = 0;
let timerInterval = null;
const QUESTIONS_PER_QUIZ = allQuestions.length;

// ===== Analytics Helper =====
function track(eventName, params = {}) {
    if (typeof gtag === 'function') {
        gtag('event', eventName, params);
    }
}

// ===== Quiz Logic =====
function startQuiz() {
    score = 0;
    correctCount = 0;
    currentIndex = 0;
    answered = false;

    // Shuffle and pick questions
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    currentQuestions = shuffled.slice(0, QUESTIONS_PER_QUIZ);

    // Shuffle options for each question
    currentQuestions.forEach(q => {
        const correctAnswer = q.options[q.correctIndex];
        const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
        q._shuffledOptions = shuffledOptions;
        q._shuffledCorrectIndex = shuffledOptions.indexOf(correctAnswer);
    });

    // Preload all images
    currentQuestions.forEach(q => {
        const img = new Image();
        img.src = q.image;
    });

    quizStartTime = Date.now();
    startLiveTimer();

    document.getElementById('total-q').textContent = QUESTIONS_PER_QUIZ;
    document.getElementById('live-score').textContent = '0';
    showScreen('question-screen');
    showQuestion();
    track('quiz_start_plants');
}

function showQuestion() {
    answered = false;
    const q = currentQuestions[currentIndex];

    // Update progress
    document.getElementById('progress-fill').style.width =
        `${(currentIndex / QUESTIONS_PER_QUIZ) * 100}%`;
    document.getElementById('current-q').textContent = currentIndex + 1;
    document.getElementById('question-text').textContent = 'איזה צמח בתמונה?';

    // Show plant image (clear old image first to prevent stale display)
    const imageContainer = document.getElementById('plant-image-container');
    const plantImg = document.getElementById('plant-image');
    imageContainer.style.display = 'block';
    imageContainer.classList.remove('image-answered');
    plantImg.src = '';
    plantImg.src = q.image;

    // Hide feedback
    document.getElementById('feedback-container').style.display = 'none';

    // Render options
    const container = document.getElementById('options-container');
    container.style.display = 'flex';
    container.innerHTML = '';
    const options = q._shuffledOptions;

    options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => handleAnswer(index, q._shuffledCorrectIndex, q);
        container.appendChild(btn);
    });

    // Animate question
    document.querySelector('.question-body').style.animation = 'none';
    requestAnimationFrame(() => {
        document.querySelector('.question-body').style.animation = 'fadeIn 0.3s ease';
    });
}

function handleAnswer(selectedIndex, correctIndex, q) {
    if (answered) return;
    answered = true;

    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, i) => {
        btn.classList.add('disabled');
        if (i === correctIndex) btn.classList.add('correct');
        if (i === selectedIndex && i !== correctIndex) btn.classList.add('wrong');
    });

    const isCorrect = selectedIndex === correctIndex;
    if (isCorrect) correctCount++;
    score = Math.round((correctCount / QUESTIONS_PER_QUIZ) * 100);

    track('question_answer_plants', {
        question_id: q.id,
        plant_name: q.name,
        correct: isCorrect,
        question_number: currentIndex + 1
    });

    showFeedback(isCorrect, q);
}

function showFeedback(isCorrect, q) {
    document.getElementById('live-score').textContent = score;
    document.getElementById('live-score').style.animation = 'scoreCount 0.3s ease';
    setTimeout(() => {
        document.getElementById('live-score').style.animation = '';
    }, 300);

    // Hide non-selected/non-correct options
    const options = document.querySelectorAll('.option-btn');
    options.forEach(btn => {
        if (!btn.classList.contains('correct') && !btn.classList.contains('wrong')) {
            btn.style.display = 'none';
        }
    });

    // Shrink image
    document.getElementById('plant-image-container').classList.add('image-answered');

    // Show feedback
    const container = document.getElementById('feedback-container');
    container.style.display = 'block';

    document.getElementById('feedback-icon').textContent = isCorrect ? '🌿' : '🍂';
    document.getElementById('feedback-text').textContent = q.explanation;
    document.getElementById('feedback-link').href = q.link;

    // Update next button
    const nextBtn = document.getElementById('next-btn');
    if (currentIndex >= QUESTIONS_PER_QUIZ - 1) {
        nextBtn.textContent = 'לתוצאות';
    } else {
        nextBtn.textContent = 'הבא';
    }
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex >= QUESTIONS_PER_QUIZ) {
        showResults();
    } else {
        showQuestion();
    }
}

// ===== Results =====
function startLiveTimer() {
    if (timerInterval) clearInterval(timerInterval);
    const el = document.getElementById('live-timer');
    el.style.display = 'block';
    el.className = 'live-timer timer-green';
    el.innerHTML = '<span class="timer-icon">&#9201;</span> 0:00';
    timerInterval = setInterval(() => {
        const secs = Math.round((Date.now() - quizStartTime) / 1000);
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        el.innerHTML = `<span class="timer-icon">&#9201;</span> ${m}:${String(s).padStart(2, '0')}`;
        if (secs >= 120) {
            el.className = 'live-timer timer-red';
        } else if (secs >= 60) {
            el.className = 'live-timer timer-orange';
        }
    }, 1000);
}

function stopLiveTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    document.getElementById('live-timer').style.display = 'none';
}

function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (mins === 0) return `${secs} שניות`;
    return `${mins}:${String(secs).padStart(2, '0')} דקות`;
}

function showResults() {
    quizElapsedSeconds = Math.round((Date.now() - quizStartTime) / 1000);
    stopLiveTimer();
    showScreen('results-screen');
    document.getElementById('progress-fill').style.width = '100%';
    document.getElementById('time-result').textContent = formatTime(quizElapsedSeconds);

    // Animate score
    const scoreEl = document.getElementById('final-score');
    const ring = document.getElementById('score-ring');
    const circumference = 339.292;
    const offset = circumference - (score / 100) * circumference;

    scoreEl.textContent = '0';
    ring.style.strokeDashoffset = circumference;

    requestAnimationFrame(() => {
        ring.style.strokeDashoffset = offset;
        animateScore(scoreEl, 0, score, 1500);
    });

    // Result message
    const result = getResultMessage(score);
    document.getElementById('result-title').textContent = result.title;
    document.getElementById('result-message').textContent = result.message;
    document.getElementById('cta-text').textContent = result.ctaText;

    // Challenge text
    if (score <= 40) {
        document.getElementById('challenge-text').textContent = 'אין מצב שגם החברים שלכם ככה... או שכן? 🤔';
    } else if (score <= 70) {
        document.getElementById('challenge-text').textContent = 'בואו נראה אם החברים שלכם מזהים יותר טוב! 😏';
    } else {
        document.getElementById('challenge-text').textContent = 'תאתגרו את החברים ותראו מי באמת מכיר צמחים! 💪';
    }

    track('quiz_complete_plants', { score: score });

    // Dynamic WhatsApp message to Gal
    const galMsg = getGalMessage(score);
    document.getElementById('cta-whatsapp-link').href =
        'https://api.whatsapp.com/send?phone=972512996082&text=' + encodeURIComponent(galMsg);
}

function getResultMessage(score) {
    if (score <= 20) {
        return {
            title: 'יש עוד מה ללמוד!',
            message: 'אלו הצמחים הבסיסיים ביותר — יש עולם שלם של ליקוט לגלות!',
            ctaText: 'רוצים להתחיל מההתחלה? בספר הליקוט שלנו יש מתכונים וטיפים חשובים לכל צמח 🌿',
        };
    } else if (score <= 40) {
        return {
            title: 'התחלה לא רעה!',
            message: 'מכירים כמה צמחים, אבל אלו רק הפשוטים. יש עוד הרבה מה לגלות!',
            ctaText: 'רוצים להעמיק? בספר הליקוט שלנו תמצאו עוד עשרות צמחים עם מתכונים וטיפים 🌿',
        };
    } else if (score <= 60) {
        return {
            title: 'לא רע בכלל!',
            message: 'עשיתם יפה! אבל אלו הצמחים הפשוטים — רוצים להתעמק?',
            ctaText: 'בספר הליקוט שלנו יש צמחים מתקדמים, מתכונים וטיפים חשובים לליקוט בטוח 🌿',
        };
    } else if (score <= 80) {
        return {
            title: 'מרשים!',
            message: 'אתם מכירים את הבסיס — מוכנים לשלב הבא?',
            ctaText: 'בספר הליקוט שלנו תגלו צמחים נוספים, מתכונים מיוחדים וטיפים מהשטח 🌿',
        };
    } else {
        return {
            title: 'מומחה ליקוט! 🌿',
            message: 'כל הכבוד! אבל אלו רק הצמחים הנפוצים — יש עוד עולם שלם לחקור.',
            ctaText: 'קחו את זה לשלב הבא עם ספר הליקוט שלנו — צמחים מתקדמים, מתכונים וטיפים 🌿',
        };
    }
}

function getGalMessage(score) {
    return `היי גל! עשיתי את חידון הליקוט שלך וקיבלתי ${score} מתוך 100 תוך ${formatTime(quizElapsedSeconds)} 🌿 אשמח לשמוע על הטיולים שלך!`;
}

function animateScore(el, from, to, duration) {
    const start = performance.now();
    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(from + (to - from) * eased);
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// ===== Sharing =====
function shareWhatsApp() {
    const url = window.location.href;
    const timeStr = formatTime(quizElapsedSeconds);
    let shareMsg;
    if (score <= 40) {
        shareMsg = `קיבלתי ${score} מתוך 100 בחידון זיהוי צמחי בר תוך ${timeStr} 🌿\nכמה צמחים אתה/את מזהה?\n${url}`;
    } else if (score <= 70) {
        shareMsg = `קיבלתי ${score} מתוך 100 בחידון זיהוי צמחי בר תוך ${timeStr} 🌿\nלא רע, אבל יש עוד מה ללמוד!\nכמה אתה/את תקבל/י?\n${url}`;
    } else {
        shareMsg = `קיבלתי ${score} מתוך 100 בחידון זיהוי צמחי בר תוך ${timeStr} 🌿\nמי מעז להתמודד איתי?\n${url}`;
    }
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMsg)}`;
    track('share_whatsapp_plants', { score: score });
    window.open(whatsappUrl, '_blank');
}

// ===== Screen Navigation =====
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}
