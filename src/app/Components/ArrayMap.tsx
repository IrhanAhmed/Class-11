const ArrayMap = () => {
    const conversionRate = 300; // 1 USD = 300 PKR (adjust as needed)
    
    const carName = [
        { 
            carName: "Toyota", 
            model: "Corolla", // Model added
            price: 2000, 
            year: 2020, 
            color: "Red", 
            description: "A reliable sedan with excellent fuel efficiency.",
            Image: "Toyota.jpeg" 
        },
        { 
            carName: "Civic", 
            model: "EX", // Model added
            price: 1000, 
            year: 2023, 
            color: "Black", 
            description: "A sporty compact car with a sleek design.",
            Image: "Civic.jpeg" 
        },
        { 
            carName: "Alto", 
            model: "VXI", // Model added
            price: 900, 
            year: 2018, 
            color: "White", 
            description: "A budget-friendly hatchback for city driving.",
            Image: "Aulto.jpeg" // No image for Alto
        },
    ];

    return (
        <div className="flex flex-wrap gap-6 justify-center">
            {carName.map((veh, index) => (
                <div
                    key={index}
                    className={`flex flex-col items-center my-4 p-6 w-52 rounded-lg shadow-lg ${
                        veh.carName === "Toyota" ? "bg-blue-500" :
                        veh.carName === "Civic" ? "bg-green-500" :
                        "bg-gray-500"
                    }`}
                >
                    {/* Check if the car has an image and render it */}
                    {veh.Image ? (
                        <img
                            src={`/${veh.Image}`} // Correct image path
                            alt={veh.carName}
                            className="w-40 h-40 object-cover mb-4 rounded-full"
                        />
                    ) : (
                        <p className="text-white mb-4">No image available</p> // Fallback if no image exists
                    )}
                    <h4 className="text-xl font-bold mb-2">{`${veh.carName} ${veh.model}`}</h4>
                    <p className="text-lg font-semibold mb-1">{`₨ ${veh.price * conversionRate}`}</p> {/* Price in PKR */}
                    <p className="text-sm mb-1">{`Year: ${veh.year}`}</p>
                    <p className="text-sm mb-1">{`Color: ${veh.color}`}</p>
                    <p className="text-sm italic text-center">{veh.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ArrayMap;
