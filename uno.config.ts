import { defineConfig, presetIcons, presetTypography, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],
  transformers: [],
})
