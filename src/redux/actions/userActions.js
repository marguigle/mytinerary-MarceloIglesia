/* import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const cargarUsuario = createAsyncThunk("cargar_usuerio", (user) => {
  return {
    payload: user,
  };
});
export const signUp = createAsyncThun("create_user", async (body) => {
  try {
    const response = await axios.post("localhost:3000/api/auth/signup", body);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});
 */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const cargarUsuario = createAsyncThunk("cargar_usuario", (user) => {
  return {
    payload: user,
  };
});

export const signUp = createAsyncThunk("create_user", async (body) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth/signup",
      body
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
});
