// pure funtion
{
    const add = (a, b) => a + b;

    // console.log(add(5, 6));

    // console.log(add(1, 1));
    // console.log(add(2, 1));
    // console.log(add(3, 1));
    // console.log(add(4, 1));
    // console.log(add(5, 1));
}


// Impure Function
{
    let total = 0

    const addTotal = (amount) => total = total + amount; // এইটি sideEffect handle করছে ।

    // console.log(addTotal(4))


    const updateDate = () => {
        return new Date()
    }

    const randomNumber = (amount) => {
        return amount + Math.random()
    }

    // console.log(randomNumber(3))
    // console.log(randomNumber(3))
    // console.log(randomNumber(3))
    // console.log(randomNumber(3))
    // console.log(randomNumber(3))
}


// Mutation 
import { produce } from "immer"
{
    const employee = {
        name: 'Masum',
        address: {
            country: "Bangladesh",
            city: "Dhaka"
        }
    }

    console.log(employee)

    // const employee2 = employee

    // employee2.name = 'billah' // এখানে mutation এর কাজ টা করে । 

    // console.log(employee2)


    const employee2 = {
        ...employee,
        address: { ...employee.address, city: 'kurigram' }
    } // এটায় হলো best practice  তাই আমরা এই ভাবে কাজ করবো

    employee2.name = 'billah'  // এখন ঠিক আছে 
    employee2.address.city = "kurigram" // এখানে ঝামেলা আবার কারণ এটি main ডাটা কে change করে দিতেছে । 

    // console.log(employee2)




    // এখন আমরা best উপায় use করবো immer 
    const employee3 = produce(employee, (draft) => {
        draft.name = "Immer Use",
            draft.address.city = "Ulipur"
    })

    console.log(employee3)
}


//* Currying / Function Curry
{
    // normal function 
    const add = (a, b) => a + b

    // currying function
    // এই function এর সুবিধা হইলো  এটি single parameter নেয় .
    const add1 = (a) => (b) => a + b

    function add3(a) {
        return function (b) {
            return a + b
        }
    }

    // একটা প্রোডাক্ট এর উদাহরণ product এর price discount নিয়ে 
    // এখানে সুবিধা টা হইলো আমি discount একবার লিখছি কিন্তু বারবার price দিতেছি  normal function এ এই জিনিস টা হয় না price, discount বার বার দেওয়া লাগে

    const productPrice = (discount) => (amount) => amount - amount * discount;

    const withDiscount = productPrice(0.3)
    // console.log(withDiscount(100))
    // console.log(withDiscount(80))
    // console.log(withDiscount(50))
    // console.log(withDiscount(30))

}
