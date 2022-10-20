//クイズの用意
const quiz = [
    {
        question: "柏崎市のおおよその人口は次のうちどれ？",
        answers: ["60000人","70000人","80000人","90000人"],
        correct: "80000人"
    },
    {
        question: "柏崎市の木は次のうちどれ？",
        answers: ["松","竹","柏","梅"],
        correct: "松"
    },
    {
        question: "柏崎市のおおよその面積は次のうちどれ？",
        answers: ["320㎢","440㎢","500㎢","640㎢"],
        correct: "440㎢"
    }
];

//必要な変数と定数の定義
const $button = document.getElementsByTagName("button");
let quiz_index = 0;
let score = 0;

//クイズをセットアップする関数の定義
function setup_quiz() {

    document.getElementById("question").textContent = quiz[quiz_index].question;
    for (let i = 0; i < $button.length; i++) {

        $button[i].textContent = quiz[quiz_index].answers[i];

    }

}

//ボタンをクリックした時のイベントを起こす関数の定義
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

//実行
setup_quiz();
for (let j = 0; j < $button.length; j++) {

    $button[j].addEventListener("click", (e) => {click_hundler(e);});

}