import axios from 'axios';
export const FETCH_DATA = "FETCH_DATA";

export const fetchOpentable = (id) => {
	const request = axios.get('/api/opentable/searchtable/'+id)
	return (dispatch)=>{	
		request.then((data)=>{
			console.log('ACTION data', data.data)
		dispatch({
			type: "FETCH_DATA",
			opentableInfo: data.data
		})
	})
}}




