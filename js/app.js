
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		//customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());


var qus = document.querySelectorAll('.qustions__item-plus')

qus.forEach(function (el) {
	el.onclick = function () {
		el.classList.toggle("active");
		el.previousElementSibling.classList.toggle("active");
	}
});





if (window.innerWidth > 737) {

	let tl1 = gsap.timeline({
		scrollTrigger: {
			trigger: ".cases__item-1",   // pin the trigger element while active
			start: "top center",

		}
	});

	tl1.from(".cases__item-1", { duration: 1.3, ease: "power4.out", opacity: 0.2 }, "-=.3")
		.to(".cases__dop span", { duration: 1.3, ease: "power4.out", height: 350 }, "-=.6")




	let tl2 = gsap.timeline({
		scrollTrigger: {
			trigger: ".cases__item-2",   // pin the trigger element while active
			start: "top center",

		}
	});

	tl2.from(".cases__item-2", { duration: 1.3, ease: "power4.out", opacity: 0.2 }, "-=.3")
		.to(".cases__dop span", { duration: 1.3, ease: "power4.out", height: 600 }, "-=.6")


	let tl3 = gsap.timeline({
		scrollTrigger: {
			trigger: ".cases__item-3",   // pin the trigger element while active
			start: "top center",

		}
	});

	tl3.from(".cases__item-3", { duration: 1.3, ease: "power4.out", opacity: 0.2 }, "-=.3")
		.to(".cases__dop span", { duration: 1.3, ease: "power4.out", height: 950 }, "-=.6")




	let tl4 = gsap.timeline({
		scrollTrigger: {
			trigger: ".cases__item-4",   // pin the trigger element while active
			start: "top center",

		}
	});

	tl4.from(".cases__item-4", { duration: 1.3, ease: "power4.out", opacity: 0.2 }, "-=.3")
		.to(".cases__dop span", { duration: 1.3, ease: "power4.out", height: 1250 }, "-=.6")


	let tl5 = gsap.timeline({
		scrollTrigger: {
			trigger: ".cases__item-5",   // pin the trigger element while active
			start: "top center",

		}
	});

	tl5.from(".cases__item-5", { duration: 1.3, ease: "power4.out", opacity: 0.2 }, "-=.3")
		.to(".cases__dop span", { duration: 1.3, ease: "power4.out", height: 1500 }, "-=.6")

	let tl6 = gsap.timeline({
		scrollTrigger: {
			trigger: ".cases__item-6",   // pin the trigger element while active
			start: "top center",

		}
	});

	tl6.from(".cases__item-6", { duration: 1.3, ease: "power4.out", opacity: 0.2 }, "-=.3")
		.to(".cases__dop span", { duration: 1.3, ease: "power4.out", height: 1650 }, "-=.6")


	let tl7 = gsap.timeline({
		scrollTrigger: {
			trigger: ".cases__item-7",   // pin the trigger element while active
			start: "top center",

		}
	});

	tl7.from(".cases__item-7", { duration: 1.3, ease: "power4.out", opacity: 0.2 }, "-=.3")
		.to(".cases__dop span", { duration: 1.3, ease: "power4.out", height: 2530 }, "-=.6")
		.add(function () {
			var end = Date.now() + (2 * 1000);

			// go Buckeyes!
			var colors = ['#ff5715', '#ffffff'];

			(function frame() {
				confetti({
					particleCount: 2,
					angle: 60,
					spread: 55,
					origin: { x: 0 },
					colors: colors
				});
				confetti({
					particleCount: 2,
					angle: 120,
					spread: 55,
					origin: { x: 1 },
					colors: colors
				});

				if (Date.now() < end) {
					requestAnimationFrame(frame);
				}
			}());
		});

} else {
	let tl1 = gsap.timeline({
		scrollTrigger: {
			trigger: ".cases__item-1",   // pin the trigger element while active
			start: "top center",


		}
	});

	tl1.from(".cases__item-1", { duration: 1.3, ease: "power4.out", opacity: 0.2 }, "-=.3")
		.to(".cases__dop span", { duration: 1.3, ease: "power4.out", height: 200 }, "-=.6")




	let tl2 = gsap.timeline({
		scrollTrigger: {
			trigger: ".cases__item-2",   // pin the trigger element while active
			start: "top center",

		}
	});

	tl2.from(".cases__item-2", { duration: 1.3, ease: "power4.out", opacity: 0.2 }, "-=.3")
		.to(".cases__dop span", { duration: 1.3, ease: "power4.out", height: 400 }, "-=.6")


	let tl3 = gsap.timeline({
		scrollTrigger: {
			trigger: ".cases__item-3",   // pin the trigger element while active
			start: "top center",

		}
	});

	tl3.from(".cases__item-3", { duration: 1.3, ease: "power4.out", opacity: 0.2 }, "-=.3")
		.to(".cases__dop span", { duration: 1.3, ease: "power4.out", height: 650 }, "-=.6")




	let tl4 = gsap.timeline({
		scrollTrigger: {
			trigger: ".cases__item-4",   // pin the trigger element while active
			start: "top center",

		}
	});

	tl4.from(".cases__item-4", { duration: 1.3, ease: "power4.out", opacity: 0.2 }, "-=.3")
		.to(".cases__dop span", { duration: 1.3, ease: "power4.out", height: 870 }, "-=.6")


	let tl5 = gsap.timeline({
		scrollTrigger: {
			trigger: ".cases__item-5",   // pin the trigger element while active
			start: "top center",

		}
	});

	tl5.from(".cases__item-5", { duration: 1.3, ease: "power4.out", opacity: 0.2 }, "-=.3")
		.to(".cases__dop span", { duration: 1.3, ease: "power4.out", height: 1050 }, "-=.6")



	let tl6 = gsap.timeline({
		scrollTrigger: {
			trigger: ".cases__item-6",   // pin the trigger element while active
			start: "top center",

		}
	});

	tl6.from(".cases__item-6", { duration: 1.3, ease: "power4.out", opacity: 0.2 }, "-=.3")
		.to(".cases__dop span", { duration: 1.3, ease: "power4.out", height: 1200 }, "-=.6")




	let tl7 = gsap.timeline({
		scrollTrigger: {
			trigger: ".cases__item-7",   // pin the trigger element while active
			start: "top center",

		}
	});

	tl7.from(".cases__item-7", { duration: 1.3, ease: "power4.out", opacity: 0.2 }, "-=.3")
		.to(".cases__dop span", { duration: 1.3, ease: "power4.out", height: 1660 }, "-=.6")
		.add(function () {
			var end = Date.now() + (2 * 1000);

			// go Buckeyes!
			var colors = ['#ff5715', '#ffffff'];

			(function frame() {
				confetti({
					particleCount: 2,
					angle: 60,
					spread: 55,
					origin: { x: 0 },
					colors: colors
				});
				confetti({
					particleCount: 2,
					angle: 120,
					spread: 55,
					origin: { x: 1 },
					colors: colors
				});

				if (Date.now() < end) {
					requestAnimationFrame(frame);
				}
			}());
		});
}



