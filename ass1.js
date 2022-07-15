describe("Assessment-01", () => {

    it("URL login", () => 
    {
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.url().should('include', "index.html")
    })

    it("Sign in", ()=>
    {
        cy.get("#signin_button").click()
        cy.loginscenario("username","password")
    })

    it("Feedback Form", ()=>
    {
        cy.contains("Zero Bank").click()
        cy.contains('Feedback').click()
        cy.url().should('include', "feedback.html")
        cy.wait(5000)
        cy.feedbackscenario("rvsh","testfeedback@gmail.com","testassess","no issues")
    })
})