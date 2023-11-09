/*import $ from 'jquery';
import sum from './utils/sum/sum';

console.log('Ready for coding');

console.log('Body jQuery node:', $('body'));
console.log('Body javascript node:', document.querySelector('body'));
console.log('2 + 3 =', sum(2, 3));*/

import { type } from "jquery";

//
const subtraction = (a: number, b: number): number => a - b;
console.log("--- Subtract ---");
console.log(subtraction(1,2));
console.log(subtraction(10,5));
console.log(subtraction(99,1));
//
const sum = (a: number, b: number): number => a + b;
console.log("--- Sum ---");
console.log(sum(1,2));
console.log(sum(10,5));
console.log(sum(99,1));
//
const valueOf = (value: any): any => typeof value;
console.log("--- Type ---");
console.log(valueOf(1));
console.log(valueOf(false));
console.log(valueOf({}));
console.log(valueOf(null));
console.log(valueOf('string'));
console.log(valueOf(['array']));
//
const equalAndType = (a: any, b: any): boolean => (a === b);
console.log("--- equalAndType ---");
console.log(equalAndType(2, 3));
console.log(equalAndType(3, 3));
console.log(equalAndType(1, '1'));
console.log(equalAndType('10', '10'));
//
const nthOf = (a: string, b: number): string => a.charAt(b-1);
console.log("--- nthOf ---");
console.log(nthOf('abcd',1));
console.log(nthOf('zyxbwpl',5));
console.log(nthOf('gfedcba',3));
//
const removeFirstThree = (a: string): string => a.substring(3);
console.log("--- removeFirstThree ---");
console.log(removeFirstThree('abcdefg'));
console.log(removeFirstThree('1234'));
console.log(removeFirstThree('fgedcba'));
//
const lastThree = (a: string): string => a.substring(a.length - 3);
console.log("--- lastThree ---");
console.log(lastThree('abcdefg'));
console.log(lastThree('1234'));
console.log(lastThree('fgedcba'));
//
const firstThree = (a: string): string => a.substring(0, 3);
console.log("--- firstThree ---");
console.log(firstThree('abcdefg'));
console.log(firstThree('1234'));
console.log(firstThree('fgedcba'));
//
const firstHalf = (a: string): string => a.substring(0, a.length/2);
console.log("--- firstHalf ---");
console.log(firstHalf('abcdefgh'));
console.log(firstHalf('1234'));
console.log(firstHalf('gedcba'));
//
const removeLastThree = (a: string): string => a.slice(0, -3);
console.log("--- removeLastThree ---");
console.log(removeLastThree('abcdefg'));
console.log(removeLastThree('1234'));
console.log(removeLastThree('fgedcba'));
//
const bPercentOfA = (a: number, b: number): number => (b*100)/a;
console.log("--- bPercentOfA ---");
console.log(bPercentOfA(100, 50));
console.log(bPercentOfA(10,1));
console.log(bPercentOfA(500,25));
//
const mathFunction = (a: number, b: number, c:number, d: number, e:number, f: number): number => Math.pow(((a+b)-c)*d/e, f);
console.log("--- mathFunction ---");
console.log(mathFunction(6,5,4,3,2,1));
console.log(mathFunction(6,2,1,4,2,3));
console.log(mathFunction(2,3,6,4,2,3));
//
const isEven = (a: number): boolean => (a % 2 == 0);
console.log("--- isEven ---");
console.log(isEven(10));
console.log(isEven(-4));
console.log(isEven(5));
console.log(isEven(-111));
//
const countString = (a: string, b: string): number => b.split(a).length - 1;
console.log("--- countString ---");
console.log(countString('m', 'how many times does the character occur in this sentence?'));
console.log(countString('h', 'how many times does the character occur in this sentence?'));
console.log(countString('?', 'how many times does the character occur in this sentence?'));
console.log(countString('z', 'how many times does the character occur in this sentence?'));
//
const isWholeNumber = (a: number): boolean => (a % 1 == 0);
console.log("--- isWholeNumber ---");
console.log(isWholeNumber(4));
console.log(isWholeNumber(1.123));
console.log(isWholeNumber(1048));
console.log(isWholeNumber(10.48));
//
const mathIfFunction = (a: number, b: number): number => a<b ? a/b : a*b;
console.log("--- mathIfFunction ---");
console.log(mathIfFunction(10, 100));
console.log(mathIfFunction(90, 45));
console.log(mathIfFunction(8, 20));
console.log(mathIfFunction(2, 0.5));
//
const strIfFunction = (a: string, b: string): string => {
    let c: string;
    a.includes(b) ? c = b + a : c = a + b;
    return c;
}
console.log("--- strIfFunction ---");
console.log(strIfFunction('cheese', 'cake'));
console.log(strIfFunction('lips', 's'));
console.log(strIfFunction('Java', 'script'));
console.log(strIfFunction(' think, therefore I am', 'I'));
//
const roundToTwo = (a: number): number => Math.round(a * 100) / 100;
console.log("--- roundToTwo ---");
console.log(roundToTwo(2.12397));
console.log(roundToTwo(3.136));
console.log(roundToTwo(1.12397));
console.log(roundToTwo(26.1379));
//
const numberToArray = (a: number): number[] => Array.from(String(a), Number);
console.log("--- numberToArray ---");
console.log(numberToArray(10));
console.log(numberToArray(931));
console.log(numberToArray(193278));
//
const fixString = (a: string, b: string): string => {
    let arr: string[] = b.split("");
    return (a + arr.reverse().join("").replace("%", ""));
}
console.log("--- fixString ---");
console.log(fixString('java', 'tpi%rcs'));
console.log(fixString('c%ountry', 'edis'));
console.log(fixString('down', 'nw%ot'));
//
const primeFunction = (a: number): number => {
    const checkPrime = (x: number): boolean => {
        for(let i = 2; i < x; i++) {
            if (x % i === 0) {
                return false;
            }
        }
        return true;
    }
    if (checkPrime(a)) {
        return a
    } else {
        while (checkPrime(a) === false) {
            a++
        }
    }
    return a;
}
console.log("--- primeFunction ---");
console.log(primeFunction(38));
console.log(primeFunction(7));
console.log(primeFunction(115));
console.log(primeFunction(2000));
//
const divisionFunction = (x: number, y: number): number => {
    const checkDividable = (a: number, b: number): boolean => (a % b == 0);
    if (checkDividable(x, y)) {
        return x
    } else {
        while (checkDividable(x, y) === false) {
            x++
        }
    }
    return x;
}
console.log("--- divisionFunction ---");
console.log(divisionFunction(1, 23));
console.log(divisionFunction(23, 23));
console.log(divisionFunction(7, 3));
console.log(divisionFunction(-5, 7));
//
const insertAfterEvery3rdCharacter = (a: string, b: string): string => {
    let result: string = '';
    let count: number = 0;
    for (let i = a.length - 1; i >= 0; i--) {
        result = a[i] + result;
        count++;

        if (count === 3 && i !== 0) {
            result = b + result;
            count = 0;
        }
    }
    return result;
}
console.log("--- insertAfterEvery3rdCharacter ---");
console.log(insertAfterEvery3rdCharacter('1234567','.'));
console.log(insertAfterEvery3rdCharacter('abcde','$'));
console.log(insertAfterEvery3rdCharacter('zxyzxyzxyzxyzxyz','w'));
//
const incrementLetters = (a: string): string => {
    let result = '';
    for (let i = 0; i < a.length; i++) {
        const char = a[i];
        // Check if the character is a lowercase letter
        if (/^[a-z]$/.test(char)) {
            const nextCharCode = char.charCodeAt(0) + 1;
            // Wrap around if we reach 'z'
            const newChar = nextCharCode <= 122 ? String.fromCharCode(nextCharCode) : 'a';
            result += newChar;
        } else {
            // If the character is not a lowercase letter, leave it unchanged
            result += char;
        }
    }
    return result;
}
console.log("--- incrementLetters ---");
console.log(incrementLetters('bnchmf'));
console.log(incrementLetters('bgddrd'));
console.log(incrementLetters('sdrshmf'));
//
const getNthElementOfArray = (a: number[], b: number): number => a[b-1];
console.log("--- getNthElementOfArray ---");
console.log(getNthElementOfArray([1,2,3,4,5],3));
console.log(getNthElementOfArray([10,9,8,7,6],5));
console.log(getNthElementOfArray([7,2,1,6,3],1));
//
const removeFirstThreeArray = (a: number[]): number[] => a.slice(3);
console.log("--- removeFirstThreeArray ---");
console.log(removeFirstThreeArray([1,2,3,4]));
console.log(removeFirstThreeArray([5,4,3,2,1,0]));
console.log(removeFirstThreeArray([99,1,1]));
//
const removeLastThreeArray = (a: number[]): number[] => a.slice(-3);
console.log("--- removeLastThreeArray ---");
console.log(removeLastThreeArray([1,2,3,4]));
console.log(removeLastThreeArray([5,4,3,2,1,0]));
console.log(removeLastThreeArray([99,1,1]));
//
const firstThreeArray = (a: number[]): number[] => a.slice(0, 3);
console.log("--- firstThreeArray ---");
console.log(firstThreeArray([1,2,3,4]));
console.log(firstThreeArray([5,4,3,2,1,0]));
console.log(firstThreeArray([99,1,1]));
//
const lastNArray = (a: number[], b: number): number[] => a.slice(-b);
console.log("--- lastNArray ---");
console.log(lastNArray([1, 2, 3, 4, 5], 2));
console.log(lastNArray([1, 2, 3], 6));
console.log(lastNArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
//
const filterArray = (a: any[], b: any): any[] => a.filter(item => item !== b);
console.log("--- filterArray ---");
console.log(filterArray([1,2,3], 2));
console.log(filterArray([1,2,'2'], '2'));
console.log(filterArray([false,'2',1], false));
console.log(filterArray([1,2,'2',1], 1));
//
const arrayLength = (a: number[]): number => a.length;
console.log("--- arrayLength ---");
console.log(arrayLength([1,2,2,4]));
console.log(arrayLength([9,9,9]));
console.log(arrayLength([4,3,2,1,0]));
//
const arrayNegatives = (a: number[]): number => a.filter(num => num < 0).length;
console.log("--- arrayNegatives ---");
console.log(arrayNegatives([1,-2,2,-4]));
console.log(arrayNegatives([0,9,1]));
console.log(arrayNegatives([4,-3,2,1,0]));
//
const arraySorted = (a: number[]): number[] => a.sort().reverse();
console.log("--- arraySorted ---");
console.log(arraySorted([1,3,2]));
console.log(arraySorted([4,2,3,1]));
//
const arraySortedAlphabetically = (a: string[]): string[] => a.sort();
console.log("--- arraySortedAlphabetically ---");
console.log(arraySortedAlphabetically(['b', 'c', 'd', 'a']));
console.log(arraySortedAlphabetically(['z', 'c', 'd', 'a', 'y', 'a', 'w']));
//
const arrayAverage = (a: number[]): number => a.reduce((acc, curr) => acc + curr, 0) / a.length;
console.log("--- arrayAverage ---");
console.log(arrayAverage([10,100,40]));
console.log(arrayAverage([10,100,1000]));
console.log(arrayAverage([-50,0,50,200]));
//
const arrayLongestString = (a: string[]): string => {
    let longest: string = '';
    for(const str of a) {
        if (str.length > longest.length) {
            longest = str;
        }
    }
    return longest;
}
console.log("--- arrayLongestString ---");
console.log(arrayLongestString(['help', 'me']));
console.log(arrayLongestString(['I', 'need', 'candy']));
//
const arrayAllEqual = (a: any[]): boolean => {
    if (a.length === 0) {
        return true;
    }
    const firstElement = a[0];
    for (const element of a) {
        if (element !== firstElement) {
            return false;
        }
    }
    return true;
}
console.log("--- arrayAllEqual ---");
console.log(arrayAllEqual([true, true, true, true]));
console.log(arrayAllEqual(['test', 'test', 'test']));
console.log(arrayAllEqual([1,1,1,2]));
console.log(arrayAllEqual(['10',10,10,10]));
//
const combineArrays = (...a:  any[][]): any[] => a.reduce((acc, curr) => acc.concat(curr), []);
console.log("--- combineArrays ---");
console.log(combineArrays([1, 2, 3], [4, 5, 6]));
console.log(combineArrays(['a', 'b', 'c'], [4, 5, 6]));
console.log(combineArrays([true, true], [1, 2], ['a', 'b']));
//
interface array {
    a: number;
    b: number;
}
const sortByPropertyB = (a: array[]): array[] => a.slice().sort((a, b) => a.b - b.b);
console.log("--- sortByPropertyB ---");
console.log(sortByPropertyB([{a:1,b:2},{a:5,b:4}]));
console.log(sortByPropertyB([{a:2,b:10},{a:5,b:4}]));
console.log(sortByPropertyB([{a:1,b:7},{a:2,b:1}]));
//
const mergeAndSort = (a: number[], b: number[]): number[] => [...new Set([...a, ...b])].sort((a, b) => a - b);
console.log("--- mergeAndSort ---");
console.log(mergeAndSort([1, 2, 3], [3, 4, 5]))
console.log(mergeAndSort([-10, 22, 333, 42], [-11, 5, 22, 41, 42]))
//
const sumElementsGreaterThanB = (a: number[], b: number): number => a.reduce((sum, element) => element > b ? sum + element : sum, 0);
console.log("--- sumElementsGreaterThanB ---");
console.log(sumElementsGreaterThanB([1, 2, 3, 4, 5, 6, 7], 2));
console.log(sumElementsGreaterThanB([-10, -11, -3, 1, -4], -3));
console.log(sumElementsGreaterThanB([78, 99, 100, 101, 401], 99));
//
const generateArray = (a: number, b: number): number[] => {
    const result: number[] = [];
    for(let i = a; i <= b; i++) {
        result.push(i);
    }
    return result;
}
console.log("--- generateArray ---");
console.log(generateArray(2, 10));
console.log(generateArray(1, 3));
console.log(generateArray(-5, 5));
console.log(generateArray(2, 7));
//
const groupByFirstLetter = (a: string[]): Record<string, string[]>  => {
    const result: Record<string, string[]> = {};
    for (const str of a) {
        const firstLetter = str[0].toLowerCase();
        if (!result[firstLetter]) {
            result[firstLetter] = [];
        }
        result[firstLetter].push(str);
    }
    return result;
}
console.log("--- groupByFirstLetter ---");
console.log(groupByFirstLetter(['Alf', 'Alice', 'Ben']));
console.log(groupByFirstLetter(['Ant', 'Bear', 'Bird']));
console.log(groupByFirstLetter(['Berlin', 'Paris', 'Prague']));
//
const processArray = (a: any[], b: number): any[] => {
    const newArray = [...a];
    if (b < 6) {
        newArray.unshift(0);
    } else {
        newArray.unshift(b);
    }
    return newArray;
}
console.log("--- processArray ---");
console.log(processArray([1,2,3], 6));
console.log(processArray(['a','b'], 2));
console.log(processArray([null,false], 11));
//
const saveEveryNthElement = (a: any[], b: number): any[] => {
    const result: any[] = [];
    for (let i = b - 1; i < a.length; i += b) {
        result.push(a[i]);
    }
    return result;
}
console.log("--- saveEveryNthElement ---");
console.log(saveEveryNthElement([1,2,3,4,5,6,7,8,9,10],3));
console.log(saveEveryNthElement([10,9,8,7,6,5,4,3,2,1],5));
console.log(saveEveryNthElement([7,2,1,6,3,4,5,8,9,10],2));
//
interface location {
    continent: string;
    country: string;
}
const getCountryValue = (a: location): string => a.country;
console.log("--- getCountryValue ---");
console.log(getCountryValue({  continent: 'Asia',  country: 'Japan'}));
console.log(getCountryValue({  country: 'Sweden',  continent: 'Europe'}));
//
interface MyObject {
    'prop-2': any;
    one: any;
    prop: any;
}
const getProp2Value = (a: MyObject): string => a['prop-2'];
console.log("--- getProp2Value ---");
console.log(getProp2Value({
    one: 1, 'prop-2': 2,
    prop: undefined
}));
console.log(getProp2Value({
    'prop-2': 'two', prop: 'test',
    one: undefined
}));
//
interface MyObject1 {
    [key: string]: any;
}
const getValueByKey = (a: MyObject1, b: string): any => a[b];
console.log("--- getValueByKey ---");
console.log(getValueByKey({  continent: 'Asia',  country: 'Japan'}, 'continent'));
console.log(getValueByKey({  country: 'Sweden',  continent: 'Europe'}, 'country'));
//
const hasProperty = (a: object, b: string): boolean => a.hasOwnProperty(b);
console.log("--- hasProperty ---");
console.log(hasProperty({a:1,b:2,c:3},'b'));
console.log(hasProperty({x:'a',y:'b',z:'c'},'a'));
console.log(hasProperty({x:'a',y:'b',z:'c'},'z'));
//
const createObjectWithKey = (a: string): { key: string } => {
    const obj = { key: a };
    return obj;
}
console.log("--- createObjectWithKey ---");
console.log(createObjectWithKey('a'));
console.log(createObjectWithKey('z'));
console.log(createObjectWithKey('b'));
//
const createObjectWithProperties = (a: string, b: string): { [key: string]: string } => {
    const obj = { [a]: b };
    return obj;
}
console.log("--- createObjectWithProperties ---");
console.log(createObjectWithProperties('a','b'));
console.log(createObjectWithProperties('z','x'));
console.log(createObjectWithProperties('b','w'));
//
const createObjectFromArrays = (a: any[], b: any[]): { [key: string]: any } => {
    const result: { [key: string]: any } = {};
    for (let i = 0; i < a.length; i++) {
        result[a[i]] = b[i];
    }
    return result;
}
console.log("--- createObjectFromArrays ---");
console.log(createObjectFromArrays(['a','b','c'],[1,2,3]));
console.log(createObjectFromArrays(['w','x','y','z'],[10,9,5,2]));
console.log(createObjectFromArrays([1,'b'],['a',2]));
//
const getObjectKeys = (a: object): string[] => Object.keys(a);
console.log("--- getObjectKeys ---");
console.log(getObjectKeys({a:1,b:2,c:3}));
console.log(getObjectKeys({j:9,i:2,x:3,z:4}));
console.log(getObjectKeys({w:15,x:22,y:13}));
//
const sumObjectValues = (a: { [key: string]: number }): number => {
    const values = Object.values(a);
    return values.reduce((sum, value) => sum + value, 0);
}
console.log("--- sumObjectValues ---");
console.log(sumObjectValues({a:1,b:2,c:3}));
console.log(sumObjectValues({j:9,i:2,x:3,z:4}));
console.log(sumObjectValues({w:15,x:22,y:13}));
//
const omitPropertyB = (a: { [key: string]: any }): { [key: string]: any } => {
    const result: { [key: string]: any } = {};
    for (const key in a) {
        if (key !== 'b') {
            result[key] = a[key];
        }
    }
    return result;
}
console.log("--- omitPropertyB ---");
console.log(omitPropertyB({ a: 1, b: 7, c: 3 }));
console.log(omitPropertyB({ b: 0, a: 7, d: 8 }));
console.log(omitPropertyB({ e: 6, f: 4, b: 5, a: 3 }));
//
interface MyObject2 {
    a: any;
    b: any;
    c: any;
    d: any;
    e: any;
}
const mergeAndCorrect = (a: MyObject2, b: { [key: string]: any }): MyObject2 => {
    const mergedObject = { ...a, ...b };
    mergedObject.d = mergedObject.b;
    delete mergedObject.b;
    return mergedObject;
}
console.log("--- mergeAndCorrect ---");
console.log(mergeAndCorrect({
    a: 1, b: 2,
    c: undefined,
    d: undefined,
    e: undefined
}, { c: 3, b: 4, e: 5 }));
console.log(mergeAndCorrect({
    a: 5, b: 4,
    c: undefined,
    d: undefined,
    e: undefined
}, { c: 3, b: 1, e: 2 }));
//
const multiplyObjectValues = (a: { [key: string]: number }, b: number): { [key: string]: number } => {
    const result: { [key: string]: number } = {};
    for (const key in a) {
        if (a.hasOwnProperty(key)) {
            result[key] = a[key] * b;
        }
    }
    return result;
}
console.log("--- multiplyObjectValues ---");
console.log(multiplyObjectValues({a:1,b:2,c:3},3));
console.log(multiplyObjectValues({j:9,i:2,x:3,z:4},10));
console.log(multiplyObjectValues({w:15,x:22,y:13},6));
//
const swapKeysAndValues = (obj: { [key: string]: any }): { [key: string]: any } => {
    const result: { [key: string]: any } = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[obj[key]] = key;
        }
    }
    return result;
}
console.log("--- swapKeysAndValues ---");
console.log(swapKeysAndValues({z:'a',y:'b',x:'c',w:'d'}));
console.log(swapKeysAndValues({2:'a',4:'b',6:'c',8:'d'}));
console.log(swapKeysAndValues({a:1,z:24}));
//
const replaceEmptyStringsWithNull = (obj: { [key: string]: string }): { [key: string]: string | null } => {
    const result: { [key: string]: string | null } = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            result[key] = value.trim() === '' ? null : value;
        }
    }
    return result;
}
console.log("--- replaceEmptyStringsWithNull ---");
console.log(replaceEmptyStringsWithNull({ a: 'a', b: 'b', c: '' }));
console.log(replaceEmptyStringsWithNull({ a: '', b: 'b', c: ' ', d: 'd' }));
console.log(replaceEmptyStringsWithNull({ a: 'a', b: 'b ', c: ' ', d: '' }));
//
interface PersonalInfo {
    fn?: string;
    ln?: string;
    size?: number;
    weight?: number;
    age: number;
    email: string;
}
const processPersonalInfo = (info: PersonalInfo): { fn?: string, ln?: string, size?: string, weight?: string } => {
    const result: { fn?: string, ln?: string, size?: string, weight?: string } = {};
    if (info.fn) {
        result.fn = info.fn;
    }
    if (info.ln) {
        result.ln = info.ln;
    }
    if (info.size) {
        result.size = info.size.toString() + ' cm';
    }
    if (info.weight) {
        result.weight = info.weight.toString() + ' kg';
    }
    return result;
}
console.log("--- processPersonalInfo ---");
console.log(processPersonalInfo({
    fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67,
    email: ""
}));
console.log(processPersonalInfo({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}));
console.log(processPersonalInfo({
    fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71,
    email: ""
}));
console.log(processPersonalInfo({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'}));
//
interface MyObject3 {
    [key: string]: any;
}
const addContinentProperty = (arr: MyObject3[], continent: string): MyObject3[] => arr.map(obj => ({ ...obj, continent }));
console.log("--- addContinentProperty ---");
console.log(addContinentProperty([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'));
console.log(addContinentProperty([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'));
//
const countOccurrences = (arr: number[]): { [key: number]: number } => {
    const result: { [key: number]: number } = {};
    for (const num of arr) {
        if (result[num]) {
            result[num]++;
        } else {
            result[num] = 1;
        }
    }
    return result;
}
console.log("--- countOccurrences ---");
console.log(countOccurrences([1,2,2,3]));
console.log(countOccurrences([9,9,9,99]));
console.log(countOccurrences([4,3,2,1]));
//
const areDatesEqual = (date1: Date, date2: Date): boolean => date1.getTime() === date2.getTime();
console.log("--- areDatesEqual ---");
console.log(areDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
console.log(areDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));
console.log(areDatesEqual(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));
//
const getDaysDifference = (date1: Date, date2: Date): number => {
    const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
    const diffMilliseconds = Math.abs(date1.getTime() - date2.getTime());
    return Math.round(diffMilliseconds / oneDay);
}
console.log("--- getDaysDifference ---");
console.log(getDaysDifference(new Date('2020-06-11'), new Date('2020-06-01')));
console.log(getDaysDifference(new Date('2000-01-01'), new Date('2020-06-01')));
//
const areDatesOnSameDay = (date1: Date, date2: Date): boolean => {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
}
console.log("--- areDatesOnSameDay ---");
console.log(areDatesOnSameDay(new Date('2000/01/01'), new Date('2000/01/01')));
console.log(areDatesOnSameDay(new Date('2000/01/01'), new Date('2000/01/02')));
console.log(areDatesOnSameDay(new Date('2001/01/01'), new Date('2000/01/01')));
console.log(areDatesOnSameDay(new Date('2000/11/01'), new Date('2000/01/01')));
//
const mergeTwoArraysSpread = (arr1: number[], arr2: number[]): number[] => [...arr1, ...arr2];
console.log("--- mergeTwoArraysSpread ---");
console.log(mergeTwoArraysSpread([1, 2], [3, 4]) );
console.log(mergeTwoArraysSpread([1, 2], [3, 4, 5, 6]) );
//
const appendStringToArraySpread = (arr: any[], str: string): any[] => [...arr, str];
console.log("--- appendStringToArray ---");
console.log(appendStringToArraySpread(['Apple', 'Orange', 'Banana'], 'Kiwi'));
//
const prependStringToArraySpread = (arr: any[], str: string): any[] => [str, ...arr];
console.log("--- prependStringToArray ---");
console.log(prependStringToArraySpread(['Apple', 'Orange', 'Banana'], 'Kiwi'));
//
function mergeObjectsSpread(obj1: object, obj2: object): object {
    return {...obj1, ...obj2};
}
console.log("--- mergeObjectsSpread ---");
console.log(mergeObjectsSpread({ a:1, b:2 }, { c:3, d:4 }));
console.log(mergeObjectsSpread({ a:1, b:2 }, { c:3, d:4, e:5, f:6 }) );
//
function addFavoriteMovieSpread(obj: { [key: string]: any }, movie: string): { [key: string]: any } {
    return { ...obj, favoriteMovie: movie };
}
console.log("--- addFavoriteMovieSpread ---");
console.log(addFavoriteMovieSpread({ eyeColor: 'green', age: 10 }, 'Garfield') );
console.log(addFavoriteMovieSpread({ eyeColor: 'blue', age: 15 }, 'Twilight') );
