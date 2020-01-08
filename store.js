import createStore from 'unistore'

const initialState = {
   
   api_key:"c92b51632a1d41d0b0319657d21da15f",
   base_url:"https://newsapi.org/v2/",
   listNews:[],
   isLoading:true,
   keyword: "",
   slice:5  
  };

export const store=createStore(initialState)

// const actions = 
