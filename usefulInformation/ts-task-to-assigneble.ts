

// ==================
// ЗАДАНИЕ! Напишите тип которому assignable ЛЮБОЙ массив (не забудьте про as const)
// Без использования any
// Тест кейсы придумайте, сами)
function getAnyArray(param: [...unknown[]]) {}
getAnyArray([1,2,3,4] as const)
getAnyArray(['asera', 'erasera', 2, 4, true])
// ==================
// ЗАДАНИЕ! Напишите тип которому assignable любой массив длинной больше 1
// Без использования any

function getNotEmptyArray(param: [unknown, ...unknown[]]) {}

// @ts-expect-error
getNotEmptyArray([]);
getNotEmptyArray([1]);

// ==================
// ЗАДАНИЕ! Типизируйте функцию так, что бы она могла принять как можно больше безопасных значений
// Без использования any
// Нужны ли тут дженерики?





interface Structure {
  arr: readonly [unknown, { obj: { name: string } }, ...unknown[]];
}

function structureType(value: Structure ): string {
  return value.arr[1].obj.name;
}

const structureType1 = {
  arr: [
    1,
    {
      obj: {
        name: "asd",
        value: "",
      },
    },
    {
      hello: 1,
    },
  ],
  value: 1,
} as const;

structureType(structureType1);

// ==================
// ЗАДАНИЕ! Обновите тип прошлой функции, так что бы можно было добавить несуществующие параметры
// при создании объекта в момент вызова
// см index signature
interface Structure2 {
  arr: readonly [unknown, { obj: { name: string; [key: string]: unknown } }, ...unknown[]];
  [key: string]: unknown
}

function structureType2(value: Structure2): string {
  return value.arr[1].obj.name;
}

structureType2({
  arr: [
    1,
    {
      obj: {
        name: "asd",
        value: "",
      },
    },
    {
      hello: 1,
    },
  ],
  value: 1,
});

// ==================
// ЗАДАНИЕ! При пересечении с каким типом всегда будет получаться изначальный тип?

type TestIntersection<T> = T & unknown;
type ResTestIntersection = TestIntersection<string>; // res should be string

// ==================
// ЗАДАНИЕ! При пересечении с каким типом будет всегда never?

type TestIntersection2<T> = T & never;
type ResTestIntersection2 = TestIntersection2<string>; // res should be never

// ==================
// ЗАДАНИЕ! При объединении с каким типом всегда будет получаться тот же самый тип?

type TestUnion<T> = T | never;
type ResTestUnion = TestUnion<number>; // res should be number

// ==================
// ЗАДАНИЕ! При объединении с каким типом всегда будет получаться unknown
type TestUnion2<T> = T | unknown;
type ResTestUnion2 = TestUnion2<string>; // res should be unknown

// ==================
// ЗАДАНИЕ! Как с помощью пересечения можно отфильтровать все числа

type FilterIntersection<T> = T & string
type ResFilterIntersection = FilterIntersection<1 | 2 | "value" | "b">; // res should be 'value' | 'b'

// ==================
// ЗАДАНИЕ! Как с помощью пересечения можно достать событие по типу из юниона

type FindEventByIntersection<T, K> = T & {type: K};

type Event1 = { type: "user-created"; data: { name: string } };
type Event2 = { type: "user-deleted"; data: { id: number } };

type ResFindEventByIntersection = FindEventByIntersection<
  Event1 | Event2,
  "user-deleted"
>; // Res should assignable Event2

// ==================
// ЗАДАНИЕ! Напишите такой тип что бы функцию можно было вызвать 3 разными способами

function structureUnion(...params: unknown[]) {}

structureUnion({ isOne: true }, 1);
// @ts-expect-error Здесь ошибка, так как при isOne только один дополнительный аргумент
structureUnion({ isOne: true }, 1, 2);
structureUnion({ isTwo: true }, 1, 2);
structureUnion({ isThree: true }, 1, 2, 3);

// ==================
// ЗАДАНИЕ! Без использования any напишите тип функции, к которому можно присвоить любой callback

function anyCallback(cb: (...args: never[]) => unknown) {}

anyCallback((a: number) => 1);
anyCallback((a: string, b: number) => "str");

// ==================
// ЗАДАНИЕ! Какой тип нужно передать в параметр типа Ref что бы в этот тип был asssignable любой другой реф?

type Ref<T> = { current: T } | ((value: T) => void);

function storeRef<T>(anyRef: Ref<T>) {}

const numberRef = {} as Ref<number>;
const stringRef = {} as Ref<string>;

storeRef(numberRef);
storeRef(stringRef);
