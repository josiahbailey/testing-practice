import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import AnimalForm from './AnimalForm'

test('species, age, notes inputs are rendered', () => {
    const { getByLabelText } = render(<AnimalForm />)

    getByLabelText(/species/i)
    getByLabelText(/age/i)
    getByLabelText(/notes/i)
})

test('form submit adds new animal to the list', () => {
    const { getByLabelText } = render(<AnimalForm />)

    // querying for input nodes
    const speciesInput = getByLabelText(/species/i)
    const ageInput = getByLabelText(/age/i)
    const notesInput = getByLabelText(/notes/i)

    //use the change event to add text to each input
    fireEvent.change(speciesInput, { target: { value: 'Test Species'}})
    fireEvent.change(ageInput, { target: { value: 'Test Species'}})
    fireEvent.change(notesInput, { target: { value: 'Test Species'}})

    expect(speciesInput.value).toBe('Test Species')
})