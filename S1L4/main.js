
var app  = new Vue ({
    el:'main',
    data: {
        meses: ['enero', 'febrero','marzo','abril','mayo','junio,','julio','agosto','septiembre'],
        mesNuevo:null
    },
    methods:{
        agregarMes : function(){
            this.meses.unshift(this.mesNuevo);
            this.mesNuevo = null;
        }
    }
})

// function agregarMes(){
//     var input = document.querySelector('input');
//     app.meses.unshift(input.value)
//     input.value = '';

// }