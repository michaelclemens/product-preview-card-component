const Button = ({ children }: { children: React.ReactNode }) => (
  <button className="bg-dark-cyan hover:bg-dark-cyan-hover flex w-full items-center justify-center rounded-lg p-4 font-bold text-white transition-colors duration-300 hover:cursor-pointer">
    {children}
  </button>
)

export default Button
