import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Starter Plan",
            "price": 25,
            "features": [
                "Access to cardio machines",
                "Access to weightlifting area",
                "Locker room access",
                "Access to basic gym classes",
                "Fitness assessment upon signup"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 40,
            "features": [
                "Access to cardio machines",
                "Access to weightlifting area",
                "Locker room access",
                "Unlimited access to gym classes",
                "Access to sauna and steam room",
                "Personalized workout plan",
                "Discounts on personal training sessions"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 60,
            "features": [
                "Access to cardio machines",
                "Access to weightlifting area",
                "Locker room access",
                "Unlimited access to gym classes",
                "Access to sauna and steam room",
                "Personalized workout plan",
                "Monthly personal training session",
                "Nutritional counseling",
                "Towel service",
                "Priority booking for classes"
            ]
        }
    ]


    return (
        <div className="m-12">
            <h1 className="text-5xl text-center mb-4">Best price in the town</h1>

              <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
              </div>
         
        </div>
    );
};

export default PriceOptions;