import axios from 'axios'
export const toRegist = (formData)=>{
	return (dispatch)=>{
		return axios.post('/api/toRegist',{
			data:formData
		})
	}
}