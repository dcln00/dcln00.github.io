const app = Vue.createApp({
    data() {
        return {
            projects: [
                {framework: 'Nuxt JS',
                frameworkColor: 'new-btn nuxt',
                url: '#',
                img: '/assets/images/thumbs/streamlab.png',
                title: '01/ Streamlab'
                },
				{framework: 'Nuxt JS',
                frameworkColor: 'new-btn nuxt',
                url: 'https://eisenlegal.vercel.app/',
                img: '/assets/images/thumbs/thumbnail-09.jpg',
                title: '02/ eisenlegal'
                },
                {framework: 'Vue JS',
                frameworkColor: 'new-btn vue',
                url: 'https://themeaduane.vercel.app/',
                img: '/assets/images/thumbs/thumbnail-06.png',
                title: '03/ theme aduane'
                },
            ]    
        }
    },
}).mount('.cont');