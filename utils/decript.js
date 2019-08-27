module.exports = {
    moduleDecript : decript = (cript, casas) => {
        const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
        console.log('entrei')
        var decrip = '';
        var index = 0;
        var indexFinal  = 0;
        [...cript].forEach(l => {
        index = alfabeto.indexOf(l)
        //console.log(l + ',' + index);
        if(index == -1){
            decrip += l;
            return;
        }
        if(index < casas){
                indexFinal = alfabeto.length - (casas - index)
        }else{
            indexFinal = index - casas
        }

        decrip += alfabeto.charAt(indexFinal);
        })
        return decrip
    }
}