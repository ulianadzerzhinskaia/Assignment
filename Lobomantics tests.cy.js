
describe ('Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1337/')
        cy.contains('Conference').click( {force: true})
        cy.contains('View Sessions').click()
    })

    it ("Checking if a user is able to view the speaker's profile", () => {
        cy.get('[data-cy="title"]').should('contain', 'A.I. powered robots')
        cy.contains("View Bowie Graves's Profile").click() 
        cy.url().should('include', '/conference/speaker/')

    })
/*The best practice is touse data-* attributes to provide context to selectors and isolate them from CSS or JS changes. However,
data-* is not available for the elements below, therefore, other selectors used for the test below. Normally, I would ask developers to add data-*
*/ 
    it ('Checking if a user is able to submit a session', () => {
        cy.contains('Submit a Session').click()
        cy.get('#inputTitle')
            .type('New title')
            .should('have.value','New title')
        cy.get('#inputDescription')
            .type('New description')
            .should('have.value','New description')
        cy.get('#inputDay')
            .type('Friday')
            .should('have.value','Friday')
        cy.get('#inputLevel')
            .type('Beginner')
            .should('have.value','Beginner')
        cy.get('.btn.btn-primary').click()
        cy.contains('Session Submitted Successfully!')
        
    })
})