module.exports = {
    title: `Voten API`,
    description: `Hello Developers. Shall we become partners?`,
    ga: `UA-89431807-1`,

    themeConfig: {
        repo: 'voten-co/voten',

        nav: [
            { text: 'Voten', link: 'https://voten.co' },
            { text: 'Twitter', link: 'https://twitter.com/voten_co' }
        ],

        sidebar: [
            {
                title: 'Account',
                children: [
                    '/account/authorization.html', 
                    '/account/login.html', 
                    '/account/register.html'
                ]
            }, 
            {
                title: 'Submission',
                children: [
                    '/submission/get.html', 
                    '/submission/create.html', 
                    '/submission/edit.html', 
                    '/submission/delete.html', 
                    '/submission/like.html', 
                    '/submission/bookmark.html', 
                    '/submission/report.html'
                ]
            }, 
            {
                title: 'Comment',
                children: [
                    '/comment/get.html', 
                    '/comment/create.html', 
                    '/comment/edit.html', 
                    '/comment/delete.html', 
                    '/comment/like.html', 
                    '/comment/bookmark.html', 
                    '/comment/report.html'
                ]
            }, 
            {
                title: 'Channel',
                children: [
                    '/channel/get.html', 
                    '/channel/create.html', 
                    '/channel/edit.html', 
                    '/channel/avatar.html', 
                    '/channel/bookmark.html'
                ]
            }
        ]
    }
};
