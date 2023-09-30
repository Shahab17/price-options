import PriceOption from "../PriceOption/PriceOption";



const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$29.99",
            "features": [
                "Access to gym facilities",
                "Cardio and strength training equipment",
                "Locker room access"
            ]
        },
        {
            "id": 2,
            "name": "Silver Membership",
            "price": "$49.99",
            "features": [
                "Access to gym facilities",
                "Cardio and strength training equipment",
                "Locker room access",
                "Group fitness classes"
            ]
        },
        {
            "id": 3,
            "name": "Gold Membership",
            "price": "$79.99",
            "features": [
                "Access to gym facilities",
                "Cardio and strength training equipment",
                "Locker room access",
                "Group fitness classes",
                "Personal trainer sessions (2 per month)"
            ]
        },
        {
            "id": 4,
            "name": "Platinum Membership",
            "price": "$99.99",
            "features": [
                "Access to gym facilities",
                "Cardio and strength training equipment",
                "Locker room access",
                "Group fitness classes",
                "Unlimited personal trainer sessions",
                "Access to sauna and spa"
            ]
        },
        {
            "id": 5,
            "name": "Student Membership",
            "price": "$24.99",
            "features": [
                "Access to gym facilities",
                "Cardio and strength training equipment",
                "Locker room access"
            ]
        },
        {
            "id": 6,
            "name": "Senior Membership",
            "price": "$39.99",
            "features": [
                "Access to gym facilities",
                "Cardio and strength training equipment",
                "Locker room access",
                "Silver Sneakers classes"
            ]
        }
    ]


    return (
        <div className="container mx-auto my-16 px-5">
            <h3 className="text-3xl text-center font-bold my-10">Best Prices in the town</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6">
                {
                    priceOptions.map(price => <PriceOption key={price.id} option={price} ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;