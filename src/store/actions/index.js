import axios from "../../axios-movies";

const API_KEY = "d7a6fb0865fc2ba5d13939513b4a781d";

export const FETCH_TRENDING = "FETCH_TRENDING";
export const FETCH_DISCOVER = "FETCH_DISCOVER";

export function fetchTrending() {
  const request = axios.get(
    `/trending/all/week?api_key=${API_KEY}&language=pt-BR`
  );

  return {
    type: FETCH_TRENDING,
    payload: request
  };
}

export function fetchDiscover() {
  const request = axios.get(
    `/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`
  );

  return {
    type: FETCH_DISCOVER,
    payload: request
  };
}
