import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://65f9e0873909a9a65b19950f.mockapi.io";
 



export const fetchCatalogsPage = createAsyncThunk("catalogs/adverts",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/adverts'); 
            
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);  
        }
    });