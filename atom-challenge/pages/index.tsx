import { Inter } from 'next/font/google'
import Image from 'next/image'
import * as images from '../assets'
import Logo from '@/components/Logo'
import NavButton from '@/components/NavButton'
import Search from '@/components/Search'
import SideText from '@/components/SideText'
import Arrow from '@/components/Arrow'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='bg-[#290742] border-b-[#4FFF4B] border-b-[6px] px-[130px] py-[68px]'>
      <div className='flex justify-between items-center'>
        <div>
          <Logo/>
        </div>

        <div className='flex gap-[30px] h-[28px]'>
          <NavButton placeholder='Home'/>
          <NavButton placeholder='Sobre'/>
          <NavButton placeholder='Categorias'/>
          <NavButton placeholder='Contato'/>
        </div>

        <div className='flex items-center'>
          <input placeholder={"Buscar"} className='text-white outline-none bg-[#170027] px-[25px] py-[14px] rounded-l-lg'></input>
          <button className='bg-[#9E6DC2] px-[25px] py-[14px] rounded-r-lg hover:bg-[#9f6dc2af]'>
            <Search/>
          </button>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='w-[569px] pt-[67px]'>
          <h1 className='text-[36px] font-[700] pb-[16px] text-[#9E6DC2]'>
            Veja o guia definitivo para conquistar seus objetivos como DEV em 2022'
          </h1>
          <p className='text-[20px] text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet 
          ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac.
          </p>
          <div>
            <button className='flex items-center pt-[10px] text-[23px] text-[#9E6DC2] hover:text-[#9f6dc2af]'>
              <a href='./' className='pr-[5px]'>
                {/* dado que a página de 'veja mais' não está implementada 
                a funcionalidade apenas é redirecionada para a página inicial
                que é a própria página */}
                Veja mais
              </a>
              <Arrow/>
            </button>
          </div>
        </div>
        <div className='w-[569px] pt-[67px]'>
          <Image src={images.feat} width={570} height={346} alt=""/>
        </div>  
      </div>
    </div>
    <div className='bg-white px-[130px] py-[60px]'>
      <div className='flex text-[#290742] justify-between'>
        <div>
          <Image src={images.post1} width={570} height={342} alt=""/>
          <SideText
            date='Janeiro 04, 2022'
            title='Começando no ReactJS em 2022'
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, 
            sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, 
            sed tristique. Sed volutpat aenean.'
          />
        </div>

        <div>
          <div>
            <SideText
                date='Janeiro 04, 2022'
                title='Conheça as principais técnicas para conseguir uma vaga internacional em programação'
                body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet 
                ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.'
            />
          </div>
          <div>
            <SideText
                date='Janeiro 04, 2022'
                title='Veja a evolução do Front-end na prática'
                body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in 
                aliquet ut adipiscing neque.'
            />
          </div>
        </div>
      </div>
      <div className='flex text-[#290742] justify-between overflow-auto pt-[60px] gap-[30px] scrollbar-hide'>
        <div>
          <Image src={images.post2} width={570} height={342} alt=""/>
          <SideText
            date='Janeiro 04, 2022'
            title='10 dicas para conseguir a vaga desejada'
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut 
            adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.'
          />
        </div>

        <div>
        <Image src={images.post3} width={570} height={342} alt=""/>
          <SideText
            date='Janeiro 04, 2022'
            title='Deixe seu código mais semântico com essas dicas'
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet
            ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.'
          />
        </div>

        <div>
        <Image src={images.post4} width={570} height={342} alt=""/>
          <SideText
            date='Janeiro 04, 2022'
            title='Use essas dicas nas suas aplicações mobile'
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet
            ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.'
          />
        </div>
      </div>
    </div>
    </>
  )
}
