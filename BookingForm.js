import React, { useState } from 'react';

function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        guests: 1
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Tutaj możesz dodać logikę wysyłania formularza do serwera
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="date" name="date" onChange={handleChange} />
            <input type="time" name="time" onChange={handleChange} />
            <input type="number" name="guests" min="1" onChange={handleChange} />
            <button type="submit">Book</button>
        </form>
    );
}

export default BookingForm;
