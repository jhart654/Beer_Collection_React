import Background from '../assets/images/Beer.jpeg'

function Home() {
  return (
    <div
    style={{ backgroundImage: `url(${ Background })` }}
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
        <div className='flex place-items-center h-screen'>
            <h1 className="p-5 bg-white bg-opacity-25 text-8xl text-black rounded">Welcome to My Beer Collection</h1>
        </div>
    </div>
  )
}

export default Home