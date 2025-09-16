import { FaTimes, FaShoppingCart, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { ImageCustom } from '../../Custom/ImageCustom';



export const CartMenu = ({ cart, onClose, onRemoveItem }) => {
  const navigate = useNavigate();
  
  return (
    <div className="fixed top-[10vh] right-0 w-full md:w-96 bg-surface border-l border-b border-grey1/20 shadow-lg z-50">
      <div className="p-4 flex justify-between items-center border-b border-grey1/20">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <FaShoppingCart className="text-ascensor" />
          Mi Carrito ({cart.length})
        </h3>
        <button 
          onClick={onClose}
          className="text-grey1 hover:text-ascensor transition-colors"
        >
          <FaTimes size={20} />
        </button>
      </div>

      <div className="max-h-[60vh] overflow-y-auto">
        {cart.length === 0 ? (
          <div className="p-8 text-center text-grey1">
            Tu carrito está vacío
          </div>
        ) : (
          <ul className="divide-y divide-grey1/10">
            {cart.slice(0, 3).map((item) => (
              <li key={item.id} className="p-4 flex gap-4">
                <div className="w-16 h-16 bg-gray-800 rounded-md overflow-hidden">
                  <ImageCustom
                    src={item.image.url} 
                    alt={item.image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium line-clamp-1">{item.name}</h4>
                  <p className="text-ascensor font-semibold">${item.price.toLocaleString()}</p>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveItem(item.id);
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {cart.length > 3 && (
        <div className="p-4 border-t border-grey1/20 text-center">
          <p className="text-grey1 mb-2">+{cart.length - 3} artículos más</p>
        </div>
      )}

      <div className="p-4 border-t border-grey1/20">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">Total:</span>
          <span className="text-ascensor font-bold">
            ${cart.reduce((sum, item) => sum + item.price, 0).toLocaleString()}
          </span>
        </div>
        
        <button
          onClick={() => {
            navigate('/cart');
            onClose();
          }}
          className="w-full bg-ascensor hover:bg-ascensor/90 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          Ver carrito completo <FaChevronRight />
        </button>
      </div>
    </div>
  );
};