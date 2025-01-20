import './Footer.css'

export const Footer = () => {
    return (
        <footer className='page-footer'>
            <div>
                <ul>
                    <li>
                        <a href='https://www.facebook.com/?locale=pt_BR' target='_blank' rel='noreferrer'>
                            <img src='/images/fb.png' alt='Logo Facebook' />
                        </a>
                    </li>

                    <li>
                        <a href='https://x.com/?lang=pt' target='_blank' rel='noreferrer'>
                            <img src='/images/tw.png' alt='Logo X' />
                        </a>
                    </li>

                    <li>
                        <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                            <img src='/images/ig.png' alt='Logo Instagram' />
                        </a>
                    </li>
                </ul>
            </div>
            
            <div className='logo'>
                <img src='/images/logo.png' alt='Logo Organo' />
            </div>

            <div className='powered-by'>
                Desenvolvido por Alura.
            </div>
        </footer>
    )
}