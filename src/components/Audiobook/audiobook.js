import React from 'react';
import '../../css/App.css';

// const defaultProps = { actionTitle: 'submit', data: { title: { 'es-MX': 'test'}}};

const AudioBook = ({actionTitle, onAction, data} ) => {
    const handleSubmit = (event) => {
         // Prevent default behavior
        event.preventDefault();
        // const formData = new FormData(event.target);
        // Object.fromEntries(formData)

        const formData = new FormData(event.target);
        formData.set('is_original', formData.has('is_original') ? true : false);

        const data = Array.from(formData.entries()).reduce( (acc, [key, value]) => {

            let val = value;

            if (key === 'authors' || key === 'narrators') {
                val = value.split(',');
            }
            if (key === 'cost_per_play' || key === 'duration') {
                val = +value;
            }
            acc[key] = {'es-MX': val};
            return acc;
            
        }, {});

        onAction(data);
    }

    const getDefaultData = (key) => {
        return data && data[key] ? data[key]['es-MX'] : '';
    }

    return (<form onSubmit={handleSubmit}>
        <fieldset>
            <p>
                <label htmlFor="title">Book Title</label>
                <input id="title" type="text" name="title" defaultValue={getDefaultData('title')}/>
            </p>
            
            <p>
                <label htmlFor="is_original">Is original</label>
                <input type="checkbox" name="is_original" value="true"/>
            </p>
            
            <p>
                <label htmlFor="street_date">street date</label>
                <input type="date" name="street_date"/>
            </p>
            <p>
                <label htmlFor="cost_per_play">Cost per play</label>
                <input type="text" name="cost_per_play"/>
            </p>
            <p>
                <label htmlFor="authors">Authors</label>
                <input type="text" name="authors"/>
            </p>
            <p>
                <label htmlFor="narrators">Narrators</label>
                <input type="text" name="narrators"/>
            </p>
            <p>
                <label htmlFor="duration">duration</label>
                <input type="text" name="duration"/>
            </p>
            <p>
                <label htmlFor="cover">cover url</label>
                <input type="text" name="cover"/>
            </p>
            <p>
                <button type="submit">{actionTitle}</button>
            </p>
        </fieldset>
    </form>)
}

export default AudioBook;
