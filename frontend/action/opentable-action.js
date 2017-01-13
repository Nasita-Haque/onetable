

export const addReservation = (reservation) => ({
	type: "ADD_AVAILABLE",
	reservation
})

export const holdId =(id)=>({
	type:'ADD_ID',
	id
})