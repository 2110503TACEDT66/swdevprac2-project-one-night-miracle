import getRentals from "@/libs/getRentals"

export default async function RentalsList() {

    const rentals = await getRentals()

    return (
        <>
        {
            rentals.count !== 0? rentals.data.map((rental:any) => (
                <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-sky-100 content-center" key={rental.id}>
                    <table className="table-auto border-separate border-spacing-4 mt-1 text-sky-500 text-md font-sans"><tbody>
                    <tr><td className="font-bold">User ID</td><td>{rental.user}</td></tr>
                    <tr><td className="font-bold">Car</td><td>{rental.car.model}</td></tr>
                    <tr><td className="font-bold">Pickup Date</td><td>{rental.pickupDate}</td></tr>
                    <tr><td className="font-bold">Return Date</td><td>{rental.returnDate}</td></tr>
                    <tr><td className="font-bold">Is Paid?</td><td>{rental.isPaid}</td></tr>
                </tbody></table>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white" name="RemoveBooking"
                /*onClick={() => dispatch(removeBooking(rental.id))}*/>Remove this Rental</button>
                </div>
            )) : <div className="text-4xl font-bold font-serif mt-10 text-center">No Car Rental</div>
        }
        </>
    )
}