import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
export const fetchProduct=createAsyncThunk("fetchpro",async ()=>{
    const res= await fetch("https://dummyjson.com/products?limit=194")
    const data =await res.json()
    if(!res.ok){
        throw new Error("ERROR");
        
    }
    //console.log(res)
    return data

})
const productSlice=createSlice({
    name:"products/counter",
    initialState:{
        loading:false,
        data:[],
        error:false
    },
    reducers:{
        increment(state){

        state.counter+=1

        },
        decrement:(state)=>{
           return{
            ...state,
            counter:state.counter-1
           }

        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.pending,(state)=>{
            state.loading=true

        }).addCase(fetchProduct.fulfilled,(state,actions)=>{
            state.loading=false;
            state.data=actions.payload

        }).addCase(fetchProduct.rejected,(state,actions)=>{
            console.log("er",actions.payload)
            state.loading=false;
            state.error=true
        })

    }
})

export default productSlice.reducer
export const {increment,decrement}=productSlice.actions

export const fetchDetails = async ({ id }) => {
  return fetch("https://dummyjson.com/products/" + id)
    .then((res) => res.json())
    .then((res) => {
      //console.log(res); // log for debugging
      return res;       // ✅ return it so loader gets data
    })
    .catch((er) => {
      console.log(er);
      throw er;         // ✅ rethrow so router can handle errors
    })
    .finally(() => console.log("data"));
};
