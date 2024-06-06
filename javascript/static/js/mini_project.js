
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleClick(e) {
    // 1. Скрыть все tabPanels
    tabPanels.forEach((panel) => {
        panel.hidden = true;
    })
    // 2. Отменить выбор каждой кнопки (aria-selected = false)
    tabButtons.forEach(tab => {
        // Вариант: tab.setAttribute('aria-selected', false);
        tab.ariaSelected = false;
    })
    // 3. Поменять значение кликнутой кнопки  aria-selected На true
    e.currentTarget.setAttribute('aria-selected', true);
    // 4. Отобразить нужный tabPanel
    //const id = e.currentTarget.id;
    // или
    const { id } = e.currentTarget;
    // console.log('id >>>', id);
    // console.log('tabPanel >>>', tabPanels);
    const tabPanel = tabPanels.find(panel => {
        if (panel.getAttribute('aria-labelledby') === id) {
            return true;
        }
    })
    tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleClick));
