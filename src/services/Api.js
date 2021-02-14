import { apitoken, apispace, apienv, apicontenttype } from '../env.js';
const getAPIUrl = (action) => `https://api.contentful.com/spaces/${apispace}/environments/${apienv}/entries${fillstring}`;

let fillstring = "";

// ${action}/${apicontenttype}

class AudioBooks {

    get({id, title}) {
        // afillstring += `&${apicontenttype}`;
        console.log(fetch(getAPIUrl))
        
    }
    add(audiobook) {
        return;
    }
    update(audiobook) {
        return;
    }
};

export default AudioBooks;