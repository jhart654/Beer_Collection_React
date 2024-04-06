import Background from "../assets/images/Beer3.jpg"

function About() {
  return (
    <div
    style={{ backgroundImage: `url(${ Background })` }}
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
        <div className='flex place-items-center h-screen'>
            <h3 className="p-5 bg-white bg-opacity-50 text-5xl text-black rounded">
            This beer collection is a curated assortment of different types of beers from 
            various breweries, regions, and styles. Beer enthusiasts often collect rare 
            and unique beers to explore different flavors, aromas, and brewing techniques. 
            This beer collection can range from a small selection of favorites to a large and 
            diverse assortment showcasing the diversity of the craft beer industry. Each beer
             in a collection tells a story of tradition, innovation, and craftsmanship, making
              it a fascinating and enjoyable hobby for beer lovers.
              </h3>
        </div>
    </div>
  )
}

export default About