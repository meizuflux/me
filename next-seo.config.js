const title = 'meizuflux'
const description = 'Personal portfolio for meizuflux'

const SEO = {
    title,
    description,
    canonical: 'https://meizuflux.pages.dev',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://meizuflux.pages.dev',
        title,
        description,
        images: [
            {
                url: 'https://i.imgflip.com/415gxp.jpg',
                alt: title
            }
        ]
    }
}

export default SEO
