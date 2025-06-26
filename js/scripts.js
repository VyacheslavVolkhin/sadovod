document.addEventListener("DOMContentLoaded", function() {

	//fancybox
	Fancybox.bind("[data-fancybox]", {
		//settings
	});


	//field-password
	const passwordToggle = document.querySelectorAll(".js-password-toggle");
	if (passwordToggle) {
		for (let i = 0; i < passwordToggle.length; i++) {
		passwordToggle[i
			].addEventListener("click", function (e) {
			if (this.classList.contains("active")) {
			this.classList.remove("active");
			const input = this.closest(".frm-field-password").querySelector(
				".form-input"
			);
			input.type = "password";
				} else {
			this.classList.add("active");
			const input = this.closest(".frm-field-password").querySelector(
				".form-input"
			);
			input.type = "text";
				}
			e.preventDefault();
			})
		}
	}


	// filter actions
	const filterButtonOpen = document.querySelector('.js-filter-open');
	const filterButtonClose = document.querySelector('.js-filter-close');
	if (filterButtonOpen) {
		filterButtonOpen.addEventListener("click", function(event) {
				document.body.classList.add("filter-active");
				event.preventDefault();
		})
	}
	if (filterButtonClose) {
		filterButtonClose.addEventListener("click", function(event) {
				document.body.classList.remove("filter-active");
				event.preventDefault();
		})
	}

	


	//tooltip
	tippy('.js-clear-tippy-helper', {
			content(reference) {
			const dataTitle = reference.getAttribute('data-title');
			return dataTitle.replace(/ /g, '<br>');
		},
		allowHTML: true
	});


	//range slider
	const sliderRange = document.getElementById('range-slider');
	const minInput = document.getElementById('input-number-min');
	const maxInput = document.getElementById('input-number-max');

	const minRange = 0;
	const maxRange = 160000;

	if (sliderRange) {
		noUiSlider.create(sliderRange, {
			start: [18000, 128000],
			connect: true,
			range: {
				'min': [minRange],
				'max': [maxRange]
			}
		});
		sliderRange.noUiSlider.on('update', (values, handle) => {
			const value = values[handle];

			if (handle === 0) {
				minInput.value = Math.round(value);
			} else {
				maxInput.value = Math.round(value);
			}
		});
		minInput.addEventListener('change', () => {
			sliderRange.noUiSlider.set([minInput.value, null]);
		});
		maxInput.addEventListener('change', () => {
			sliderRange.noUiSlider.set([null, maxInput.value]);
		});
	}


	//mobile panel buttons
	const buttonCatalog = document.querySelector('.js-button-catalog')
	const buttonProfile = document.querySelector('.js-button-profile')
	buttonCatalog.addEventListener('click', function(e) {
		if (document.querySelector('.popup-profile-wrap .active-mobile')) {
			console.log('test')
			document.querySelector('.popup-profile-wrap .active-mobile').classList.remove('active-mobile')
			document.querySelector('.mobile-panel-box .active').classList.remove('active')
		}
		document.querySelector('.popup-menu-wrap .js-btn-popup-toggle').classList.remove('active')
		document.querySelector('.popup-catalog-wrap .js-btn-popup-toggle').classList.toggle('active-mobile')
		document.body.classList.remove('menu-show')
		document.body.classList.toggle('popup-mobile-show')
		this.classList.toggle('active');
		e.preventDefault()
		return false
	})
	buttonProfile.addEventListener('click', function(e) {
		if (document.querySelector('.popup-catalog-wrap .active-mobile')) {
			console.log('test')
			document.querySelector('.popup-catalog-wrap .active-mobile').classList.remove('active-mobile')
			document.querySelector('.mobile-panel-box .active').classList.remove('active')
		}
		document.querySelector('.popup-menu-wrap .js-btn-popup-toggle').classList.remove('active')
		document.querySelector('.popup-profile-wrap .js-btn-popup-toggle').classList.toggle('active-mobile')
		document.body.classList.remove('menu-show')
		document.body.classList.toggle('popup-mobile-show')
		this.classList.toggle('active');
		e.preventDefault()
		return false
	})


	//btn tgl and add
	let tglButtons = document.querySelectorAll('.js-btn-tgl')
	let addButtons = document.querySelectorAll('.js-btn-add')
	for (i = 0;i < tglButtons.length;i++) {
		tglButtons[i].addEventListener('click', function(e) {
			this.classList.contains('active') ? this.classList.remove('active') : this.classList.add('active')
			e.preventDefault()
			return false
		})
	}
	for (i = 0;i < addButtons.length;i++) {
		addButtons[i].addEventListener('click', function(e) {
			if (!this.classList.contains('active')) {
				this.classList.add('active');
				e.preventDefault()
				return false
			}
		})
	}
	let buttonsTglOne = document.querySelectorAll('.js-btn-tgl-one');
	buttonsTglOne.forEach(function(button) {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			let row = this.closest('.row-buttons');
			row.querySelectorAll('.js-btn-tgl-one').forEach(function(btn) {
				btn.classList.remove('active');
			});
			row.querySelectorAll('.js-btn-tgl-one').forEach(function(btn) {
				btn.classList.remove('active');
			});
			this.classList.add('active');
			return false;
		});
	});


	//js popup wrap
	const togglePopupButtons = document.querySelectorAll('.js-btn-popup-toggle')
	const closePopupButtons = document.querySelectorAll('.js-btn-popup-close')
	const popupElements = document.querySelectorAll('.js-popup-wrap')
	const wrapWidth = document.querySelector('.wrap').offsetWidth
	const bodyElem = document.querySelector('body')
	function popupElementsClear() {
		document.body.classList.remove('menu-show')
		document.body.classList.remove('filter-show')
		document.body.classList.remove('search-show')
		document.body.classList.remove('popup-mobile-show')
		popupElements.forEach(element => element.classList.remove('popup-right'))
	}
	function popupElementsClose() {
		togglePopupButtons.forEach(element => {
			if (!element.closest('.no-close')) {
				element.classList.remove('active')
			}
		})
	}
	function popupElementsContentPositionClass() {
		popupElements.forEach(element => {
			let pLeft = element.offsetLeft
			let pWidth = element.querySelector('.js-popup-block').offsetWidth
			let pMax = pLeft + pWidth;
			if (pMax > wrapWidth) {
				element.classList.add('popup-right')
			} else {
				element.classList.remove('popup-right')
			}
		})
	}
	for (i = 0; i < togglePopupButtons.length; i++) {
		togglePopupButtons[i].addEventListener('click', function (e) {
			popupElementsClear()
			if (document.querySelector('.active-mobile')) {
				document.querySelector('.active-mobile').classList.remove('active-mobile')
			}
			if (document.querySelector('.mobile-panel-box .active')) {
				document.querySelector('.mobile-panel-box .active').classList.remove('active')
			}
			document.body.classList.remove('popup-mobile-show')
			if (this.classList.contains('active')) {
				this.classList.remove('active')
			} else {
				popupElementsClose()
				this.classList.add('active')
				if (this.closest('.popup-menu-wrap')) {
					document.body.classList.add('menu-show')
				}
				if (this.closest('.popup-search-wrap')) {
					document.body.classList.add('search-show')
				}
				if (this.closest('.popup-filter-wrap')) {
					document.body.classList.add('filter-show')
				}
				popupElementsContentPositionClass()
			}
			e.preventDefault()
			e.stopPropagation()
			return false
		})
	}
	for (i = 0; i < closePopupButtons.length; i++) {
		closePopupButtons[i].addEventListener('click', function (e) {
			popupElementsClear()
			if (document.querySelector('.active-mobile')) {
				document.querySelector('.active-mobile').classList.remove('active-mobile')
			}
			if (document.querySelector('.mobile-panel-box .active')) {
				document.querySelector('.mobile-panel-box .active').classList.remove('active')
			}
			document.body.classList.remove('popup-mobile-show')
			popupElementsClose()
			e.preventDefault()
			e.stopPropagation()
			return false;
		})
	}
	document.onclick = function (event) {
		if (!event.target.closest('.js-popup-block')) {
			popupElementsClear()
			popupElementsClose()
		}
	}
	popupElements.forEach(element => {
		if (element.classList.contains('js-popup-select')) {
			let popupElementSelectItem = element.querySelectorAll('.js-popup-block li a')
			if (element.querySelector('.js-popup-block .active')) {
				element.classList.add('select-active')
				let popupElementActive = element.querySelector('.js-popup-block .active').innerHTML
				let popupElementButton = element.querySelector('.js-btn-popup-toggle')
				popupElementButton.innerHTML = ''
				popupElementButton.insertAdjacentHTML('beforeend', popupElementActive)
			} else {
				element.classList.remove('select-active')
			}
			for (i = 0; i < popupElementSelectItem.length; i++) {
				popupElementSelectItem[i].addEventListener('click', function (e) {
					if (this.classList.contains('js-btn-sort')) {
						if (this.classList.contains('active')) {
							this.classList.toggle('active-up');
						}
					}
					this.closest('.js-popup-wrap').classList.add('select-active')
					if (this.closest('.js-popup-wrap').querySelector('.js-popup-block .active')) {
						this.closest('.js-popup-wrap').querySelector('.js-popup-block .active').classList.remove('active')
					}
					this.classList.add('active')
					let popupElementActive = element.querySelector('.js-popup-block .active').innerHTML
					let popupElementButton = element.querySelector('.js-btn-popup-toggle')
					popupElementButton.innerHTML = ''
					popupElementButton.insertAdjacentHTML('beforeend', popupElementActive)
					popupElementsClear()
					if (document.querySelector('.active-mobile')) {
						document.querySelector('.active-mobile').classList.remove('active-mobile')
					}
					if (document.querySelector('.mobile-panel-box .active')) {
						document.querySelector('.mobile-panel-box .active').classList.remove('active')
					}
					document.body.classList.remove('popup-mobile-show')
					popupElementsClose()
					if (!this.closest('.js-tabs-nav')) {
						e.preventDefault()
						e.stopPropagation()
						return false
					}
				})
			}
		}
	})


	//js tabs
	const tabsNav = document.querySelectorAll('.js-tabs-nav')
	const tabsBlocks = document.querySelectorAll('.js-tab-block')
	const tabsButtonTitle = document.querySelectorAll('.js-tab-title')
	const tabsButtonContent = document.querySelectorAll('.js-tab-content')
	function tabsActiveStart() {
		for (iTab = 0; iTab < tabsBlocks.length; iTab++) {
			if (tabsBlocks[iTab].classList.contains('active')) {
				tabsBlocks[iTab].classList.remove('active')
			}
		}
		for (i = 0; i < tabsNav.length; i++) {
			let tabsNavElements = tabsNav[i].querySelectorAll('[data-tab]')
			for (iElements = 0; iElements < tabsNavElements.length; iElements++) {
				if (tabsNavElements[iElements].classList.contains('active')) {
					let tabsNavElementActive = tabsNavElements[iElements].dataset.tab
					for (j = 0; j < tabsBlocks.length; j++) {
						if (tabsBlocks[j].dataset.tab.toString().indexOf(tabsNavElementActive) > -1) {
							console.log(tabsBlocks[j].dataset.tab.toString().indexOf(tabsNavElementActive))
							tabsBlocks[j].classList.add('active')
						}
					}
				}
			}
		}
		
	}
	for (i = 0; i < tabsButtonTitle.length; i++) {
		tabsButtonTitle[i].addEventListener('click', function (e) {
			this.classList.toggle('active')
			e.preventDefault()
			e.stopPropagation()
			return false
		})
	}
	for (i = 0; i < tabsNav.length; i++) {
		tabsNav[i].addEventListener('click', function (e) {
			if (e.target.closest('[data-tab]')) {
				let tabsNavElements = this.querySelector('[data-tab].active')
				tabsNavElements ? tabsNavElements.classList.remove('active') : false
				e.target.closest('[data-tab]').classList.add('active')
				tabsActiveStart()
				e.preventDefault()
				e.stopPropagation()
				return false
			}
		})
	}
	tabsActiveStart()



	// Popups
	let popupCurrent;
	let popupsList = document.querySelectorAll('.popup-outer-box')

	document.querySelectorAll(".js-popup-open").forEach(function (element) {
	element.addEventListener("click", function (e) {
		document.querySelector(".popup-outer-box").classList.remove("active");
		document.body.classList.add("popup-open");
		for (i=0;i<popupsList.length;i++) {
			popupsList[i
				].classList.remove("active");
			}

		popupCurrent = this.getAttribute("data-popup");
		document
		.querySelector(
			`.popup-outer-box[id="${popupCurrent}"
			]`
		)
		.classList.add("active");

		e.preventDefault();
		e.stopPropagation();
		return false;
		});
	});
	document.querySelectorAll(".js-popup-close").forEach(function (element) {
	element.addEventListener("click", function (event) {
		document.body.classList.remove("popup-open");
		for (i=0;i<popupsList.length;i++) {
			popupsList[i
				].classList.remove("active");
			}
		event.preventDefault();
		event.stopPropagation();
		});
	});
	document.querySelectorAll(".popup-outer-box").forEach(function (element) {
	element.addEventListener("click", function (event) {
		if (!event.target.closest(".popup-box")) {
		document.body.classList.remove("popup-open");
		document.body.classList.remove("popup-open-scroll");
		document.querySelectorAll(".popup-outer-box").forEach(function (e) {
			e.classList.remove("active");
				});
		return false;
			}
		});
	});


	//slider action
	const swiperSlidersAction = new Swiper('.slider-action .swiper', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: false,
		speed: 400,
		pagination: false,
		autoplay: false,
		navigation: {
			nextEl: '.btn-action-ico.ico-arrow.ico-arrow-next.button-slider-action-next',
			prevEl: '.btn-action-ico.ico-arrow.ico-arrow-prev.button-slider-action-prev',
		},
	
	});


	//slider categories
	const swiperSlidersCategories = new Swiper('.slider-categories .swiper', {
		loop: false,
		slidesPerView: 'auto',
		spaceBetween: 0,
		autoHeight: true,
		speed: 400,
		pagination: false,
		autoplay: false,
		navigation: false,
		breakpoints: {
			1024: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
		},
	
	});


	//slider gallery
	const swiperSliderGallery = new Swiper('.slider-gallery .swiper', {
		loop: false,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 400,
		pagination: {
			el: '.slider-gallery-pagination',
			clickable: true,
		},
		autoplay: false,
		navigation: {
			nextEl: '.btn-action-ico.ico-arrow.ico-arrow-next.button-slider-gallery-next',
			prevEl: '.btn-action-ico.ico-arrow.ico-arrow-prev.button-slider-gallery-prev',
		},
	
	});


})