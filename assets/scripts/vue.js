const app = Vue.createApp({
    data() {
        return {
            projects: [
                {framework: 'Nuxt JS',
                frameworkColor: 'new-btn nuxt',
                url: '#',
                img: '/assets/images/thumbs/thumbnail-08.jpg',
                title: '01/ Styled By Selly ecommerce store (coming soon)'
                },
				{framework: 'Nuxt JS x Sanity',
                frameworkColor: 'new-btn nuxt',
                url: 'https://nanapoley.com/',
                img: '/assets/images/thumbs/thumbnail-10.png',
                title: '02/ Nana Poley'
                },
				{framework: 'Nuxt JS',
                frameworkColor: 'new-btn nuxt',
                url: 'https://eisenlegal.vercel.app/',
                img: '/assets/images/thumbs/thumbnail-09.jpg',
                title: '03/ eisenlegal'
                },
                {framework: 'Vue JS',
                frameworkColor: 'new-btn vue',
                url: 'https://themeaduane.vercel.app/',
                img: '/assets/images/thumbs/thumbnail-06.png',
                title: '04/ theme aduane'
                },
                {framework: 'Bootstrap',
                frameworkColor: 'new-btn bootstrap',
                url: 'https://projects.niiaryeh.me/tripzzafrica/',
                img: '/assets/images/thumbs/thumbnails-04.png',
                title: '05/ tripzzafrica'
                },
                {framework: 'Bootstrap',
                frameworkColor: 'new-btn bootstrap',
                url: 'https://projects.niiaryeh.me/61x3s',
                img: '/assets/images/thumbs/thumbnails-07.png',
                title: '06/ Theme 61x3s'
                },
                {framework: 'html / css',
                frameworkColor: 'new-btn html',
                url: 'https://projects.niiaryeh.me/wavebox-realty-project/',
                img: '/assets/images/thumbs/thumbnails-03.png',
                title: '07/ Wavebox Properties Landing Page'
                },
                // {framework: 'html / css',
                // frameworkColor: 'new-btn html',
                // url: 'https://projects.niiaryeh.me/Monochrome-Profile-Web/',
                // img: 'thumbs/thumbnails-02.png',
                // title: '06/ Monochrome Profile Website'
                // },

            ]    
        }
    },
}).mount('.cont');