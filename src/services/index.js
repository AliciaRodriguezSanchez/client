import axios from 'axios';

export const getListListResultPromise = (value) => {  
    return axios.get("/api").then((response) =>{
        const { data } = response; 
        return data.filter((item) => item.toLowerCase().includes(value));
    })
};
  