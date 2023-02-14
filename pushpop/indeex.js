let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]
largeCountries.push("Pakistan")
largeCountries.unshift("China")
largeCountries.shift()
for(let i=0;i<largeCountries.length;i++)
{
    console.log("-"+largeCountries[i])
}