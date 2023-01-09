import { maximoCurso } from '../src/maximoCurso';

test('should return 6 if there are 2 students 1 courses 6 grade and the other courses 4 grade', () => { 
   const listaAlumnado = [ {
       
            id: '1',
            nombre: 'Maria',
            curso: '4',
            edad: '9'
        
        },
        {
            id: '2',
            nombre: 'Ana',
            curso: '6',
            edad: '12'
        
        },

    ]
    const result = maximoCurso(listaAlumnado);
    expect(result).toBe(6);
} )

