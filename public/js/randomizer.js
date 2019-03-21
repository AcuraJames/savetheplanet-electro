window.onload = function() {
    const showMoreBtn = document.getElementById('btn-show-more')
    const items = document.getElementsByClassName('card-item')
    let rows = document.getElementsByClassName('row')
    let order = []
    
    let rand = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for(let i = 0; i <= rows.length; i++) {
        rows[i].style.order = rand(1, 99)
        
        order.push(parseInt(rows[i].style.order))
        order.sort((a, b) => a - b)

        rows = [].slice.call(rows)
        rows.forEach(row => {
            if(row.style.order == order[0] || row.style.order == order[1]) 
                row.style.display = 'flex'
            else row.style.display = 'none'
        })

        showMoreBtn.addEventListener('click', () => {
            if(rows[i].style.display = 'none') {
                rows[i].style.display = 'flex'
                //this.innerHTML = 'Скрыть'
                showMoreBtn.style.display = 'none'
            }
            else {
                rows[i].style.display = 'none'
                this.innerHTML = 'Показать еще'
            }
        })
    }
    
    // for(let j = 0; j <= items.length ; j++) {
    //     items[j].style.order = rand(1, 9)      
    // }
}   