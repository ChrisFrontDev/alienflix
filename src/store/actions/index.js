import axios from '../../axios-movies';

const API_KEY = 'd7a6fb0865fc2ba5d13939513b4a781d';

export const FETCH_TRENDING = 'FETCH_TRENDING';


export function fetchTrending() {
    const request = axios.get(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`);
  
    return {
      type: FETCH_TRENDING,
      payload: request
    }
  }
  