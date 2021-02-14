import { apitoken, apispace, apienv, apicontenttype } from '../env.js';
const getAPIUrl = (action) => `https://api.contentful.com/spaces/${apispace}/environments/${apienv}/entries?content_type=${apicontenttype}`;

// let fillstring = "";

// ${action}/${apicontenttype}

class AudioBooks {

    get({id, title} = { id:'', title:''}) {

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${apitoken}`);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
            };

            return fetch(getAPIUrl(), requestOptions)    
    }
    add(audiobook) {
        return;
    }
    update(audiobook) {
        return;
    }
};

export default new AudioBooks();