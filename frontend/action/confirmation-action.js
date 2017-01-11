import axios from 'axios';
export const FETCH_DATA = "FETCH_DATA";

export const addDate = () => ({
  type: FETCH_DATA,
  date
})

export const fetchOpentable = () => (
	axios.get('api/opentable/:opentable')
	  .then((data)=>({
		type: FETCH_DATA,
		opentableInfo: data
	}))
);


//dispatch to update store. 
//route-data//update //
// fetch data base based on routes
// on enter 



