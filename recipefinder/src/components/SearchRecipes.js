import { useState } from 'react';
import { connect } from 'react-redux';
import { setRecipes } from '../actions';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';

function SearchRecipes({ setRecipes }) { // Thêm setRecipes vào danh sách tham số
    const [ingredients, setIngredients] = useState('');
    const [dish, setDish] = useState('');

    const handleSearch = () => {
        const url = `https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=${ingredients}`

        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            setRecipes(json.hits); // Sử dụng setRecipes từ props
        });

        // console.log(object);
        // console.log(ingredients);
        console.log(dish);
    }

    return ( 
        <Form className='form-inline'>
            <FormGroup>
                <FormLabel>Ingredients</FormLabel>
                {' '}
                <FormControl 
                    type='text' 
                    placeholder='garlic, chicken'
                    onChange={event => setIngredients(event.target.value)}
                />
            </FormGroup>
            {' '}
            <FormGroup>
                <FormLabel className='label_edit'>Dish</FormLabel>
                {' '}
                <FormControl 
                    type='text' 
                    placeholder='adobo'
                    onChange={event => setDish(event.target.value)}
                />
            </FormGroup>
            {' '}
            <Button className='btn_edit' onClick={handleSearch}>Submit</Button>
        </Form>
     );
}

export default connect(null, { setRecipes })(SearchRecipes);
