//createElementで、linkタグを生成する。
const css=document.createElement("link");

//setAttributeで、生成した要素に属性を追加する。
css.setAttribute("rel","stylesheet");
css.setAttribute("href","src/style.css");

//appendChildで、headタグの最後に挿入する。
document.getElementsByTagName("head")[0].appendChild(css);

//1~9を削除してheadタグの最後に<script src="src/index.js" defer></script>でもいいかも


const onClickAdd = () => {
// テキストボックスを初期化する
const inputText = document.getElementById("add-text").value;
document.getElementById("add-text").value = "";

createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
// div生成
const div = document.createElement("div");
div.className = "list-row";

// p タグ生成
const p = document.createElement("p");
p.innerText = text;

//button(完了)タグ生成
const completeButton =document.createElement("button")
completeButton.innerText = "完了";
completeButton.addEventListener("click", () =>{
    //押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //pタグ生成
    const p = document.createElement("p");
    p.innerText =text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText ="戻す";
    backButton.addEventListener("click", () => {
        //押された戻すボタンの親タグ(div)を完了リストから削除
        const deleteTarget = backButton.parentNode;
        document.getElementById("complete-list").removeChild(deleteTarget);
    
        //テキスト取得
        const text = backButton.parentNode.firstElementChild.innerText;
        createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);

});

//button(削除)タグ生成
const deleteButton =document.createElement("button")
deleteButton.innerText = "削除";
deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
});

// divタグの子要素に各要素を設定
div.appendChild(p);
div.appendChild(completeButton);
div.appendChild(deleteButton);

//未完了リストに追加
document.getElementById("incomplete-list").appendChild(div);
};


document
.getElementById("add-button")
.addEventListener("click", () => onClickAdd());
//aaaaaaaaaaaaaaaa