import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet'
import "@testing-library/jest-dom/vitest" 

describe('Greet', () => {
    it('should render Hello with the namw when name is provided', () => {
       render(<Greet name="Vicky" />)

       const heading = screen.getByRole('heading');
       expect(heading).toBeInTheDocument()
         expect(heading).toHaveTextContent(/vicky/i)
    })
})