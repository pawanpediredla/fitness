
describe('Landing Page', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should render the page with correct title', () => {
      cy.get('h1').contains('myfitness');
    });
  
    it('should display a user icon button', () => {
      cy.get('button')
        .find('svg')  // Assuming there's only one icon and it’s inside a button
        .should('exist');
    });
  
    it('should have the correct background gradient', () => {
      cy.get('body').should('have.css', 'background')
        .and('match', /linear-gradient\(200deg, #0066EE 60%, #9383FB 100%\)/);
    });
  
    it('should display the subtitle text', () => {
      cy.get('text').contains('#1 nutrition tracking app');
    });
  });
  