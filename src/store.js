import createStore from 'unistore'
import axios from 'axios'

const initialState = {
   listNews:[],
   isLoading:true,
   keyword: "test",
   slice:5  
  };


const API_KEY="c92b51632a1d41d0b0319657d21da15f"
const baseUrl="https://newsapi.org/v2/"


export const store=createStore(initialState);

export const actions = store => ({
  handleInputChange : async (state,event) => {
    console.log("event", event.target.value)
    let keyword= event.target.value
    if (keyword.length > 2) {
      try {
        const response = await axios.get(
          baseUrl + "everything?q=" + keyword + "&apiKey=" + API_KEY
        );
        store.setState({ listNews: response.data.articles });
      } catch (error) {
        console.error(error);
      }
    }
  }
});

