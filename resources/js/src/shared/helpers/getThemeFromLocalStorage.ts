export const getThemeFromLocalStorage = (): 'light' | 'dark' => {
    const theme = localStorage.getItem('theme')

    if (theme === 'light' || theme === 'dark') {
        return theme
    } else {
        localStorage.setItem('theme', 'light')
        return 'light'
    }
}
