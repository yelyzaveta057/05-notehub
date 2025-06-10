
import axios from 'axios';
import type { Note } from '../../types/note';

const BASE_URL = 'https://notehub-public.goit.study/api';
const token = import.meta.env.VITE_NOTEHUB_TOKEN;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Отримати список нотаток (з пагінацією та пошуком)
interface FetchNotesResponse {
  data: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  page: number = 1,
  query: string = '',
  perPage: number = 12
): Promise<FetchNotesResponse> => {
  const response = await axiosInstance.get('/notes', {
    params: { page, query, perPage },
  });

  return {
    data: response.data.data,
    totalPages: response.data.totalPages,
  };
};

// Створити нову нотатку
export const createNote = async (
  title: string,
  text: string
): Promise<Note> => {
  const response = await axiosInstance.post<Note>('/notes', {
    title,
    text,
  });
  return response.data;
};

// Видалити нотатку за ID
export const deleteNote = async (id: string): Promise<Note> => {
  const response = await axiosInstance.delete<Note>(`/notes/${id}`);
  return response.data;
};
