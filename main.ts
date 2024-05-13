import inquirer from "inquirer";

const input = await inquirer.prompt([
    {message: "Enter your age", type: "number", name: "age"},
    {message: "Enter your nationality", type: "string", name: "nationality"},

])
if((input.nationality== "pakistan" || input.nationality == "Pakistan") && (input.age>= 18)){
    console.log("You're eligible for NIC")
}
else{
    console.log("You're not eligible for NIC")
}