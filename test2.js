describe("My first cypress test", () => {

    it("TC01_Assertion Test", () => {

        expect(true).to.eq(true);

    })

})

describe("Browser Actions", () => {

    it("TC01_Should load correct URL", () => {

        cy.visit("Http://example.com/");

    })

    it("TC02_Should check for correct URL", () => {

        cy.url().should('include', "example");

    })

    it("TC03_Should load correct web elements", () => {

        cy.get("h1").should('be.visible');

    })

})