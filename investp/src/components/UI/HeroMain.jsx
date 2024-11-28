import React from 'react'

export default function HeroMain() {
  return (
    <section className='hero-main'>
        <div className='hero-main-content'>
            <h1>InvestPlay</h1>
            <p>The best investment platform for you</p>
            <button>Sign In</button>
            <button>Sign Up</button>
        </div>
        <div className='hero-main-image'>
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="hero-main-image" />
            <div className='hero-main-image-content'>
                <h2>The best investment platform for you</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in urna in tellus tincidunt tincidunt. Sed vitae nisl eget purus hendrerit aliquet. Nullam eget lacus in massa ultricies ultrices. Donec eget orci eu erat consequat tincidunt. Aliquam erat volutpat. Nunc ut lacus ac erat consectetur tincidunt.</p>
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
        </div>

    </section>
  )
}
