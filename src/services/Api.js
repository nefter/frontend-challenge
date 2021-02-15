import { apitoken, apispace, apienv, apicontenttype } from '../env.js';

const getAPIUrl = (params, url) => {
    
    return `https://api.contentful.com/spaces/${apispace}/environments/${apienv}/entries${
        url ? `/` + url.join('/') : ''
    }${
        params ? params : ''
    }`;
}

class AudioBooks {

    get({id, title} = { id:'', title:''}) {

        const headers = new Headers();
        headers.append("Authorization", `Bearer ${apitoken}`);

        const requestOptions = {
            method: 'GET',
            headers: headers
            };

            return fetch(getAPIUrl(`?content_type=${apicontenttype}`), requestOptions)    
    }
    create(audiobook) {

        const headers = new Headers();
        headers.append("X-Contentful-Content-Type", apicontenttype);
        headers.append("X-Contentful-Version", "1");
        headers.append("Authorization", `Bearer ${apitoken}`);
        headers.append("Content-Type", "application/json");

            const raw = JSON.stringify({"fields": audiobook});

            const requestOptions = {
                method: 'POST',
                headers: headers,
                body: raw
            };

        return fetch(getAPIUrl(), requestOptions)
    }
    update(audiobook, id) {
        const headers = new Headers();
        headers.append("X-Contentful-Content-Type", apicontenttype);
        headers.append("X-Contentful-Version", "1");
        headers.append("Authorization", `Bearer ${apitoken}`);
        headers.append("Content-Type", "application/json");

        const raw = JSON.stringify({"fields": audiobook});

        const requestOptions = {
            method: 'PUT',
            headers: headers,
            body: raw
        };

        return fetch(getAPIUrl(null, [id]), requestOptions)
    }

    delete(id) {
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${apitoken}`);

        const requestOptions = {
            method: 'DELETE',
            headers: headers,
            redirect: 'follow'
        };
        return fetch(getAPIUrl(null, [id]), requestOptions)
    }
};

export default new AudioBooks();
