import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount'
import { User } from '../../src/entities'

describe('UserAccount', () => {
    it('should render the user name', () => {
        const user: User = {id: 1, name: "Vicky"}
        render(<UserAccount user={user} />)

        expect(screen.getByText(user.name)).toBeInTheDocument()
    })

    it('should render the the edit button if user is admin', () => {
        const user: User = {id: 1, name: "Vicky", isAdmin: true}
        render(<UserAccount user={user} />)

        const button = screen.getByRole('button', { name: /edit/i })
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/edit/i)
    })

    it('should not render the edit button if user is not admin', () => {
        const user: User = {id: 1, name: "Vicky"}
        render(<UserAccount user={user} />)

        const button = screen.queryByRole('button')
        expect(button).not.toBeInTheDocument()
    })
})