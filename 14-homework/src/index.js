import {countLetterFunc} from "../../03-homework/countLetterFunc.js";
import {getPairsWithThemesFunc} from "../../04-homework/getPairsWithThemesFunc.js";
import {countPositiveNumbersFunc} from "../../05-homework/countPositiveNumbersFunc.js";
import {getBestStudentFunc} from "../../06-homework/getBestStudentFunc.js";
import {getMiddleTaxesFunc} from "../../07-homework/getMiddleTaxesFunc.js";
import {Student} from "../../08-homework/student";
import {generateRandomColorFunc} from "../../09-homework/generateRandomColorFunc.js";
import {getRandomChineseFunc} from "../../11-homework/getRandomChineseFunc";
import {getCharactersByFilmFunc} from "../../12-homework/getCharactersByFilmFunc.js";
import css from "../src/styles.css"
import webpackLogo from "../../img/webpack_img.png";
const bodyElement = document.querySelector('body');

countLetterFunc(); //homework#3
getPairsWithThemesFunc(); //homework#4
countPositiveNumbersFunc(); //homework#5
getBestStudentFunc(); //homework#6
getMiddleTaxesFunc(); //homework#7
const student = new Student("Академія", 1, "Просто Студент");
const element = document.createElement('div');
element.className = 'item';
element.innerHTML = `Homework#8 -> ${student.getInfo()}`;
bodyElement.append(element); //homework#8
generateRandomColorFunc(); //homework#9
getRandomChineseFunc(); //homwork#11
getCharactersByFilmFunc(); //homework#12