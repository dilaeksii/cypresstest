describe("Login Page", () => {
    it("Başarılı form doldurulunca Success sayfasına giriş yapıyor", () => {
        cy.visit("http://localhost:5173"); 

        cy.get('[name="email"]').should("be.visible").type("erdem.guntay@wit.com.tr");

        cy.get('[name="password"]').should("be.visible").type("9fxIH0GXesEwH_I ");

        cy.get('[name="terms"]').check().should("be.checked");

        cy.contains("Sign In").should("not.be.disabled").click();

        cy.url().should("include", "/success");

        cy.contains("Giriş Başarılı!");
    });

    it("Email yanlış girilince doğru hata mesajı dönüyor", () => {
        cy.visit("http://localhost:5173"); 

        cy.get('[name="email"]').type("abc");

        cy.contains("Please enter a valid email address").should("be.visible");
        cy.get(".errorMsg").should("have.lengthOf", 1);
    });

    it("Email ve şifre yanlış girilince doğru hata mesajları dönüyor", () => {
        cy.visit("http://localhost:5173"); 

        cy.get('[name="email"]').type("abc");
        cy.contains("Please enter a valid email address").should("be.visible");

        cy.get('[name="password"]').type("1");
        cy.contains("Password must be at least 4 characters long").should("be.visible");

        cy.get(".errorMsg").should("have.lengthOf", 2);
    });

    it.only("Terms kabul edilmeyince buton disabled", () => {
        cy.visit("http://localhost:5173"); 

        cy.get('[name="email"]').should("be.visible").type("erdem.guntay@wit.com.tr");

        cy.get('[name="password"]').should("be.visible").type("9fxIH0GXesEwH_I ");

        cy.get('[name="terms"]').should("not.be.checked");
        cy.get("button").contains("Sign In").should("be.disabled")
       
    });

})