const add_button = document.querySelector('.add-button');
const edit_button = document.querySelector('.edit-button');
const delete_button = document.querySelector('.delete-button');

const add_item = document.querySelector('.add-item');
const edit_item = document.querySelector('.edit-item');
const delete_item = document.querySelector('.delete-item');

const handleNav = () => {
    add_button.addEventListener('click', () => {
        add_item.classList.add('active');
        edit_item.classList.remove('active');
        delete_item.classList.remove('active');
    })

    edit_button.addEventListener('click', () => {
        add_item.classList.remove('active');
        edit_item.classList.add('active');
        delete_item.classList.remove('active');
    })

    delete_button.addEventListener('click', () => {
        add_item.classList.remove('active');
        edit_item.classList.remove('active');
        delete_item.classList.add('active');
    })
}

handleNav();

