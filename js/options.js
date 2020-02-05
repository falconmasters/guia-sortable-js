const tareas = document.getElementById('tareas');
const tareasCompletadas = document.getElementById('tareasCompletadas');

const listaTareas = Sortable.create(tareas, {
	group: {
		name: "lista-tareas",
		pull: true,
		put: true
	},
	animation: 150,
	easing: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
	handle: ".fas",
	filter: ".titulo",
	// ghostClass: "active",
	chosenClass: "active",
	//dragClass: "invisible"
	dataIdAttr: "data-identificador",
	store: {
		set: function(sortable){
			const orden = sortable.toArray();
			localStorage.setItem('lista-tareas', orden.join('|'));
		},

		get: function(){
			const orden = localStorage.getItem('lista-tareas');
			return orden ? orden.split('|') : [];
		}
	},

	// onChoose: (evento) => { 
	// 	console.log('Se ha seleccionado un elemento')
	// },
	// onUnchoose: (evento) => { console.log('Se ha deseleccionado un elemento') },
	// onStart: (evento) => { console.log('Se inicio el drag and drop') },
	// onEnd: (evento) => { console.log('Finalizo el drag and drop') },
	// onAdd: (evento) => { console.log('Se agrego un elemento a la lista') },
	// onRemove: (evento) => { console.log('Se elimino un elemento a la lista') },
	// onUpdate: (evento) => { console.log('Se actualizo la lista') },
	// onFilter: (evento) => { console.log('Se intento mover un elemento filtrado') },
	// onMove: (evento) => { console.log('Se movio un elemento') },
	// onChange: (evento) => { console.log('Un elemento cambio de lugar') },
});

const listaTareasCompletadas = Sortable.create(tareasCompletadas, {
	group: {
		name: "lista-tareas",
		pull: true,
		put: true
	},
	animation: 150,
	easing: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
	handle: ".fas",
	filter: ".titulo",
	// ghostClass: "active",
	chosenClass: "active",
	//dragClass: "invisible"
});

const btnToggle = document.getElementById('toggle');
btnToggle.addEventListener('click', () => {
	const estado = listaTareas.option('disabled');
	listaTareas.option('disabled', !estado);

	if(estado){
		btnToggle.textContent = "Bloquear";
	} else {
		btnToggle.textContent = "Desbloquear";
	}
});