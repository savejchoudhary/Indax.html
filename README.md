<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prep Expert Academy - Cytology Mock Test</title>
    <style>
        :root {
            --primary: #0284c7;
            --primary-dark: #0369a1;
            --bg: #f8fafc;
            --card-bg: #ffffff;
            --text: #1e293b;
            --text-light: #64748b;
            --success: #10b981;
            --success-bg: #ecfdf5;
            --error: #ef4444;
            --error-bg: #fef2f2;
            --border: #e2e8f0;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            background-color: var(--bg);
            color: var(--text);
            line-height: 1.6;
            padding: 20px 10px;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            padding: 20px;
            background: linear-gradient(135deg, #0c4a6e, #0284c7);
            color: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .header h1 { font-size: 24px; margin-bottom: 8px; font-weight: 700; }
        .header p { font-size: 14px; opacity: 0.9; }
        .quiz-container { max-width: 650px; margin: 0 auto; }
        .card {
            background: var(--card-bg);
            border-radius: 12px;
            padding: 24px;
            margin-bottom: 20px;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
            border: 1px solid var(--border);
        }
        .question-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 14px;
            font-size: 13px;
            color: var(--primary);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .question-text { font-size: 17px; font-weight: 600; color: #0f172a; margin-bottom: 18px; }
        .options-grid { display: flex; flex-direction: column; gap: 10px; }
        .option {
            display: flex;
            align-items: center;
            padding: 12px 16px;
            background-color: var(--bg);
            border: 2px solid var(--border);
            border-radius: 8px;
            cursor: pointer;
            font-size: 15px;
            font-weight: 500;
            transition: all 0.2s ease;
        }
        .option:hover { border-color: #cbd5e1; background-color: #f1f5f9; }
        .option.correct { background-color: var(--success-bg) !important; border-color: var(--success) !important; color: #065f46 !important; }
        .option.wrong { background-color: var(--error-bg) !important; border-color: var(--error) !important; color: #991b1b !important; }
        .option.disabled { pointer-events: none; }
        .result-card {
            text-align: center;
            display: none;
            background: white;
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.05);
            border: 2px solid var(--primary);
        }
        .result-card h2 { color: var(--primary-dark); margin-bottom: 10px; }
        .score-display { font-size: 36px; font-weight: 800; color: var(--primary); margin: 15px 0; }
        .btn {
            background-color: var(--primary);
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 8px;
            cursor: pointer;
            transition: background 0.2s;
            margin-top: 15px;
        }
        .btn:hover { background-color: var(--primary-dark); }
    </style>
</head>
<body>

<div class="quiz-container">
    <div class="header">
        <h1>Prep Expert Academy</h1>
        <p>साइटोलॉजी (कोशिका विज्ञान) – 10 महत्वपूर्ण प्रश्न</p>
    </div>

    <div id="quiz-box">
        <!-- Q1 -->
        <div class="card">
            <div class="question-header">प्रश्न 1 / 10</div>
            <div class="question-text">कोशिका (Cell) की खोज किसने की थी?</div>
            <div class="options-grid">
                <div class="option" onclick="checkAnswer(this, true)">A) रॉबर्ट हुक</div>
                <div class="option" onclick="checkAnswer(this, false)">B) ल्यूवेनहॉक</div>
                <div class="option" onclick="checkAnswer(this, false)">C) श्लाइडेन</div>
                <div class="option" onclick="checkAnswer(this, false)">D) श्वान</div>
            </div>
        </div>

        <!-- Q2 -->
        <div class="card">
            <div class="question-header">प्रश्न 2 / 10</div>
            <div class="question-text">कोशिका का नियंत्रण केंद्र किसे कहते हैं?</div>
            <div class="options-grid">
                <div class="option" onclick="checkAnswer(this, false)">A) माइटोकॉन्ड्रिया</div>
                <div class="option" onclick="checkAnswer(this, true)">B) केंद्रक (Nucleus)</div>
                <div class="option" onclick="checkAnswer(this, false)">C) राइबोसोम</div>
                <div class="option" onclick="checkAnswer(this, false)">D) गोल्जी बॉडी</div>
            </div>
        </div>

        <!-- Q3 -->
        <div class="card">
            <div class="question-header">प्रश्न 3 / 10</div>
            <div class="question-text">पौधों की कोशिका में कौन-sa भाग पाया जाता है जो जंतु कोशिका में नहीं होता?</div>
            <div class="options-grid">
                <div class="option" onclick="checkAnswer(this, true)">A) कोशिका भित्ति</div>
                <div class="option" onclick="checkAnswer(this, false)">B) कोशिका झिल्ली</div>
                <div class="option" onclick="checkAnswer(this, false)">C) साइटोप्लाज्म</div>
                <div class="option" onclick="checkAnswer(this, false)">D) केंद्रक</div>
            </div>
        </div>

        <!-- Q4 -->
        <div class="card">
            <div class="question-header">प्रश्न 4 / 10</div>
            <div class="question-text">कोशिका का ऊर्जा गृह (Powerhouse) किसे कहते हैं?</div>
            <div class="options-grid">
                <div class="option" onclick="checkAnswer(this, false)">A) राइबोसोम</div>
                <div class="option" onclick="checkAnswer(this, true)">B) माइटोकॉन्ड्रिया</div>
                <div class="option" onclick="checkAnswer(this, false)">C) लाइसोसोम</div>
                <div class="option" onclick="checkAnswer(this, false)">D) वैक्यूल</div>
            </div>
        </div>

        <!-- Q5 -->
        <div class="card">
            <div class="question-header">प्रश्न 5 / 10</div>
            <div class="question-text">प्रोटीन का निर्माण कहाँ होता है?</div>
            <div class="options-grid">
                <div class="option" onclick="checkAnswer(this, false)">A) गोल्जी बॉडी</div>
                <div class="option" onclick="checkAnswer(this, true)">B) राइबोसोम</div>
                <div class="option" onclick="checkAnswer(this, false)">C) केंद्रक</div>
                <div class="option" onclick="checkAnswer(this, false)">D) माइटोकॉन्ड्रिया</div>
            </div>
        </div>

        <!-- Q6 -->
        <div class="card">
            <div class="question-header">प्रश्न 6 / 10</div>
            <div class="question-text">पौधों में प्रकाश संश्लेषण किस कोशिकांग में होता है?</div>
            <div class="options-grid">
                <div class="option" onclick="checkAnswer(this, false)">A) माइटोकॉन्ड्रिया</div>
                <div class="option" onclick="checkAnswer(this, true)">B) हरितलवक (क्लोरोप्लास्ट)</div>
                <div class="option" onclick="checkAnswer(this, false)">C) राइबोसोम</div>
                <div class="option" onclick="checkAnswer(this, false)">D) लाइसोसोम</div>
            </div>
        </div>

        <!-- Q7 -->
        <div class="card">
            <div class="question-header">प्रश्न 7 / 10</div>
            <div class="question-text">कोशिका की बाहरी सीमा क्या कहलाती है?</div>
            <div class="options-grid">
                <div class="option" onclick="checkAnswer(this, true)">A) कोशिका झिल्ली</div>
                <div class="option" onclick="checkAnswer(this, false)">B) केंद्रक</div>
                <div class="option" onclick="checkAnswer(this, false)">C) साइटोप्लाज्म</div>
                <div class="option" onclick="checkAnswer(this, false)">D) वैक्यूल</div>
            </div>
        </div>

        <!-- Q8 -->
        <div class="card">
            <div class="question-header">प्रश्न 8 / 10</div>
            <div class="question-text">कोशिका के अंदर पाया जाने वाला जेली जैसा पदार्थ क्या कहलाता है?</div>
            <div class="options-grid">
                <div class="option" onclick="checkAnswer(this, true)">A) साइटोप्लाज्म</div>
                <div class="option" onclick="checkAnswer(this, false)">B) केंद्रक</div>
                <div class="option" onclick="checkAnswer(this, false)">C) माइटोकॉन्ड्रिया</div>
                <div class="option" onclick="checkAnswer(this, false)">D) गोल्जी बॉडी</div>
            </div>
        </div>

        <!-- Q9 -->
        <div class="card">
            <div class="question-header">प्रश्न 9 / 10</div>
            <div class="question-text">'कोशिका जीवन की संरचनात्मक एवं क्रियात्मक इकाई है' यह किस सिद्धांत का भाग है?</div>
            <div class="options-grid">
                <div class="option" onclick="checkAnswer(this, true)">A) कोशिका सिद्धांत</div>
                <div class="option" onclick="checkAnswer(this, false)">B) विकासवाद</div>
                <div class="option" onclick="checkAnswer(this, false)">C) आनुवंशिकी</div>
                <div class="option" onclick="checkAnswer(this, false)">D) वर्गिकी</div>
            </div>
        </div>

        <!-- Q10 -->
        <div class="card">
            <div class="question-header">प्रश्न 10 / 10</div>
            <div class="question-text">जंतु कोशिका में सामान्यतः कौन-सा कोशिकांग नहीं पाया जाता?</div>
            <div class="options-grid">
                <div class="option" onclick="checkAnswer(this, true)">A) हरितलवक (क्लोरोप्लास्ट)</div>
                <div class="option" onclick="checkAnswer(this, false)">B) केंद्रक</div>
                <div class="option" onclick="checkAnswer(this, false)">C) माइटोकॉन्ड्रिया</div>
                <div class="option" onclick="checkAnswer(this, false)">D) राइबोसोम</div>
            </div>
        </div>
    </div>

    <div id="result-box" class="result-card">
        <h2>आपका टेस्ट पूरा हुआ!</h2>
        <p>साइटोलॉजी मॉक टेस्ट का परिणाम:</p>
        <div class="score-display"><span id="correct-count">0</span> / 10</div>
        <button class="btn" onclick="location.reload()">दोबारा टेस्ट दें</button>
    </div>
</div>

<script>
    let totalCorrect = 0;
    let questionsAnswered = 0;

    function checkAnswer(selectedOption, isCorrect) {
        const parentGrid = selectedOption.parentElement;
        const allOptions = parentGrid.querySelectorAll('.option');

        allOptions.forEach(opt => {
            opt.classList.add('disabled');
        });

        if (isCorrect) {
            selectedOption.classList.add('correct');
            totalCorrect++;
        } else {
            selectedOption.classList.add('wrong');
        }

        questionsAnswered++;

        if (questionsAnswered === 10) {
            setTimeout(() => {
                document.getElementById('quiz-box').style.display = 'none';
                document.getElementById('correct-count').innerText = totalCorrect;
                document.getElementById('result-box').style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 600);
        }
    }
</script>

</body>
</html>
