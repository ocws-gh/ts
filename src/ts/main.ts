///<reference path="../../typings/index.d.ts" />

import * as sub from './sub';

console.log(sub.Sub());

import * as $ from "jquery";

$(() => {console.log("HAHAHA")})

import {Slide} from "./slide";
import "bxslider";
$(() => {
    let slide = new Slide();
    slide.create();

});


// const j = $('body');
// $(function(){
//   $('body').html('TypeScript');
// });

// let dname:string = 'Hayashi';
// const b ='My name is';

// // バッククオートで全部囲んでもいいし、下のように分けてもいい。
// const text:string = 'My name is'+`${dname}`;
// console.log(text);
// console.log(name);

// for (var i =0; i < 5; i++) {
//   setTimeout(function() {console.log(i), i * 100});
// }
// for (let i =0; i < 5; i++) {
//   setTimeout(function() {console.log(i), i * 100});
// }

// function sum(a:number, b:number):number {
//   console.log(a + b);
// }
// sum(1, 2);