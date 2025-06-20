




document.addEventListener('DOMContentLoaded', () => {

	//header menu
	if (window.innerWidth > 1023) {
			//desktop action
			function handleMouseOver(event) {
				const target = event.currentTarget; 
				const allButtonsMenu = document.querySelectorAll('.popup-catalog-wrap .menu-main>li>.btn-menu');

				allButtonsMenu.forEach(button => {
					if (button !== target) {
						button.classList.remove('active');
					}
				});

				if (target.nextElementSibling && target.nextElementSibling.classList.contains('menu-inner')) {
					target.classList.add('active');
				}
			}
			function handleClick(event) {
				const target = event.currentTarget;
				const allButtonsMenu = document.querySelectorAll('.popup-catalog-wrap .menu-main>li>.btn-menu');

				allButtonsMenu.forEach(button => {
					button.classList.remove('active');
				});

				if (target.nextElementSibling && target.nextElementSibling.classList.contains('menu-inner')) {
					target.classList.add('active');
				}
			}
			const buttonsMenu = document.querySelectorAll('.popup-catalog-wrap .menu-main>li>.btn-menu');

			buttonsMenu.forEach(button => {
				button.addEventListener('mouseover', handleMouseOver);
			});

			buttonsMenu.forEach(button => {
				button.addEventListener('click', handleClick);
			});
			function setMinHeight() {
				const activeButton = document.querySelector('.popup-catalog-wrap .menu-main>li>.btn-menu.active');
				if (activeButton) {
					const submenu = activeButton.nextElementSibling; 
					if (submenu && submenu.classList.contains('menu-inner')) {
						const height = submenu.offsetHeight; 
						const popupMenuContent = document.querySelector('.popup-menu-content');
						if (popupMenuContent) {
							popupMenuContent.style.minHeight = height + 'px'; 
						}
					}
				}
			}
			const observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					if (mutation.type === 'attributes') {
						if (mutation.attributeName === 'class') {
							setMinHeight();
						}
					}
				});
			});
			const config = {
				attributes: true,
				childList: false,
				subtree: false
			};
			const buttons = document.querySelectorAll('.popup-catalog-wrap .menu-main>li>.btn-menu');
			buttons.forEach(button => {
				observer.observe(button, config);
			});
			setMinHeight();
	} else {
		//mobile-action
		document.querySelectorAll('.popup-catalog-wrap .menu > li > .btn-menu:has(+ .menu-inner)').forEach(button => {
			button.addEventListener('click', function(event) {
				
				this.classList.toggle('opened');
				event.preventDefault();
			});
		});
		document.querySelectorAll('.popup-catalog-wrap .menu-title').forEach(title => {
			title.addEventListener('click', function(event) {
				document.querySelectorAll('.popup-catalog-wrap .menu-title.opened').forEach(otherTitle => {
					if (otherTitle !== this) {
						otherTitle.classList.remove('opened');
					}
				});
				this.classList.toggle('opened');
				event.preventDefault();
			});
		});
		

	}

	


	
});

