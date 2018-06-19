'use strict';

  class HashStorage {
	constructor() {
		this._drinkStorage = {};
	}
	addValue(key, value) {
		this._drinkStorage[key] = value;
	}
	getValue(key) {
		if (this._drinkStorage[key] == undefined) {
			alert("такого напитка нету в хранилище")
		} else {
			alert(`напиток: ${key}, 
алкогольный: ${this._drinkStorage[key][0]}, 
рецепт: ${this._drinkStorage[key][1]}`)
		}
	}
	deleteValue(key) {
		if (this._drinkStorage[key] != undefined) {
			delete this._drinkStorage[key]
			alert("удалилось")
		} else {
			alert("такого напитка нету в хранилище")
		}
	}
	getKeys() {
		if (Object.keys(this._drinkStorage).length == 0) {
			alert("В хранилище нету напитков")
		} else {
			return Object.keys(this._drinkStorage).join(`, `);
		}
	}
}
let x = new HashStorage()
var q,
	w,
	e,
	t,
	del;
$("#add").click(function go() {
	
	q = p1()
	function p1(){
		q = prompt("Введите имя напитка", "")
	if(q==="" || q==undefined){
		p1()
	}
	else{
	return q	
	}
	
	}
	
	
	w = hp()
	function hp() {
		let r = confirm("Ваш напиток алкогольный ?")
		if (r == true) {
			return "Да"
		} else {
			return "Нет"
		}
	}
	e = p2()
	function p2(){
		e = prompt(" Введите ваш рецепт напитка", "")
	if(e==="" || e==undefined){
		p2()
	}
	else{
	return e	
	}
	
	}
	
	x.addValue(q, [w, e])
})
$("#showOne").click(function get() {
	t = prompt("Введите имя напитка который вы хотите найти", "")
	x.getValue(t)
})
$("#delete").click(function dell() {
	del = prompt("Введите имя напитка который вы хотите удалить")
	x.deleteValue(del)
})
$("#showAll").click(function show() {
	$("#modal").html(x.getKeys())
})