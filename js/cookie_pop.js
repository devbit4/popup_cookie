// document.cookie="쿠키이름=쿠키값; path=/; expires = 쿠키가 삭제될 날짜";


function setCookie(name, val, time) {
	const today = new Date();
	const date = today.getDate();
	today.setDate(date + time);

	const dueDate = today.toGMTString();

	document.cookie = `${name}=${val}; path=/; expires=${dueDate}`;
}

const popup = document.querySelector('#popup');
const btnClose = popup.querySelector('.close');
const del = document.querySelector(".del");
const view = document.querySelector(".view");

del.addEventListener("click", (e) => {
	e.preventDefault();

	setCookie("today", "done", 0)
	popup.style.display = "block"
})

view.addEventListener("click", (e) => {
	e.preventDefault();
	console.log(document.cookie);
})


btnClose.addEventListener('click', (e) => {
	e.preventDefault();

	let ck = popup.querySelector('input[type=checkbox]');
	console.log(ck.checked);
	if (ck.checked === true) {
		setCookie("today", "done", 1)
		popup.style.display = 'none';
	} else {
		popup.style.display = "none"
	}
});

isCookie = document.cookie.indexOf("today=done");
console.log(isCookie);

if (isCookie == -1) {
	console.log(document.cookie)
	console.log("쿠키없음")
	popup.style.display = "block"
} else {
	console.log(isCookie)
	console.log("쿠키있음")
	popup.style.display = "none"
}

// const popup = document.querySelector("#popup");
// const btnClose = popup.querySelector(".close");
// const btnDel = document.querySelector(".del");
// const btnView = document.querySelector(".view");

// isCookie = document.cookie.indexOf("popup=done");
// console.log(isCookie);
// let id_name = popup.getAttribute("id");

// if (isCookie === -1) {
// 	console.log("쿠키없음");
// 	popup.style.display = "block";
// } else {
// 	console.log("쿠키있음");
// 	popup.style.display = "none";
// }

// btnClose.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	let isChecked = popup.querySelector("input[type=checkbox]").checked;
// 	console.log(isChecked);
// 	let id_name = popup.getAttribute("id");

// 	if (isChecked) {
// 		setCookie(id_name, "done", 1);
// 		popup.style.display = "none";
// 	} else {
// 		popup.style.display = "none";
// 	}
// });

// btnDel.addEventListener("click", (e) => {
// 	e.preventDefault();

// 	setCookie(id_name, "done", 0);
// 	console.log("쿠키 삭제 완료");
// });

// btnView.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	console.log(document.cookie);
// });

// function setCookie(cookieName, cookieValue, time) {
// 	let today = new Date();
// 	console.log(today);
// 	let date = today.getDate();
// 	today.setDate(date + time);

// 	const dueDate = today.toGMTString();

// 	document.cookie = `${cookieName}=${cookieValue}; path=/; expires=${dueDate}`;
// }

/*
cookie

쿠키 확인
document.cookie

쿠키 생성

*/

// const popup = document.querySelector("#popup");
// const btnClose= popup.querySelector(".close");
// const btnDel = document.querySelector(".del");
// const btnView = document.querySelector(".view");

// const isCookie = document.cookie.indexOf("popup=done");
// console.log(isCookie); //0

// //쿠키가 없다면
// if(isCookie == -1){
//    console.log("쿠키없음");
//    popup.style.display = "block";
// }else{
//    //쿠키가 있다면
//    console.log("쿠키있음");
//    popup.style.display = "none";
// }

// //쿠키 삭제 버튼을 클릭했을 때
// btnDel.addEventListener("click", e=>{
//    e.preventDefault();

//    // 쿠키생성함수의 time값을 0으로 설정하면 현재시간 이후로 만료되기 때문에 쿠키 삭제됨
//    setCookie("popup", "done", 0);
// });

// // btnView.addEventListener("click", e=>{
// //    e.preventDefault();
// //    console.log(document.cookie);
// // });

// //팝업의 close 버튼을 클릭했을 때
// btnClose.addEventListener("click", e=>{
//    e.preventDefault();

//    //팝업의 체크박스에 체크가 되어 있는지 판별하여 저장
//    let isChecked = popup.querySelector("input[type=checkbox]").checked;

//    //체크가 되어 있다면 setCookie 함수 실행
//    if(isChecked) setCookie("popup", "done", 1);
//    //팝업은 안보이게 처리
//    popup.style.display = "none";
// });

// //쿠키 생성 함수 정의
// function setCookie(cookieName, cookieValue, time){
//    //현재 시간을 구해서
//    const today = new Date();
//    //날짜만 뽑아 옴
//    const date = today.getDate();
//    //유효기간 설정을 위한 날짜 세팅 - 현재날짜에서 time만큼 더함
//    today.setDate(date + time);

//    const duedate = today.toGMTString(); //GMT시간으로 변환

//    document.cookie = `${cookieName}=${cookieValue}; path=/; expires=${duedate}`;
// }
