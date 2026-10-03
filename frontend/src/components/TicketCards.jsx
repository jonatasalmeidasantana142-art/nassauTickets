function TicketCard({ ticket, type }) {
  return (
    <div>
      <h2>{ticket}</h2>
      <p>{type}</p>
    </div>
  )
}

export default TicketCard