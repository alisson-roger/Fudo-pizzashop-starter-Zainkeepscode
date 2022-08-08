import SanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = SanityClient({
  projectId: 'm05gs9zq',
  dataset: 'production',
  apiVersion: '2022-08-06',
  useCdn: true,
  token:
    'sktEbczQWmRA5uz5FnkHlGEKuBwhz9iDv91GBJoUFe5M0QApRZjhfabuwpUe4Uj8rhgAnx5V15tqw2UF1q1G6LdN57uqLtNuEiKZuOJf3UgD5aSnxIfGZMDyGKTJlAI3YnzZ0XKPwgnkpXEGWPnl8ds5F5l3FmnFmIzkxRN4X9swxf6OLxHI'
})

const builder = imageUrlBuilder(client)

export const urlFor = source => builder.image(source)
