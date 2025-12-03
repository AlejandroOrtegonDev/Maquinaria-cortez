import axios from 'axios';

// Base URL for admin API routes defined in routes/web.php (prefix: /admin/api)
const BASE_URL = '/admin/api';

// --- Calendar endpoints ---
export function fetchAppointments(params = {}) {
  // GET /admin/api/appointments -> AppointmentController@index
  return axios.get(`${BASE_URL}/appointments`, { params });
}

export function createAppointment(payload) {
  // POST /admin/api/appointments -> AppointmentController@store
  return axios.post(`${BASE_URL}/appointments`, payload);
}

export function updateAppointment(id, payload) {
  // PUT /admin/api/appointments/{appointment} -> AppointmentController@update
  return axios.put(`${BASE_URL}/appointments/${id}`, payload);
}

export function deleteAppointment(id) {
  // DELETE /admin/api/appointments/{appointment} -> AppointmentController@destroy
  return axios.delete(`${BASE_URL}/appointments/${id}`);
}

// --- Invoice endpoints ---
export function fetchInvoices(params = {}) {
  // GET /admin/api/invoices -> InvoiceController@index
  return axios.get(`${BASE_URL}/invoices`, { params });
}

export function createInvoice(payload) {
  // POST /admin/api/invoices -> InvoiceController@store
  return axios.post(`${BASE_URL}/invoices`, payload);
}

export function updateInvoice(id, payload) {
  // PUT /admin/api/invoices/{invoice} -> InvoiceController@update
  return axios.put(`${BASE_URL}/invoices/${id}`, payload);
}

export function deleteInvoice(id) {
  // DELETE /admin/api/invoices/{invoice} -> InvoiceController@destroy
  return axios.delete(`${BASE_URL}/invoices/${id}`);
}

export function fetchInvoiceStats(params = {}) {
  // GET /admin/api/invoices/stats -> InvoiceController@stats
  return axios.get(`${BASE_URL}/invoices/stats`, { params });
}

export function exportInvoices(params = {}) {
  // GET /admin/api/invoices/export -> ExportInvoicesController
  return axios.get(`${BASE_URL}/invoices/export`, {
    params,
    responseType: 'blob',
  });
}

// --- User endpoints ---
export function fetchUsers(params = {}) {
  // GET /admin/api/users -> UserController@index
  return axios.get(`${BASE_URL}/users`, { params });
}

export function createUser(payload) {
  // POST /admin/api/users -> UserController@store
  return axios.post(`${BASE_URL}/users`, payload);
}

export function updateUser(id, payload) {
  // PUT /admin/api/users/{user} -> UserController@update
  return axios.put(`${BASE_URL}/users/${id}`, payload);
}

export function deleteUser(id) {
  // DELETE /admin/api/users/{user} -> UserController@destroy
  return axios.delete(`${BASE_URL}/users/${id}`);
}

