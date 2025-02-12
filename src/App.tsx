import cartIcon from './assets/icon-cart.svg'
import productDesktopImg from './assets/image-product-desktop.jpg'
import productMobileImg from './assets/image-product-mobile.jpg'
import { Button, Card } from './components'

function App() {
  return (
    <main className="bg-cream flex h-screen flex-col items-center justify-center">
      <Card>
        <img src={productMobileImg} className="block h-full rounded-t-[10px] object-cover md:hidden" alt="Product image mobile" />
        <img src={productDesktopImg} className="hidden h-full rounded-l-[10px] object-cover md:block" alt="Product image desktop" />

        <Card.body>
          <div className="mb-3 tracking-[4px] uppercase md:mb-5">Perfume</div>

          <div className="flex flex-grow flex-col space-y-4 md:space-y-7">
            <h1 className="font-fraunces text-very-dark-blue text-header">Gabrielle Essence Eau De Parfum</h1>

            <p className="text-paragraph md:tracking-[0.4px]">
              A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="mt-1 flex items-center">
              <span className="font-fraunces text-dark-cyan text-header mr-5">$149.99</span>
              <span className="line-through">$169.99</span>
            </div>
          </div>
          <div className="mt-5 flex flex-col md:mt-0">
            <Button>
              <img src={cartIcon} className="mr-3" alt="Cart icon" />
              Add to Cart
            </Button>
          </div>
        </Card.body>
      </Card>
    </main>
  )
}

export default App
