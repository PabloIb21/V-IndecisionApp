describe('Example Component', () => {
  test('Debe ser mayor a 10', () => {
    
    // Arreglar
    let value = 5

    // Estímulo
    value = value + 6

    // Observar el resultado
    expect( value ).toBeGreaterThan( 10 )

  })
})
