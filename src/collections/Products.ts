import { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: 'Producto',
    plural: 'Productos',
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
    {
      name: 'category',
      type: 'select',
      label: 'Categoría',
      options: [
        { label: 'Camiseta', value: 'camiseta' },
        { label: 'Short', value: 'short' },
        { label: 'Buzo Deportivo', value: 'buzo' },
      ],
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
    },
    {
      name: 'price',
      type: 'number',
      label: 'Precio',
      required: true,
    },
    {
      name: 'discount',
      type: 'number',
      label: 'Descuento',
    },
    {
      name: 'season',
      type: 'group',
      label: 'Temporada',
      fields: [
        {
          name: 'from',
          type: 'number',
          label: 'Desde (año)',
          required: true,
        },
        {
          name: 'to',
          type: 'number',
          label: 'Hasta (año)',
          required: true,
        },
      ],
    },
    {
      name: 'color',
      type: 'relationship',
      relationTo: 'colors',
      hasMany: true,
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media', // necesitas tener una colección "media"
      label: 'Imágenes',
      required: true,
      hasMany: true,
    },
    {
      name: 'variants',
      type: 'array',
      label: 'Variantes',
      fields: [
        {
          name: 'size',
          type: 'select',
          label: 'Talle',
          options: [
            { label: 'XS', value: 'xs' },
            { label: 'S', value: 's' },
            { label: 'M', value: 'm' },
            { label: 'L', value: 'l' },
            { label: 'XL', value: 'xl' },
          ],
          required: true,
        },
        {
          name: 'stock',
          type: 'number',
          label: 'Stock',
          defaultValue: 0,
        },
      ],
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      label: 'Destacado',
      defaultValue: false,
    },
  ],
}
