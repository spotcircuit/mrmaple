export default function TopBar() {
  return (
    <div className="bg-primary text-white py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-200"><i className="fab fa-facebook"></i></a>
          <a href="#" className="hover:text-gray-200"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-gray-200"><i className="fab fa-twitter"></i></a>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-200">Contact</a>
          <a href="#" className="hover:text-gray-200">Track Orders</a>
          <a href="#" className="hover:text-gray-200">Gift Cards</a>
          <a href="#" className="hover:text-gray-200">Rewards</a>
          <a href="#" className="hover:text-gray-200">Login</a>
          <a href="#" className="hover:text-gray-200">Wholesale Registration</a>
        </div>
      </div>
    </div>
  )
}
