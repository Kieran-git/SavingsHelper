export type ProjectionResults = {
    monthlyInterest: string;
    yearlyInterest: string;
    totalInterest: string;
};

const calculateProjection = (
    investmentAmount: string,
    monthlyContribution: string,
    interestRate: string,
    years: number
): ProjectionResults => {
    let balance = Number(investmentAmount) || 0;
    const contribution = Number(monthlyContribution) || 0;
    const monthlyRate = (Number(interestRate) || 0) / 100 / 12;
    const monthCount = Math.max(1, Math.round(years)) * 12;
    let totalInterest = 0;
    let monthlyInterest = 0;
    let yearlyInterest = 0;
    let currentYearInterest = 0;

    for (let month = 1; month <= monthCount; month += 1) {
        monthlyInterest = balance * monthlyRate;
        balance += monthlyInterest;
        totalInterest += monthlyInterest;
        currentYearInterest += monthlyInterest;
        balance += contribution;

        if (month % 12 === 0) {
            yearlyInterest = currentYearInterest;
            currentYearInterest = 0;
        }
    }

    return {
        monthlyInterest: monthlyInterest.toFixed(2),
        yearlyInterest: yearlyInterest.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
    };
};

export default calculateProjection;