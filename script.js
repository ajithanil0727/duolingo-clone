const elDropdown = document.getElementById('dropdown');
const elDropdownMenu = document.getElementById('dropdownMenu');


elDropdown.addEventListener('mouseover', showMenu)
elDropdownMenu.addEventListener('mouseover', showMenu)
elDropdown.addEventListener('mouseleave', hideMenu)
elDropdownMenu.addEventListener('mouseleave', hideMenu)

function showMenu() {
    elDropdownMenu.classList.remove('d-none');
}

function hideMenu() {
    elDropdownMenu.classList.add('d-none')
}

