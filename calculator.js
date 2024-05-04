#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
function calculate() {
    return __awaiter(this, void 0, void 0, function () {
        var answer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt([{
                            message: "Enter first number",
                            type: "number",
                            name: "firstNumber"
                        }])];
                case 1:
                    answer = _a.sent();
                    console.log(answer.firstNumber);
                    return [2 /*return*/];
            }
        });
    });
}
calculate();
// module.exports = calculate;
console.log("Hello World");
// let Calculation = async () => {
//   //  console.log(figlet.textSync("CALCULATOR"));
//     let CalculationData = await inquirer.prompt([
//         //First Number Block
//         {
//             name: "Value1",
//             type: "number",
//             message: chalk.green("Please Enter Your First Number: "),
//         },
//         //Second Number Block
//         {
//             name: "Value2",
//             type: "number",
//             message: chalk.green("Please Enter Your Second Number: "),
//         },
//         //Operations List block
//         {
//             name: "Operation",
//             type: "number",
//             message: chalk.green("Press 1 For Addition (+):  \n Press 2 For Subtraction(-): \n Press 3 for Division(÷): \n Press 4 For Multiplication(x): \n Press 5 For Modulo(%): \n Please Select An Operation From 1 to 5: ")
//         },
//     ]);
//     switch (CalculationData.Operation) {
//         case 1:
//             console.log(chalk.green(`The Answer Of ${CalculationData.Value1} + ${CalculationData.Value2} is = ${CalculationData.Value1 + CalculationData.Value2}`));
//             break;
//         case 2:
//             console.log(chalk.green(`The Answer Of ${CalculationData.Value1} - ${CalculationData.Value2} is = ${CalculationData.Value1 - CalculationData.Value2}`));
//             break;
//         case 3:
//             console.log(chalk.green(`The Answer Of ${CalculationData.Value1} ÷ ${CalculationData.Value2} is = ${CalculationData.Value1 / CalculationData.Value2}`));
//             break;
//         case 4:
//             console.log(chalk.green(`The Answer Of ${CalculationData.Value1} x ${CalculationData.Value2} is = ${CalculationData.Value1 * CalculationData.Value2}`));
//             break;
//         case 5:
//             console.log(chalk.green(`The Answer Of ${CalculationData.Value1} % ${CalculationData.Value2} is = ${CalculationData.Value1 % CalculationData.Value2}`));
//             break;
//         default:
//             console.log(chalk.green("Your Input Is Incorrect"));
//             break;
//     }
// };
// //Main Function
// let main = async () => {
//     do {
//         await Calculation();
//         var repeateCalculation = await inquirer.prompt([
//             {
//                 name: "repeat",
//                 type: "string",
//                 message: "Do You want to perform calculation again? Y/N : ",
//             },
//         ]);
//     } while (repeateCalculation.repeate == "Y" || repeateCalculation.repeate == "y");
// };
// //Calling Main Function
// main();
