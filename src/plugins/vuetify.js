import { createVuetify } from 'vuetify'
import 'vuetify/styles'  // Ensure you import Vuetify styles
import { aliases, fa } from 'vuetify/iconsets/fa'  // Optional: Customize icons

export default createVuetify({
  // Vuetify options
  icons: {
    defaultSet: 'fa', // Optional: Set default icon set
    aliases,
    sets: { fa },
  },
})

