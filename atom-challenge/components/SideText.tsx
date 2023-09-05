interface SideText {
    date: string
    title: string
    body: string
}

export default function NavButton({date, title, body}:SideText) {
    return (
        <div className='w-[471px] h-[219px] pt-[23px] overflow-hidden'>
            <p className='text-[16px] text-[#000]'>
                {date}
            </p>
            <h1 className='text-[20px] font-[700] pb-[8px] text-[#290742]'>
                {title}
            </h1>
            <p className='text-[18px] text-[#000]'>
                {body}
            </p>
        </div>
    )
}