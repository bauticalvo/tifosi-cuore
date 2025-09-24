import { CollectionConfig } from 'payload'

export const Colors: CollectionConfig = {
  slug: 'colors',
  labels: {
    singular: 'Color',
    plural: 'Colores',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nombre',
      required: true,
    },
  ],
}
