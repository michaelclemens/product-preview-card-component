const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="drop-shadow-card flex max-w-[350px] flex-col rounded-[10px] bg-white md:grid md:max-w-[40rem] md:flex-none md:grid-cols-2">
    {children}
  </div>
)

const CardBody = ({ children }: { children: React.ReactNode }) => (
  <div className="font-montserrat text-dark-grayish-blue flex flex-col p-6 text-sm font-medium md:p-8">{children}</div>
)

Card.body = CardBody

export default Card
