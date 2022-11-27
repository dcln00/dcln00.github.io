let themeBtn = document.querySelector('.theme');


	function getMode() {
		let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
		localStorage.getItem('projects.theme') ? theme = localStorage.getItem('projects.theme') : null
		return theme
	}
	
	function loadTheme(theme) {
		const root = document.querySelector(':root')
		if(theme ==='dark') {
			themeBtn.innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i>'
		} else {
			themeBtn.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>'
		}
		root.setAttribute('color-scheme', `${theme}`)
	}
	
	themeBtn.addEventListener('click', function() {
		let theme = getMode()
		if(theme === 'dark') {
			theme = 'light'
		} else {
			theme = 'dark'
		}
		localStorage.setItem('projects.theme', `${theme}`)
		loadTheme(theme)
	})
	
	window.addEventListener('DOMContentLoaded', function() {
		loadTheme(getMode())
	})
