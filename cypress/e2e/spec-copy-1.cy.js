describe('template spec', () => {
  
  
 /* beforeEach( () => { //Para no repetir cosas en cada uno de los it
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Estudia para QA{enter}")
  })*/

/*   
1. Crear tarea:
● Ingresa el nombre de una tarea en el campo de texto.
● Presiona la tecla "Enter" o haz clic en el botón "Add".
● Verifica que la tarea se agregue correctamente a la lista.
*/
  it('Primera tarea: verificar que entra en lista', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Estudia para QA{enter}")
    cy.get('[data-testid="todo-item-label"]').should('contain', 'Estudia para QA')
  })




  /*
2. Marcar tarea como completada:
● Agrega una tarea a la lista.
● Haz clic en el botón de marca de verificación junto a la tarea.
● Verifica que la tarea se marque como completada.
  */
  it('Segunda tarea: clicar en tarea completada y verificar que lo hace', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Estudia para QA{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()

    cy.get('[data-testid="todo-item-label"]').should('contain', 'Estudia para QA')
  })





/*
3. Desmarcar tarea completada:
● Agrega una tarea a la lista.
● Haz clic en el botón de marca de verificación junto a la tarea para marcarla como
completada.
● Haz clic nuevamente en el botón de marca de verificación para desmarcar la tarea.
● Verifica que la tarea se muestre como no completada.
*/
it('Tercera tarea: Desmarcar la tarea completada', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')
  cy.get('[data-testid="text-input"]').type("Estudia para QA{enter}")
  cy.get('[data-testid="todo-item-toggle"]').check()

  cy.get('[data-testid="todo-item-label"]').should('contain', 'Estudia para QA')
  cy.get('[data-testid="todo-item-toggle"]').uncheck()
})




/* 4. Editar tarea:
● Agrega una tarea a la lista.
● Haz doble clic en el texto de la tarea para editarlo.
● Ingresa un nuevo nombre para la tarea y presiona la tecla "Enter".
● Verifica que el nombre de la tarea se actualice correctamente en la lista*/
it('Cuarta tarea: Modificar la tarea', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')
  cy.get('[data-testid="text-input"]').type("Estudia para QA{enter}")
  cy.get('[data-testid="todo-item-label"]').should('contain', 'Estudia para QA')

  cy.get('[data-testid="todo-item-label"]').dblclick()

  cy.get('.view > .input-container > [data-testid="text-input"]').clear().type("Estudiar Puto QA{enter}")
  cy.get('[data-testid="todo-item-label"]').should('contain', 'Estudiar Puto QA')
})





/*5. Borrar tarea:
● Agrega una tarea a la lista.
● Haz clic en el botón "X" junto a la tarea para eliminarla.
● Verifica que la tarea se elimine correctamente de la lista.
 */
it('Quinta tarea: Eliminar una tarea de la lista', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')
  cy.get('[data-testid="text-input"]').type("Estudia para QA{enter}")
  
  cy.get('[data-testid="todo-item-button"]').click({force:true})

})




/*6. Filtrar tareas:
● Agrega varias tareas a la lista, algunas completadas y otras no completadas.
● Haz clic en el botón de filtro correspondiente a las tareas completadas.
● Verifica que solo se muestren las tareas completadas en la lista.
● Haz clic en el botón de filtro correspondiente a las tareas no completadas.
● Verifica que solo se muestren las tareas no completadas en la lista.
● Haz clic en el botón "All" para volver a mostrar todas las tareas en la lista.
 */
it('Sexta tarea: filtrar', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')
  cy.get('[data-testid="text-input"]').type("Estudia para QA{enter}")
  cy.get('[data-testid="text-input"]').type("Ducharme {enter}")
  cy.get('[data-testid="text-input"]').type("Realizar actividades{enter}")

  cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').check()

  cy.get('[data-testid="footer-navigation"] > :nth-child(2) > a').click() //ACTIVAS
  //cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').should('contain', 'Estudia para QA')
  cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').should('contain', 'Estudia para QA')
  //cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').should('contain', 'Realizar actividades')
  cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').should('contain', 'Realizar actividades')

  cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click() //COMPLETADAS
  cy.get('[data-testid="todo-item-label"]').should('not.be.checked')

  cy.get('[data-testid="footer-navigation"] > :nth-child(1) > a').click() //TODAS
  cy.get('[data-testid="todo-item-label"]').should('have.length', 3)
  
  
})

















})