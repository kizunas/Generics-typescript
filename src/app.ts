// ジェネリクス型とは、他の特定の型と結合された型のこと
// 例：Array<string> (他の方はstring)
// 例：Array<number> (他の方はnumber)
// Array<string>はstring[]と同義
// const names: Array<string> = [];
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
// extendsでGenericsに制約を持たせられる。
function merge<T extends object, U extends object>(objA: T, objB: U) { // 一つ目の引数をT,二つ目をUとするのが慣例的らしい。引数の値から型を動的に推論してくれる。
  return Object.assign(objA, objB);
}

// console.log(merge({name: 'Max'}, {age:30}))
const margedObj = merge({name: 'Max'}, {age: 30})
margedObj.age;

interface Lengthy {
  length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = '値がありません。';
  if (element.length > 0) {
    descriptionText = '値は' + element.length + '個です。';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("お疲れ様です。"));

// keyofによる制約
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) { // Uが存在するためにはTが必要である。
  return 'Value:' + obj[key];
}

extractAndConvert({name: 'Max'}, 'name')

class DataStorage<T extends string| number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Data1");
textStorage.addItem("Data2");
textStorage.removeItem("Data1");
console.log(textStorage.getItems());


// オブジェクト（配列）は参照型
// const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: 'Max'});
// objStorage.addItem({name: 'Manu'});
// // ...
// objStorage.removeItem({name: 'Manu'});
// console.log(objStorage.getItems());

// generiticsのユーティリティ
// partial

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}; // Partial: 最終的な型はCourseGoalになるがそれまでは任意のオプショナルのプロパティとする
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  // return courseGoal; // Partial型なのでそのままreturnできない
  return courseGoal as CourseGoal
}

// readonly
const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu')