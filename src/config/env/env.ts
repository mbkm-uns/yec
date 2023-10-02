export function Env() {
  return {
    API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
    API_ACCESS_KEY: import.meta.env.VITE_API_ACCESS_KEY
  }
}
