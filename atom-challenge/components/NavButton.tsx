interface NavButtonProps {
    placeholder: string
}

export default function NavButton({placeholder}:NavButtonProps) {
    return (<a href='./'className='text-white text-lg h-lg pl-[5px] hover:border-l-2 border-[#4FFF4B]'>
        {placeholder}
    </a>)
}
//o href='./' poderia ser substituido por um {placeholder} dando retorno as paginas cujo nomes seriam os
//mesmos escritos no site porém por questão de não ter uma pagina pronta para cada uma delas farei com que
//todas retornem para a página inicial.