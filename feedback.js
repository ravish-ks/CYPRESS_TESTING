describe('Cypress Tests', function(){
    
    it('Sample Test', function(){
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.get('#feedback > div > strong').click();

        cy.get('#name').clear();
        cy.get('#name').type('ravish');

        cy.get('#email').clear();
        cy.get('#email').type('rv@gmail.com');

        cy.get('#subject').clear();
        cy.get('#subject').type('cypress');

        cy.get('#comment').click();
        
        cy.get('.btn-signin').click();
    })
})