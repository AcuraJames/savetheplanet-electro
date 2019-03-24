window.onload = () => {
    const showMoreBtn = document.getElementById('show-more-btn')
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

            let children = row.children
            children = [].slice.call(children)
            children.forEach(item => item.style.order = rand(1, 9))
        })

        showMoreBtn.addEventListener('click', () => {
            if(rows[i].style.display = 'none') {
                rows[i].style.display = 'flex'
                //showMoreBtn.innerHTML = 'Скрыть'
                showMoreBtn.style.display = 'none'
            }
        })
    }
}   