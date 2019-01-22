
var app  = new Vue ({
    el:'main',
    data: {
        meses: ['enero', 'febrero','marzo','abril','mayo','junio,','julio','agosto','septiembre'],
        niveles:[
                    {nombre:'New York', dificultad:'alta'},
                    {nombre:'Arenas movedizas', dificultad:'media'},
                    {nombre:'Luna', dificultad:'bajas'},
                    {nombre:'Castillo de koopa', dificultad:'altísima'}
                ]
    }
})