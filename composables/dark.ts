/**
 * @file dark mode
 */

export function toggleColorMode() {
  const colorMode = useColorMode()
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}
