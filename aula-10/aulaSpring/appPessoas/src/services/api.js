// src/services/api.js

import axios from 'axios'

// Troque pelo endereço público do seu Codespace com a porta 8080 exposta
const BASE_URL = 'https://super-duper-meme-qw9rp94qx963xgqg-8080.app.github.dev'

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api