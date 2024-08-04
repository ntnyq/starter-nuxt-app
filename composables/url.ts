import {
  decompressFromEncodedURIComponent as decode,
  compressToEncodedURIComponent as encode,
} from 'lz-string'

const DEFAULT_INPUT = 'hello world'

const params = new URLSearchParams(
  window.location.search || localStorage.getItem('STORAGE_KEY') || '',
)

export const inputValue = ref(decode(params.get('input') || '') || DEFAULT_INPUT)

throttledWatch(
  [inputValue],
  () => {
    const url = new URL('/', window.location.origin)

    url.searchParams.set('input', encode(inputValue.value))

    localStorage.setItem('STORAGE_KEY', url.search)

    window.history.replaceState('', '', `${url.pathname}${url.search}`)
  },
  {
    throttle: 1000,
    deep: true,
  },
)
