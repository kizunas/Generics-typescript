// ジェネリクス型とは、他の特定の型と結合された型のこと
// 例：Array<string> (他の方はstring)
// 例：Array<number> (他の方はnumber)
// Array<string>はstring[]と同義
const names: Array<string> = [];
// names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => { // promiseはnew promiseで作成できるJavaScriptのコンストラクタ関数。resolve, rejectを引数に持つ
//   setTimeout(() => {
//     resolve('終わりました!');
//   }, 2000);
// })

// promise.then(data => {
//   data.split(' ');
// })

// 独自のGenerics型
function merge<T extends {}, U>(objA: T, objB: U) { // 一つ目の引数をT,二つ目をUとするのが慣例的らしい。引数の値から型を動的に推論してくれる。
  return Object.assign(objA, objB);
}

// console.log(merge({name: 'Max'}, {age:30}))
const margedObj = merge({name: 'Max'}, {age:30})
margedObj.age;