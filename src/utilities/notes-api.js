import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function fetchUserNotes(userId) {
  return sendRequest(`${BASE_URL}/user/${userId}`);
}

export async function addNote(note) {
  return sendRequest(BASE_URL, 'POST', note);
}