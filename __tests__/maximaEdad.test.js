import { maximaEdad } from '../src/maximaEdad';

test('should return 10 if there are 2 students 1 age 10 and the other age 8', () => {
   const listaAlumnado = [ {
       
            id: '1',
            nombre: 'Sergio',
            curso: '3',
            edad: '10'
        
        },
        {
            id: '2',
            nombre: 'Maria',
            curso: '2',
            edad: '8'
        
        },

    ]
    const result = maximaEdad(listaAlumnado);
    expect(result).toBe(10);
} )

