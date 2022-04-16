const app = Vue.createApp({
    data() {
        return {
            projects: [
                {framework: 'Vue JS',
                frameworkColor: 'new-btn vue',
                url: 'https://themeaduane.vercel.app/',
                img: 'thumbs/thumbnail-06.png',
                title: '01/ theme aduane'
                },
                {framework: 'Bootstrap',
                frameworkColor: 'new-btn bootstrap',
                url: 'https://projects.niiaryeh.me/persona-website/',
                img: 'thumbs/thumbnails-05.png',
                title: '02/ getpersona.app online store'
                },
                {framework: 'Bootstrap',
                frameworkColor: 'new-btn bootstrap',
                url: 'https://projects.niiaryeh.me/tripzzafrica/',
                img: 'thumbs/thumbnails-04.png',
                title: '03/ tripzzafrica'
                },
                {framework: 'Bootstrap',
                frameworkColor: 'new-btn bootstrap',
                url: 'https://projects.niiaryeh.me/61x3s/',
                img: 'thumbs/thumbnails-07.png',
                title: '04/ Theme 61x3s'
                },
                {framework: 'html / css',
                frameworkColor: 'new-btn html',
                url: 'https://projects.niiaryeh.me/wavebox-realty-project/',
                img: 'thumbs/thumbnails-03.png',
                title: '05/ Wavebox Properties Landing Page'
                },
                {framework: 'html / css',
                frameworkColor: 'new-btn html',
                url: 'https://projects.niiaryeh.me/Monochrome-Profile-Web/',
                img: 'thumbs/thumbnails-02.png',
                title: '06/ Monochrome Profile Website'
                },

            ]    
        }
    },
}).mount('.cont');