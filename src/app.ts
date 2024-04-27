// ジェネリクス型とは、他の特定の型と結合された型のこと
// 例：Array<string> (他の方はstring)
// 例：Array<number> (他の方はnumber)
// Array<string>はstring[]と同義
const names: Array<string> = [];
// names[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => { // promiseはnew promiseで作成できるJavaScriptのコンストラクタ関数。resolve, rejectを引数に持つ
  setTimeout(() => {
    resolve('終わりました!');
  }, 2000);
})

promise.then(data => {
  data.split(' ');
})