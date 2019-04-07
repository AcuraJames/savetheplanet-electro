ymaps.ready(init);

	function init(){     
		let map = new ymaps.Map("map", {
            center: [61.987903, 128.484982],
            zoom: 8,
            controls: ['zoomControl']
		});

		map.behaviors.disable('scrollZoom');

		const pe_bm = new ymaps.Placemark([62.059124, 129.780889], { 
		    hintContent: 'Планета Электро'
		},{
            iconColor: '#0d3d8e'
        });			

		const pe_aut = new ymaps.Placemark([62.004914, 129.755737], { 
		    hintContent: 'Планета Электро' 
		},{
            iconColor: '#0d3d8e'
        });	

		const unicom = new ymaps.Placemark([62.030588, 129.692832], { 
		    hintContent: 'Юником'
		},{
            iconColor: '#c30f28'
        });				

		const sinet = new ymaps.Placemark([62.023743, 129.731900], { 
		    hintContent: 'ГК Синет' 
		},{
            iconColor: '#82cdff'
        });	

		const deley = new ymaps.Placemark([62.0966526, 126.7010228], { 
		    hintContent: 'ТЦ Дэлэй'
		});		
        	
		const eden = new ymaps.Placemark([61.484846, 129.150744], { 
		    hintContent: 'ТЦ Эдэм'
		});			

        map.geoObjects.add(pe_bm);
		map.geoObjects.add(pe_aut);
		map.geoObjects.add(unicom);
		map.geoObjects.add(sinet);
		map.geoObjects.add(deley);
        map.geoObjects.add(eden);
        
        const mapTop = document.getElementById('map')
        const items = document.getElementsByClassName('show-btn')
        const points = [pe_bm, pe_aut, unicom, sinet, deley, eden]
        let zoom = false

        for(let i = 0; i <= items.length; i++) {
            items[i].onclick = (e) => {    
                if(!zoom) 
                    map.setZoom(map.getZoom() + 9)
                map.panTo(points[i].geometry.getCoordinates(), {delay: 1000})
                window.scrollTo(0, mapTop.offsetTop)
                zoom = true
            }
        }
	}