import DataTable from '../components/DataTable'
import Background from '../assets/images/multiple.jpg'

function Dashboard() {
    return (
      <div
      style={{ backgroundImage: `url(${ Background })` }}
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
          <div className='relative flex place-items-center pb-96 h-screen'>
              <DataTable />
          </div>
      </div>
    )
}

export default Dashboard