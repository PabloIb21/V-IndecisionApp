import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter Component', () => {

    let wrapper = shallowMount( Counter )

    beforeEach(() => {
        wrapper = shallowMount( Counter )
    })

    // test('debe hacer match con el snapshot ', () => {

    //     expect( wrapper.html() ).toMatchSnapshot()

    // })

    test('h2 debe de tener el valor por defecto', () => {

        expect( wrapper.find('h2').exists() ).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        expect( h2Value ).toBe('Counter')

    })

    test('el valor por defecto debe ser 100 en el p', () => {

        const value = wrapper.find('[data-testid="counter"]').text()

        expect( value ).toBe( '100' )

    })

    test('debe incrementar y decrementar el contador', async() => {

        const [ increaseBtn, decreaseBtn ] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect( value ).toBe( '101' )

    })

    test('debe establecer el valor por defecto', () => {
        
        const start = wrapper.props('start')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect( Number(value) ).toBe( start )

    })

    test('debe mostrar la prop title', () => {

        const title = 'Hola Mundo'
        
        const wrapper = shallowMount( Counter, {
            props: {
                title,
                // start: 5
            }
        }) 

        expect( wrapper.find('h2').text() ).toBe( title )

    })
})
