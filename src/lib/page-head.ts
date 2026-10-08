export function pageHead(title: string, description: string, image?: string) {
 return { meta: [{ title: `${title} | HeraVita` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | HeraVita` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }, ...(image?.startsWith('https://') ? [{property:'og:image',content:image},{name:'twitter:image',content:image}] : [])] };
}
