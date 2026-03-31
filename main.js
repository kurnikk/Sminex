const newsNavBtns = document.querySelectorAll('.news__nav-btn');

newsNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.news__nav-item')
           .classList.toggle('news__nav-item--selected');
    });
});

const newsSwitcherBtn = document.querySelectorAll('.news__switcher-btn');
const newsCards = document.querySelectorAll('.news__cards');

newsSwitcherBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;

        // переключаем кнопки
        newsSwitcherBtn.forEach(b => 
            b.classList.remove('news__switcher-btn--active')
        );
        btn.classList.add('news__switcher-btn--active');

        // переключаем списки
        newsCards.forEach(card => {
            card.classList.remove('news__cards--list', 'news__cards--grid');

            if (card.dataset.tab === tab) {
                if (tab === 'list') {
                    card.classList.add('news__cards--list');
                } else if (tab === 'grid') {
                    card.classList.add('news__cards--grid');
                }
            }
        });
    });
});