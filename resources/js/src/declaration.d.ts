import Echo from 'laravel-echo'

declare module '*.scss';
declare global {
    interface Window { Echo: Echo }
}
