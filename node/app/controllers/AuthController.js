const axios = require('axios');

module.exports = {

    githubAuth() {
        //console.log('code', code);
//console.log('githubAuth')
return 'githubAuth';
        // const body = {
        //     client_id: process.env.GITHUB_CLIENT_ID,
        //     client_secret: process.env.GITHUB_SECRET,
        //     code,
        // };
        // const opts = { headers: { accept: 'application/json' } };
        // axios.post('https://github.com/login/oauth/access_token', body, opts)
        //     .then((_res) => _res.data.access_token)
        //     .then((token) => {
        //         // eslint-disable-next-line no-console
        //         console.log('My token:', token);

        //         const instance = axios.create({
        //             baseURL: 'https://api.github.com',
        //             timeout: 1000,
        //             headers: { 'Authorization': 'Bearer ' + token }
        //         });

        //         instance.get('/user')
        //             .then(response => {
        //                 console.log('response', response);
        //             })

        //         res.redirect(`/?token=${token}`);
        //     })
        //     .catch((err) => res.status(500).json({ err: err.message }));
    }

}



