//準備フェーズ
const quiz = [
    {
        question: "最も売れたゲーム機は次のうちどれ？",
        answers: ["スーパーファミコン","ニンテンドーDS","ニンテンドーswitch","ファミコン"],
        correct: "ニンテンドーDS"
    },
    {
        question: "糸井重里が企画に関わったゲームは次のうちどれ？",
        answers: ["MOTHER2","スーパーマリオブラザーズ","ドンキーコング","星のカービィ"],
        correct: "MOTHER2"
    },
    {
        question: "FFIVの主人公は次のうちどれ？",
        answers: ["フリオニール","ティーダ","セシル","クラウド"],
        correct: "セシル"
    }
];

const $button = document.getElementsByTagName("button");
let quiz_index = 0;
let score = 0;

function setup_quiz() {

    document.getElementById("question").textContent = quiz[quiz_index].question;
    for (let i = 0; i < $button.length; i++) {

        $button[i].textContent = quiz[quiz_index].answers[i];

    }

}

function click_hundler(e) {

    if (quiz[quiz_index].correct === e.target.textContent) {

        window.alert("正解!");
        score++;

    } else {

        window.alert("不正解!");

    }

    quiz_index ++;

    if (quiz_index < quiz.length) {

        setup_quiz();

    } else {

        window.alert("終了! あなたの正解数は" + score + "でした!");

    }

}

//実行フェーズ
setup_quiz();

for (let j = 0; j < $button.length; j++) {

    $button[j].addEventListener("click", (e) => {

        click_hundler(e);

    });

}