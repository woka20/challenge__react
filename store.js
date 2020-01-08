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

const actions = store =>{
  handleInputChange: (e) => {
    console.log("event", e.target.value);
    let value = e.target.value;
    this.props.searchNews(value);
};
  searchNews : async keyword => {
    const self = this;
    if (keyword.length > 2) {
      try {
        const response = await axios.get(
          baseUrl + "everything?q=" + keyword + "&apiKey=" + API_KEY
        );
        self.setState({ listNews: response.data.articles });
      } catch (error) {
        console.error(error);
      }
    }
  };

}
