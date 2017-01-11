import axios from 'axios';

export const fetchOpentable = () => {
	const request = axios.get('api/opentable')
	return (dispatch)=>{	
		request.then((data)=>{
			console.log('ACTION data', data )
			dispatch({
				type: "FETCH_DATA",
				opentableInfo: data
		})
	})
}}



