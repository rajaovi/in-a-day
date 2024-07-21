describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })
})

describe('OrangeHRM login', () => {
  it('login with valid cred', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('#username').type('Admin');
    cy.get('#password').type('admin123');
  })
})