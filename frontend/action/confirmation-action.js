import axios from 'axios';

export const fetchOpentable = (opentableInfo) => ({
  	type: "FETCH_DATA",
	data: opentableInfo
})

export const getOpentableAsync = (id) => dispatch => {
	 axios.get('/api/opentable/searchtable/' + id)
	.then((data)=>{
		console.log('ACTION DATA:', data.data)
		dispatch(fetchOpentable(data.data))
	})
}



